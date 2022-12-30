export function FrequentlyAskedQuestions() {
  return (
    <div class="p-4 mx-auto mt-12 mb-12 w-full max-w-xl bg-white rounded-lg shadow-md">
      <ol class="mb-4 ml-6 list-decimal text-left">
        <li class="mb-4">
          <h3 class="mb-2 text-xl font-bold">
            How does Threadify handle threads with multiple tweets?
          </h3>
          <p class="text-gray-700">
            Threadify uses the last ID of the thread for unrolling. This means
            that if you enter a Twitter URL or ID for the last tweet in a
            thread, Threadify will unroll the entire thread and display all of
            the tweets in order.
          </p>
        </li>
        <li class="mb-4">
          <h3 class="mb-2 text-xl font-bold">Is Threadify free to use?</h3>
          <p class="text-gray-700">
            Yes, Threadify is free to use. It is also open source, which means
            that the source code is available for anyone to view and modify. You
            can find the source code for Threadify at{" "}
            <a
              href="https://github.com/jellydn/threadify-plus"
              class="text-blue-500 hover:underline"
            >
              https://github.com/jellydn/threadify-plus
            </a>
            .
          </p>
        </li>
      </ol>
    </div>
  );
}
