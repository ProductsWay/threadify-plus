import { For, Show } from "solid-js";
import { A, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getThreadById } from "~/api-client";
import { SEO } from "~/components/SEO";
import SiteTitle from "~/components/SiteTitle";
import { TwitterCard } from "~/components/TwitterCard";
import { UserCard } from "~/components/UserCard";

import logger from "~/logger";

export function routeData({ params }: RouteDataArgs) {
  logger.info("loading route data", params.id);
  return createServerData$(async ([, id]) => await getThreadById(id), {
    key: () => ["threads", params.id],
  });
}

export default function ThreadPage() {
  const data = useRouteData<typeof routeData>();

  const { thread, id = "" } = data.latest ?? {};

  const ids = Array.from(data.latest?.ids ?? []).reverse();
  const threadId = data.latest?.ids?.[data.latest?.ids?.length - 1];

  const name = thread?.[id]?.includes?.users?.[0].name ?? "";
  const username = thread?.[id]?.includes?.users?.[0].username ?? "";
  const avatar = thread?.[id]?.includes?.users?.[0].profile_image_url ?? "";
  const content = thread?.[threadId ?? id]?.data?.text ?? "";
  const iamges =
    thread?.[threadId ?? id]?.includes?.media
      ?.filter((item) => item.type === "photo")
      ?.map((item) => item.url) ?? [];

  return (
    <>
      <div class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center text-gray-700">
        <SiteTitle>
          Thread #{threadId} by {name}
        </SiteTitle>
        <SEO
          title={`Thread #${threadId} by ${name}`}
          description={content}
          image={iamges?.[0] ?? avatar}
          content={content}
        />
        <Show when={thread?.[id]} fallback={<p>Loading...</p>}>
          <div class="text-sm breadcrumbs">
            <ul>
              <li>
                <A href="/">Home</A>
              </li>
              <li>Thread</li>
              <li>
                <A
                  href={`https://twitter.com/${username}/status/${threadId}`}
                  target="_blank"
                >
                  {threadId}
                </A>
              </li>
            </ul>
          </div>

          <div
            id="thread"
            class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center"
          >
            <UserCard name={name} username={username} picture={avatar} />

            <For each={ids}>
              {(currentId) => (
                <TwitterCard
                  createdAt={
                    currentId === id
                      ? thread?.[currentId]?.data.created_at
                      : undefined
                  }
                  text={thread?.[currentId]?.data.text}
                  images={
                    thread?.[currentId]?.includes?.media
                      ?.filter((item) => item.type === "photo")
                      ?.map((item) => item.url) ?? []
                  }
                  videoId={
                    thread?.[currentId]?.includes?.media?.filter(
                      (item) => item?.type === "video"
                    )?.length ?? 0 > 0
                      ? currentId
                      : undefined
                  }
                />
              )}
            </For>
          </div>
        </Show>
        <div class="mb-10">
          <script
            async
            type="module"
            src="https://unpkg.com/sharing-btn@0.1.0/dist/esm/sharing-btn.js"
          ></script>
          {/** @ts-expect-error use sharing-btn web component */}
          <sharing-btn
            url={`https://threadify.productsway.com/thread/${id}`}
            description={`A good thread ${threadId} by ${name}`}
          >
            {/** @ts-expect-error use sharing-btn web component */}
          </sharing-btn>
        </div>
      </div>
    </>
  );
}
