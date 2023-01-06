import { For, Show } from "solid-js";
import { A, Meta, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getThreadById } from "~/api-client";
import SiteTitle from "~/components/SiteTitle";
import { TwitterCard } from "~/components/TwitterCard";
import { UserCard } from "~/components/UserCard";

import logger from "~/logger";

export function routeData({ params }: RouteDataArgs) {
  logger.info("loading route data", params.id);
  return createServerData$(async ([, id]) => await getThreadById(id), {
    key: () => ["threads", params.id],
  });
}

const downloadPdfFile = async (id?: string) => {
  const element = document.getElementById("thread");
  const opt = {
    filename: `${id}-${Date.now()}.pdf`,
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    html2canvas: { scale: 2, useCORS: true },
  };

  // @ts-expect-error global html2pdf from CDN
  return window.html2pdf().set(opt).from(element).save();
};

export default function ThreadPage() {
  const data = useRouteData<typeof routeData>();

  const { thread, id = "" } = data.latest ?? {};

  const ids = Array.from(data.latest?.ids ?? []).reverse();
  const threadId = data.latest?.ids?.[data.latest?.ids?.length - 1];

  const name = thread?.[id]?.includes?.users?.[0].name ?? "";
  const username = thread?.[id]?.includes?.users?.[0].username ?? "";
  const avatar = thread?.[id]?.includes?.users?.[0].profile_image_url ?? "";
  return (
    <>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
        integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <div class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center text-gray-700 shadow-xl">
        <SiteTitle>
          Thread {threadId} by {name}
        </SiteTitle>
        <Meta
          property="og:title"
          content={`Thread ${threadId} by ${name}
`}
        />
        <Meta
          property="og:description"
          content={thread?.[threadId ?? id]?.data?.text ?? ""}
        />

        <Meta property="og:image" content={avatar} />

        <Show when={thread?.[id]} fallback={<p>Loading...</p>}>
          <div class="text-sm breadcrumbs">
            <ul>
              <li>
                <A href="/">Home</A>
              </li>
              <li>Thread</li>
              <li>
                <A
                  href={`https://twitter.com/${username}/status/${threadId}`}
                  target="_blank"
                >
                  {threadId}
                </A>
              </li>
            </ul>
          </div>

          <div
            id="thread"
            class="container flex flex-col items-center py-8 px-4 mx-auto w-full text-center"
          >
            <UserCard name={name} username={username} picture={avatar} />

            <For each={ids}>
              {(currentId) => (
                <TwitterCard
                  createdAt={
                    currentId === id
                      ? thread?.[currentId]?.data.created_at
                      : undefined
                  }
                  text={thread?.[currentId]?.data.text}
                  images={
                    thread?.[currentId]?.includes?.media
                      ?.filter((item) => item.type === "photo")
                      ?.map((item) => item.url) ?? []
                  }
                  videoId={
                    thread?.[currentId]?.includes?.media?.filter(
                      (item) => item?.type === "video"
                    )?.length ?? 0 > 0
                      ? currentId
                      : undefined
                  }
                />
              )}
            </For>
          </div>
        </Show>
        <div class="mb-10">
          <script
            async
            type="module"
            src="https://unpkg.com/sharing-btn@0.1.0/dist/esm/sharing-btn.js"
          ></script>
          {/** @ts-expect-error use sharing-btn web component */}
          <sharing-btn
            url={`https://threadify.productsway.com/thread/${threadId}`}
            description={`A good thread ${threadId} by ${name}`}
          >
            {/** @ts-expect-error use sharing-btn web component */}
          </sharing-btn>
        </div>
      </div>
      <button
        class="absolute top-0 right-0 mt-2 btn btn-sm btn-secondary"
        type="button"
        onClick={() => downloadPdfFile(threadId)}
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="mr-2 w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
        Save as PDF
      </button>
    </>
  );
}
