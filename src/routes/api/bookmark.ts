import { decode } from "@auth/core/jwt";
import { APIEvent, json } from "solid-start/api";
import { serverEnv } from "~/env/server";
import { sign } from "~/jwt";
import logger from "~/logger";

export async function GET(event: APIEvent) {
  logger.info("get token", event.request.headers);
  const cookie = event.request.headers.get("cookie");
  if (!cookie) {
    return json({ message: "no cookie" }, { status: 401 });
  }

  // parse cookie string to object
  const cookies: Record<string, string> = cookie.split(";").reduce((acc, c) => {
    const [key, val] = c.trim().split("=");
    return { ...acc, [key]: val };
  }, {});

  // decode value if cookie name has next-auth
  const token = cookies["next-auth.session-token"];
  if (!token) {
    return json({ message: "no token" }, { status: 401 });
  }

  logger.info("token", token);

  const user = await decode({
    token,
    secret: serverEnv.AUTH_SECRET,
  });

  logger.info("user", user);

  const jwtToken = sign(user);

  return json({ jwtToken, user });
}
