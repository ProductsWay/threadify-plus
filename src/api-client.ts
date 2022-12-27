import wretch from "wretch";
import logger from "./logger";

export const apiClient = wretch("https://twitter-threads.productsway.com"); // Base url

export const getThreadById = async (id: string) => {
  logger.info("get thread by id", id);
  const result = await apiClient.url(`/api/thread/${id}`).get().json<{
    ids: string[];
    thread: Record<string, unknown>;
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
    .json<Record<string, unknown>>();

  return { id, ...result };
};
