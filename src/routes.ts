import { Router } from "express";
import * as userController from "./controllers/userController";
import userLogin from './services/userLogin'
import createOracle from './services/createOracle'
import uploadOracleWallet from './services/uploadOracleWallet';
import uploadMasterAddress from './services/uploadMasterAddress';
import uploadClientAndUserAddresses from './services/uploadClientAndUserAddresses';
import accountInfo from './services/accountInfo';

const router = Router();

router.get("/", (req, res) => res.send("This is raven api"));
router.get("/users", userController.getUsers);
router.get('/account', accountInfo)

router.post("/login", userLogin); //TODO add wallet signature check
router.post('/createOracle', createOracle)
router.post('/uploadOracleWallet', uploadOracleWallet)
router.post('/uploadMasterAddress', uploadMasterAddress)
router.post('/uploadClientAndUserAddresses', uploadClientAndUserAddresses)

export { router };

