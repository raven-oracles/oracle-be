import { verify } from 'crypto';
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import userKeyGen from "./userKeyGen";

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
const createOracle = async (req: any, res: any) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const verified = jwt.verify(token, jwtSecretKey ?? '');
        if (verified) {
            const newOracle =
            {
                oracleKey: makeid(16),
                oracleAddress: 'none',
                masterAddress: 'none',
                clientAddress: 'none',
                userAddress: 'none',
            }
            //@ts-ignore 
            const add = verified.wallet as string
            await User.updateOne({ ownerAddress: add }, { $push: { oracles: newOracle } });
            res.send(JSON.stringify({ status: 'ok', newOracle }))
        } else {
            res.send(JSON.stringify({ status: 'denied' }))
        }
    } catch (error) {
        res.send(JSON.stringify({ status: 'error', error }))
    }
}

export default createOracle
