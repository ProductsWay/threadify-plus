import { z } from "zod";

export const serverScheme = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  GITHUB_ID: z.string(),
  GITHUB_SECRET: z.string(),
  AUTH_SECRET: z.string(),
  BOOKMARK_API_URL: z
    .string()
    .default("https://staging-threadify-bookmark-pw62.encr.app"),
  NEXTAUTH_URL: z.string().optional(),
});

export const clientScheme = z.object({
  API_URL: z.string().default("https://twitter-threads.productsway.com"),
  MODE: z.enum(["development", "production", "test"]).default("development"),
});
