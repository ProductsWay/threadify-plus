import { A } from "solid-start";

export default function About() {
  return (
    <div class="min-h-screen hero bg-base-200">
      <div class="text-center hero-content">
        <div class="max-w-xlg">
          <h1 class="text-5xl font-bold">About Us</h1>
          <p class="py-6">
            Threadify is a simple and easy-to-use tool that helps users read and
            share Twitter threads with ease.
          </p>
          <A href="/">
            <button class="btn btn-primary">Get Started</button>
          </A>
        </div>
      </div>
    </div>
  );
}
