import type { ZodFormattedError } from "zod";
import logger from "~/logger";
import { clientScheme } from "./schema";

export const formatErrors = (
  errors: ZodFormattedError<Map<string, string>, string>
) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && "_errors" in value)
        return `${name}: ${value._errors.join(", ")}\n`;
    })
    .filter(Boolean);

const env = clientScheme.safeParse(import.meta.env);

if (env.success === false) {
  logger.error(
    "? Invalid environment variables:\n",
    ...formatErrors(env.error.format())
  );
  throw new Error("Invalid environment variables");
}

export const clientEnv = env.data;
