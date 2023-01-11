import jwt from "jsonwebtoken";
import { serverEnv } from "./env/server";

const secret = serverEnv.AUTH_SECRET;

export const sign = (payload: any) => {
  return jwt.sign(payload, secret);
};

export const verify = (token: string) => {
  return jwt.verify(token, secret);
};
