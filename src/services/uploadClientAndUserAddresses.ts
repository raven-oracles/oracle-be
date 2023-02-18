
import { verify } from 'crypto';
import jwt from 'jsonwebtoken';
import { User } from "../models/User";
import userKeyGen from "./userKeyGen";

function findIndexByProperty(data: any, key: string, value: string) {
  for (var i = 0; i < data.length; i++) {
    if (data[i][key] == value) {
      return i;
    }
  }
  return -1;
}

const uploadClientAndUserAddresses = async (req: any, res: any) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const verified = jwt.verify(token, jwtSecretKey ?? '');
    if (verified) {
      //@ts-ignore
      const user = await User.findOne({ ownerAddress: verified.wallet });
      if (user) {
        const index = findIndexByProperty(user.oracles, 'oracleKey', req.body.oracleKey)
        if (user.oracles[index]) {
          //@ts-ignore
          user.oracles[index]?.clientAddress = req.body.clientAddress
          //@ts-ignore
          user.oracles[index]?.userAddress = req.body.userAddress
          await User.updateOne({
            //@ts-ignore
            ownerAddress: verified.wallet
          }, { $set: { oracles: user.oracles } });
          res.send(JSON.stringify({ status: 'ok' }))
        }
      }
    } else {
      res.send(JSON.stringify({ status: 'denied' }))
    }
  } catch (error) {
    res.send(JSON.stringify({ status: 'error', error }))
  }
}

export default uploadClientAndUserAddresses
