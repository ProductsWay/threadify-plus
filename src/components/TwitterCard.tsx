import { For, Show } from "solid-js";
import { TwitterVideoPlayer } from "./TwitterVideoPlayer";

const getFilename = (fileUrl: string) => {
  const fileName = new URL(fileUrl).pathname.split("/").pop();

  return fileName;
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
    <div class="mb-4 w-full text-left card bg-base-100 lg:card-side">
      <Show when={images?.length}>
        <div class="max-w-xl bg-neutral rounded-box">
          <div class="w-full carousel">
            <For each={images}>
              {(image) => (
                <div
                  id={getFilename(image)}
                  class="relative w-full carousel-item"
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
                  <a href={`#${getFilename(image)}`} class="btn btn-xs">
                    {index.call(index) + 1}
                  </a>
                )}
              </For>
            </div>
          </Show>
        </div>
      </Show>

      {videoId && <TwitterVideoPlayer videoId={videoId} />}
      <div class="card-body">
        <p>{text}</p>
        {createdAt && (
          <div class="justify-end card-actions">
            {new Date(createdAt).toUTCString()}
          </div>
        )}
      </div>
    </div>
  );
}
