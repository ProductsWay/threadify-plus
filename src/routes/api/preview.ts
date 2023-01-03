import { APIEvent, json } from "solid-start/api";
import { getLinkPreview } from "link-preview-js";
import logger from "~/logger";

export async function GET(event: APIEvent) {
  // parse url params from query string
  // e.g. /preview?url=https://example.com
  const previewUrl = new URL(event.request.url);
  const url = previewUrl.searchParams.get("url");
  logger.info(`Fetching preview for ${url}`);

  if (!url || !url.startsWith("http")) {
    return json({ error: "No URL provided" }, { status: 400 });
  }

  const data = await getLinkPreview(url, {
    headers: {
      "User-Agent": "TwitterBot",
      "Accept-Language": "en-US",
    },
    followRedirects: "follow",
    handleRedirects: (baseURL: string, forwardedURL: string) => {
      logger.info("handle redirect", baseURL, forwardedURL);
      const urlObj = new URL(baseURL);
      const forwardedURLObj = new URL(forwardedURL);
      if (
        forwardedURLObj.hostname === urlObj.hostname ||
        forwardedURLObj.hostname === "www." + urlObj.hostname ||
        "www." + forwardedURLObj.hostname === urlObj.hostname
      ) {
        return true;
      } else {
        return false;
      }
    },
  });
  return json({ data, url });
}
