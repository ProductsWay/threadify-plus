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

  const { ids = [], thread, id = "" } = data.latest ?? {};

  return (
    <div class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center text-gray-700 shadow-xl">
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <A href="/">Home</A>
          </li>
          <li>Detail</li>
        </ul>
      </div>
      <UserCard
        name={thread?.[id]?.includes?.users?.[0].name ?? ""}
        username={thread?.[id]?.includes?.users?.[0].username ?? ""}
        picture={thread?.[id]?.includes?.users?.[0].profile_image_url ?? ""}
      />
      <For each={ids}>
        {(id) => (
          <div>
            <TwitterCard
              createdAt={thread?.[id]?.data.created_at}
              text={thread?.[id]?.data.text}
            />
          </div>
        )}
      </For>
    </div>
  );
}
