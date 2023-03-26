import logger from "~/logger";

// TODO: remove photo or video link that is the same as the main link
export function PreviewUrls({ urls }: { urls: string[] }) {
  logger.info("preview urls", urls);
  if (urls.length === 0) return null;

  return (
    <div class="flex flex-row">
      <script async type="module" src="/scripts/preview-url.js"></script>
      <section class="w-full bg-gray-100">
        <div class="px-4 mx-auto text-xs sm:px-6 lg:px-8">
          {urls.map((url) => (
            // @ts-expect-error use preview-url web component
            <preview-url key={url} url={url.replace(",", "")} shortened="yes" />
          ))}
        </div>
      </section>
    </div>
  );
}
