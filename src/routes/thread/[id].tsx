import { For, Show } from "solid-js";
import { A, Meta, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getThreadById } from "~/api-client";
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

  const ids = (data.latest?.ids ?? []).reverse();

  return (
    <Show when={data()}>
      <div class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center text-gray-700 shadow-xl">
        <SiteTitle>
          Thread {id} by {thread?.[id]?.includes?.users?.[0].username ?? ""}
        </SiteTitle>
        <Meta
          property="og:title"
          content={`Thread ${id} by ${
            thread?.[id]?.includes?.users?.[0].username ?? ""
          }
`}
        />
        <Meta property="og:description" content={thread?.[id]?.data?.text} />

        <div class="text-sm breadcrumbs">
          <ul>
            <li>
              <A href="/">Home</A>
            </li>
            <li>Thread</li>
            <li>
              <A
                href={`https://twitter.com/${
                  thread?.[id]?.includes?.users?.[0].username ?? ""
                }/status/${id}`}
                target="_blank"
              >
                {id}
              </A>
            </li>
          </ul>
        </div>
        <UserCard
          name={thread?.[id]?.includes?.users?.[0].name ?? ""}
          username={thread?.[id]?.includes?.users?.[0].username ?? ""}
          picture={thread?.[id]?.includes?.users?.[0].profile_image_url ?? ""}
        />
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
                ).length > 0
                  ? currentId
                  : undefined
              }
            />
          )}
        </For>
      </div>
    </Show>
  );
}
