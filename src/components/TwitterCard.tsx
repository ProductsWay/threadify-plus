import { For, Show } from "solid-js";

import { TwitterVideoPlayer } from "./TwitterVideoPlayer";
import { PreviewUrls } from "./PreviewUrls";
import TwitterEmbed from "./TwitterEmbed";

import logger from "~/logger";
import { Gallery } from "./Gallery";
import { TextFormatter } from "./TextFormatter";

export function TwitterCard({
  position,
  images = [],
  textUrls = [],
  createdAt,
  text,
  videoId,
}: {
  position: string;
  images?: string[];
  createdAt?: Date;
  text?: string;
  textUrls?: {
    url: string;
    original_url: string;
  }[];
  videoId?: string;
}) {
  // get all twitter urls from the url string
  const twitterUrls = textUrls
    .filter((item) => item.url.includes("twitter.com"))
    .map((item) => item.url)
    .filter((item) => !item.includes("/photo/") && !item.includes("/video/"));

  logger.info("twitterUrls", twitterUrls);
  return (
    <div class="py-8 mb-4 w-full text-left shadow-lg card bg-base-100">
      <span class="badge badge-lg badge-info">{position}</span>
      {videoId && <TwitterVideoPlayer videoId={videoId} />}
      <div class="py-2 card-body">
        <TextFormatter text={text} urls={textUrls} />

        <PreviewUrls
          urls={textUrls
            .filter(
              (item) =>
                !item.url.includes("/video/") && !item.url.includes("/photo/")
            )
            .map((item) => item.original_url.replace(",", ""))}
        />
        <For each={twitterUrls}>{(url) => <TwitterEmbed url={url} />}</For>

        {createdAt && (
          <div class="justify-end card-actions">
            {new Date(createdAt).toUTCString()}
          </div>
        )}
      </div>

      <Show when={images?.length}>
        <div class="mx-auto rounded-box">
          <Gallery images={images} />
        </div>
      </Show>
    </div>
  );
}
