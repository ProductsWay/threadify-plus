import { A } from "solid-start";

export default function About() {
  return (
    <div class="min-h-screen hero bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-xlg">
          <h1 class="text-5xl font-bold">About Us</h1>
          <p class="py-6">
            ThreadifyPlus is a simple and easy-to-use tool that helps users read
            and share Twitter threads with ease.
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
