import { RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getThreadById } from "~/api-client";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(async ([, id]) => await getThreadById(id), {
    key: () => ["threads", params.id],
  });
}

export default function ThreadPage() {
  const thread = useRouteData<typeof routeData>();

  return (
    <div class="min-h-screen hero bg-base-200">
      {thread && <pre>{JSON.stringify(thread(), null, 2)}</pre>}
    </div>
  );
}
