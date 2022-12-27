import { createRouteAction } from "solid-start/data";

export function TwiterForm() {
  const [_, { Form }] = createRouteAction(async (formData: FormData) => {
    console.log(formData.get("url"));
  });

  return (
    <Form>
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
        <input class="mt-4 btn btn-primary" type="submit" value="submit" />
      </div>
    </Form>
  );
}
