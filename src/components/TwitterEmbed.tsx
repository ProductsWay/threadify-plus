import { createResource } from "solid-js";
import logger from "~/logger";

export function TwitterEmbed({ url }: { url: string }) {
  const [embedData] = createResource<{
    html: string;
  } | null>(async () => {
    logger.info("Fetching Twitter embed data", url);
    const response = await fetch(
      `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}`
    );

    if (response.ok) {
      const data = await response.json();
      logger.info("Fetched Twitter embed data", data);
      return data;
    } else {
      // TODO: handle error
      logger.error("Failed to fetch Twitter embed data", response);
      return null;
    }
  });

  return <div innerHTML={embedData()?.html}>{embedData()?.html}</div>;
}

export default TwitterEmbed;
