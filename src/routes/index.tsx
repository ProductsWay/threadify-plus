import { TwiterForm } from "~/components/TwitterForm";

export default function Home() {
  return (
    <main class="mx-auto text-center text-gray-700">
      <h1 class="my-16 text-6xl font-thin uppercase max-6-xs text-sky-700">
        ThreadifyPlus!
      </h1>
      <div class="hero bg-base-200">
        <div class="text-center hero-content">
          <p>
            Strive to provide a valuable tool for enhancing your Twitter
            experience and staying connected with your network.
          </p>
        </div>
      </div>

      <div class="divider"></div>

      <div class="container justify-center items-center">
        <TwiterForm />
      </div>
    </main>
  );
}
