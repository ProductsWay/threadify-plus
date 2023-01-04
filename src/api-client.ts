import wretch from "wretch";
import logger from "./logger";
import { TwitterDetail } from "./types";

export const apiClient = wretch("https://twitter-threads.productsway.com"); // Base url

export const getThreadById = async (id: string, limit = 50) => {
  logger.info("get thread by id", id);
  const result = await apiClient
    .url(`/api/thread/${id}?limit=${Number(limit)}`)
    .get()
    .json<{
      ids: string[];
      thread: Record<string, TwitterDetail>;
    }>();

  return { id, ...result };
};

export const getTweetByUrl = async (url: string) => {
  logger.info("get thread by url", url);
  const matches = url.split("/");
  const id = matches[matches.length - 1];
  const result = await apiClient
    .url(`/api/tweet/${id}`)
    .get()
    .json<Record<string, TwitterDetail>>();

  return { id, ...result };
};

export const getVideoById = async (id: string) => {
  logger.info("get video by id", id);
  const result = await apiClient
    .url(`/api/video/${id}`)
    .get()
    .json<Record<"meta", { "og:video": string }>>();

  return { id, ...result };
};
