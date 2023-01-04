import { Router } from "express";
import * as marketController from "./controllers/marketsController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));
router.get("/markets", marketController.getMarkets);

export { router };
