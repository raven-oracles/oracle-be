import { Router } from "express";
import * as marketController from "./controllers/marketsController";
import * as userController from "./controllers/userController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));
router.get("/markets", marketController.getMarkets);
// router.get("/keyGen",);
router.get("/user", userController.getUsers); // router.post("/updateUserData", );

export { router };
