import express, { Router } from "express";

export const api = express();
const router = Router();

router.get("/hello", (req, res) => res.send("Hello World!"));
api.use("/api/", router);
