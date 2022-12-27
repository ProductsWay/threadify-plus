import wretch from "wretch";

export const apiClient = wretch("https://twitter-threads.productsway.com"); // Base url

export const getThreadById = async (url: string) => {
  const matches = url.split("/");
  const id = matches[matches.length - 1];
  const result = await apiClient.url(`/api/thread/${id}`).get().json<{
    ids: string[];
    thread: Record<string, unknown>;
  }>();

  return { id, ...result };
};
