import { createResource, Show } from "solid-js";
import { getVideoById } from "~/api-client";

async function downloadMp4(url: string, filename: string) {
  const response = await fetch(url);
  const file = await response.blob();

  // Create an object URL for the file
  const objectUrl = URL.createObjectURL(file);

  const a = document.createElement("a");
  a.href = objectUrl;
  a.download = filename;

  a.click();

  URL.revokeObjectURL(objectUrl);
}

export function TwitterVideoPlayer({ videoId }: { videoId: string }) {
  const [video] = createResource(async () => {
    return getVideoById(videoId);
  });

  return (
    <Show when={video()}>
      <div class="px-4 mx-auto max-w-5xl card">
        <video class="mb-2 video" autoplay controls>
          <source src={video.latest?.meta["og:video"]} type="video/mp4" />
        </video>

        <button
          class="gap-2 mb-4 btn"
          onClick={() => {
            downloadMp4(
              video.latest?.meta?.["og:video"] ?? "",
              videoId + ".mp4"
            );
          }}
        >
          Download Video
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </button>
      </div>
    </Show>
  );
}
