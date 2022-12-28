import { For } from "solid-js";
import { A, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getThreadById } from "~/api-client";
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
    <div class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center text-gray-700 shadow-xl">
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
          />
        )}
      </For>
    </div>
  );
}
