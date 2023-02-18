import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import userKeyGen from "./userKeyGen";

const userLogin = async (req: any, res: any) => {
    const user = await User.findOne({ ownerAddress: req.body.ownerAddress });
    if (user) {
        console.log(user);
        res.send(JSON.stringify(user))
    } else {
        const res = userKeyGen(req.body.ownerAddress)
        const marketsList = [
            {
                ownerAddress: req.body.ownerAddress,
                apiKey: res.apiKey,
                oracles: []
            },
        ];
        marketsList.forEach((e) => User.create(e));
        return marketsList[0]
    }
}

export default userLogin 
