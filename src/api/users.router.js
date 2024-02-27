import express, { Router } from "express";
import { prisma } from "./prisma.js";
import yup from "yup";

const createUserSchema = yup.object({
  name: yup.string().min(2).max(16),
  surname: yup.string().min(2).max(16),
  email: yup.string().email(),
  username: yup
    .string()
    .lowercase()
    .matches(/$[a-z]+^/),
});

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

usersRouter.post("/", async (req, res) => {});
