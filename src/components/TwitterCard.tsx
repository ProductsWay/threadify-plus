import { For, Show } from "solid-js";

import { TwitterVideoPlayer } from "./TwitterVideoPlayer";
import { PreviewUrls } from "./PreviewUrls";
import TwitterEmbed from "./TwitterEmbed";

import logger from "~/logger";

const getFilename = (fileUrl: string) => {
  const fileName = new URL(fileUrl).pathname.split("/").pop();

  return fileName;
};

const TextFormatter = ({
  text,
  urls,
}: {
  text?: string;
  urls: {
    url: string;
    original_url: string;
  }[];
}) => {
  if (!text) return null;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const htmlContent = text?.replace(urlRegex, (textUrl) => {
    const url = textUrl.replace(",", "");
    // remove url if that is photo or video
    const isPhoto = urls.find(
      (item) => item.original_url === url && item.url.includes("/photo/")
    );
    const isVideo = urls.find(
      (item) => item.original_url === url && item.url.includes("/video/")
    );
    if (isPhoto || isVideo) return ``;

    return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  // convert @username to link
  const usernameRegex = /(@[a-z0-9_]+)/gi;
  const htmlContentWithUsername = htmlContent?.replace(
    usernameRegex,
    (username) => {
      return `<a class="link" href="https://twitter.com/${username.slice(
        1
      )}" target="_blank" rel="noopener noreferrer">${username}</a>`;
    }
  );

  // convert #hashtag to link
  const hashtagRegex = /(#\w+)/g;
  const htmlContentWithHashtag = htmlContentWithUsername?.replace(
    hashtagRegex,
    (hashtag) => {
      return `<a class="link" href="https://twitter.com/hashtag/${hashtag.slice(
        1
      )}" target="_blank" rel="noopener noreferrer">${hashtag}</a>`;
    }
  );

  return (
    <p
      class="w-full min-w-full text-xl prose"
      innerHTML={htmlContentWithHashtag}
    />
  );
};

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
          <div class="w-full carousel">
            <For each={images}>
              {(image) => (
                <div
                  id={getFilename(image)}
                  class={
                    images?.length > 1 ? "w-1/2 carousel-item" : "carousel-item"
                  }
                >
                  <figure>
                    <img
                      class="w-auto max-h-screen contain"
                      src={image}
                      alt={image}
                    />
                  </figure>
                </div>
              )}
            </For>
          </div>
          <Show when={(images?.length ?? 0) > 2}>
            <div class="flex gap-2 justify-center py-2 w-full">
              <For each={images}>
                {(image, index) => (
                  <a
                    href={`#${getFilename(image)}`}
                    class="btn btn-md btn-secondary"
                  >
                    {index.call(index) + 1}
                  </a>
                )}
              </For>
            </div>
          </Show>
        </div>
      </Show>
    </div>
  );
}
