import { verify } from 'crypto';
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import userKeyGen from "./userKeyGen";

const uploadOracleWallet = async (req: any, res: any) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const verified = jwt.verify(token, jwtSecretKey ?? '');
    if (verified) {
      //@ts-ignore
      const user = await User.findOne({ ownerAddress: verified.wallet });
      if (user) {
        res.send(JSON.stringify({ status: 'ok', account: user }))
      }
    } else {
      res.send(JSON.stringify({ status: 'denied' }))
    }
  } catch (error) {
    res.send(JSON.stringify({ status: 'error', error }))
  }
}

export default uploadOracleWallet 
