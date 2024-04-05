import express, { Router } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import cors from "cors";
import { usersRouter } from "./users.router.js";
import { accountRouter } from "./account.router.js";
import { ValidationError } from "yup";

export const api = express();
const router = Router();

api.use(cors());
api.use(express.json());
api.use(bodyParser.json());

router.use("/users", usersRouter);
router.use("/account", accountRouter);

api.use("/api/", router);

api.use((error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(422).json(error);
  }

  throw error;
  next();
});
