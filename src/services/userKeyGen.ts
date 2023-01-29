import jwt from 'jsonwebtoken';

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
// userKeyGen(req.body.wallet)
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
// makeid(16)

export default userKeyGen 
