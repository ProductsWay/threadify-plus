import { A, Meta } from "solid-start";
import { FrequentlyAskedQuestions } from "~/components/FrequentlyAskedQuestions";
import SiteTitle from "~/components/SiteTitle";

export default function Faq() {
  return (
    <div class="hero bg-base-200">
      <SiteTitle>FAQ</SiteTitle>
      <Meta property="og:title" content="About Us" />
      <Meta
        property="og:description"
        content="Threadify+ is a simple and easy-to-use tool that helps users read and share Twitter threads with ease."
      />

      <div class="flex-col text-center md:flex-row hero-content">
        <div class="w-full">
          <h1 class="text-6xl font-thin text-sky-700">
            Frequently Asked Questions
          </h1>
          <div class="divider"></div>
          <p class="py-6">
            Threadify<sup>+</sup> is a simple and easy-to-use tool that helps
            users read and share Twitter threads with ease.
          </p>
          <A href="/">
            <button class="btn btn-primary">Get Started</button>
          </A>
        </div>
        <div class="w-full">
          <FrequentlyAskedQuestions />
        </div>
      </div>
    </div>
  );
}
