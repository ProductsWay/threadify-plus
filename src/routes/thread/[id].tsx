import { onMount } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start";
import logger from "~/logger";

export function routeData({ params }: RouteDataArgs) {
  logger.info("loading route data", params.id);
  return params;
}

export default function Thread() {
  const { id } = useRouteData<typeof routeData>();

  onMount(() => {
    // client-side redirect
    window.location.href = `https://threadreaderapp.com/thread/${id}.html`;
  });

  return <>Loading...</>;
}
