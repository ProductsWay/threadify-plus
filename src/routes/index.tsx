import { TwiterForm } from "~/components/TwitterForm";

export default function Home() {
  return (
    <main class="mx-auto w-full text-center text-gray-700">
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

      <TwiterForm />
    </main>
  );
}
