import { createResource, Show } from "solid-js";
import { getVideoById } from "~/api-client";

export function TwitterVideoPlayer({ videoId }: { videoId: string }) {
  const [video] = createResource(async () => {
    return getVideoById(videoId);
  });

  return (
    <Show when={video()}>
      <video autoplay controls>
        <source src={video.latest?.meta["og:video"]} type="video/mp4" />
      </video>
    </Show>
  );
}
