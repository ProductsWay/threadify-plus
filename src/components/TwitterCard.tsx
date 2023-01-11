import { For, Show } from "solid-js";
import { TwitterVideoPlayer } from "./TwitterVideoPlayer";

const getFilename = (fileUrl: string) => {
  const fileName = new URL(fileUrl).pathname.split("/").pop();

  return fileName;
};

const ConvertUrlToLink = ({ text }: { text?: string }) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const htmlContent = text?.replace(urlRegex, (url) => {
    return `<a class="link" href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });

  return <p class="w-full min-w-full text-xl prose" innerHTML={htmlContent} />;
};

export function TwitterCard({
  images = [],
  createdAt,
  text,
  videoId,
}: {
  images?: string[];
  createdAt?: Date;
  text?: string;
  videoId?: string;
}) {
  return (
    <div class="py-8 mb-4 w-full text-left shadow-lg card bg-base-100">
      {videoId && <TwitterVideoPlayer videoId={videoId} />}
      <div class="py-2 card-body">
        <ConvertUrlToLink text={text} />

        {createdAt && (
          <div class="justify-end card-actions">
            {new Date(createdAt).toUTCString()}
          </div>
        )}
      </div>

      <Show when={images?.length}>
        <div class="rounded-box">
          <div class="carousel">
            <For each={images}>
              {(image) => (
                <div
                  id={getFilename(image)}
                  class="relative justify-center w-full carousel-item"
                >
                  <figure>
                    <img class="contain" src={image} alt={image} />
                  </figure>
                </div>
              )}
            </For>
          </div>
          <Show when={(images?.length ?? 0) > 1}>
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
