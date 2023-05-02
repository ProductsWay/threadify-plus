import { A } from "solid-start";
import { For } from "solid-js";
import { createResource } from "solid-js";
import { getTopTenThreads } from "~/api-client";
import logger from "~/logger";

export function TopThreads({ limit }: { limit: number }) {
  const [threads] = createResource(async () => {
    logger.info("Fetching Twitter embed data", limit);
    const data = await getTopTenThreads();
    return data.slice(0, limit);
  });

  return (
    <div class="flex justify-center items-center mt-4">
      <For each={threads()}>
        {(thread) => {
          return (
            <div class="avatar">
              <div class="p-1 w-16 h-16 mask mask-squircle bg-base-100">
                <A href={`/thread/${thread.id}`} target="_blank">
                  <img
                    src={thread.avatar}
                    alt={`@${thread.username}`}
                    class="mask mask-squircle"
                  />
                </A>
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default TopThreads;
