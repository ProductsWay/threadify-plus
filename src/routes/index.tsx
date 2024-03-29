import { getSession } from "@auth/solid-start";
import { Meta, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import SiteTitle from "~/components/SiteTitle";
import logger from "~/logger";
import { authOpts } from "./api/auth/[...solidauth]";
import { TwitterForm } from "~/components/TwitterForm";

export const routeData = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts);
    },
    { key: () => ["auth_user"] }
  );
};

export default function Home() {
  const user = useRouteData<typeof routeData>();
  logger.info(user());

  return (
    <main class="mx-auto w-full text-center text-gray-700">
      <SiteTitle>Home</SiteTitle>
      <Meta property="og:title" content="Home" />
      <Meta
        property="og:description"
        content="Threadify+ is a simple and easy-to-use tool that helps users read and share Twitter threads with ease."
      />

      <h1 class="my-16 text-6xl font-thin text-sky-700">
        Threadify<sup>+</sup>
      </h1>

      <div class="h-32 hero bg-base-200">
        <div class="text-center hero-content">
          <p>
            Strive to provide a valuable tool for enhancing your Twitter
            experience and staying connected with your network.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <TwitterForm />
    </main>
  );
}
