import {
  JwtService,
  InvalidAuthorizationHeaderError,
  TokenExpiredError,
} from "./jwt.service.js";
const jwtService = new JwtService();
import { prisma } from "./prisma.js";

export async function authMiddleware(req, res, next) {
  try {
    const payload = jwtService.extractTokenFromHeader(req);
    req.user = await prisma.user.findUnique({
      where: {
        id: payload.id,
      },
    });
    return next();
  } catch (error) {
    if (
      error instanceof InvalidAuthorizationHeaderError ||
      error instanceof TokenExpiredError
    ) {
      return res.status(401).json({
        error: "Token inválido",
      });
    }

    throw error;
  }
}
