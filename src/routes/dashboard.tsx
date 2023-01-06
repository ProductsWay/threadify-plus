import { A } from "solid-start";
import { Protected } from "~/components/Protected";
import SiteTitle from "~/components/SiteTitle";

export const { routeData, Page } = Protected(() => {
  return (
    <div class="hero bg-base-200">
      <SiteTitle>Dashboard</SiteTitle>

      <div class="text-center hero-content">
        <div class="max-w-xlg">
          <h1 class="text-6xl font-thin text-sky-700">User Dashboard (WIP)</h1>
          <p class="py-6">
            Threadify<sup>+</sup> is a simple and easy-to-use tool that helps
            users read and share Twitter threads with ease.
          </p>
          <A href="/">
            <button class="btn btn-primary">Get Started</button>
          </A>
        </div>
      </div>
    </div>
  );
});

export default Page;
