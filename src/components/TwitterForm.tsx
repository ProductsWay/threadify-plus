import { createRouteAction } from "solid-start/data";
import { getTweetByUrl } from "~/api-client";
import logger from "~/logger";

export function TwiterForm() {
  const [data, { Form }] = createRouteAction(async (formData: FormData) => {
    const url = formData.get("url");
    if (!url) {
      throw new Error("Invalid url");
    }
    const { id, ...tweet } = await getTweetByUrl(url.toString());
    logger.info(tweet);
    // navigate to thread page
    window.location.href = `/thread/${id}`;
  });

  return (
    <Form>
      {data.error && (
        <div class="mx-auto shadow-lg alert alert-error">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="flex-shrink-0 w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! {JSON.stringify(data.error)}.</span>
          </div>
        </div>
      )}
      <div class="container flex p-4 mx-auto w-full max-w-lg form-control">
        <label for="url" class="label">
          <span class="label-text">Enter Twitter URL</span>
          <div
            class="tooltip"
            data-tip="https://twitter.com/{USER}/status/{ID}"
          >
            <span class="badge">Example</span>
          </div>
        </label>
        <input
          type="text"
          placeholder="https://twitter.com/"
          class="w-full input input-bordered"
          name="url"
          required
        />
        <input
          disabled={data.pending}
          class="mt-4 btn btn-primary"
          type="submit"
          value="submit"
        />
      </div>
      {data.pending && <progress class="w-56 progress"></progress>}
    </Form>
  );
}
