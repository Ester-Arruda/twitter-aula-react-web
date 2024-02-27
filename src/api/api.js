import express, { Router } from "express";
import bodyParser from "body-parser";
import { usersRouter } from "./users.router.js";

export const api = express();
const router = Router();

api.use(express.json());
api.use(bodyParser.json());

router.use("/users", usersRouter);
api.use("/api/", router);
