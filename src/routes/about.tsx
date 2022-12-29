import { A, Meta } from "solid-start";
import SiteTitle from "~/components/SiteTitle";

export default function About() {
  return (
    <div class="hero bg-base-200">
      <SiteTitle>About Us</SiteTitle>
      <Meta property="og:title" content="About Us" />
      <Meta
        property="og:description"
        content="Threadify+ is a simple and easy-to-use tool that helps users read and share Twitter threads with ease."
      />

      <div class="text-center hero-content">
        <div class="max-w-xlg">
          <h1 class="text-6xl font-thin text-sky-700">About Us</h1>
          <p class="py-6">
            Threadify<sup>+</sup> is a simple and easy-to-use tool that helps
            users read and share Twitter threads with ease.
          </p>
          <A href="/">
            <button class="btn btn-primary">Get Started</button>
          </A>
          <img
            class="mt-4"
            src="https://camo.githubusercontent.com/b698b500234a1b680c35a47f8461e55bc7fe4b4bc3fc9e5b49171b37f7e80265/68747470733a2f2f6779617a6f2e636f6d2f31363230623364383963376637633366356165333966663335313865643065662e676966"
            alt="how to use threadify"
          />
        </div>
      </div>
    </div>
  );
}
