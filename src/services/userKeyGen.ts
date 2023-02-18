import jwt from 'jsonwebtoken';

const userKeyGen = (userWallet: string) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        wallet: userWallet,
    }
    const token = jwt.sign(data, jwtSecretKey ?? '');
    return {
        apiKey: token
    }
}

export default userKeyGen 
