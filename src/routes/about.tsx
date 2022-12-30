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
            src="https://gyazo.com/a7cb0d4d322c2434d2a148248fa2a75b.gif"
            alt="how to use threadify"
          />
        </div>
      </div>
    </div>
  );
}
