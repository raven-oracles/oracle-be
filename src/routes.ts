import { Router } from "express";
import * as marketController from "./controllers/marketsController";
import * as userController from "./controllers/userController";
import userKeyGen from './services/userKeyGen'
import userLogin from './services/userLogin'
import createOracle from './services/createOracle'

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));
router.get("/markets", marketController.getMarkets);
router.get("/users", userController.getUsers); // router.post("/updateUserData", );
router.post("/login", async (req, res) => res.send(JSON.stringify(await userLogin(req))));
router.post('/createOracle', async (req, res) => res.send(JSON.stringify(await createOracle(req))))
export { router };
