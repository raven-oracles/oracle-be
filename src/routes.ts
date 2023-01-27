import { Router } from "express";
import * as marketController from "./controllers/marketsController";
import * as userController from "./controllers/userController";
import userKeyGen from './services/userKeyGen'
const router = Router();

router.get("/", (req, res) => res.send("Hello World"));
router.get("/markets", marketController.getMarkets);
router.get("/user", userController.getUsers); // router.post("/updateUserData", );
router.post("/keyGen", (req, res) => res.send(JSON.stringify(userKeyGen(req.body.wallet))));

export { router };
