import { Router } from "express";
import { prisma } from "./prisma.js";

export const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

usersRouter.get("/:username", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.params.username,
    },
  });

  res.status(200).json(user);
});
