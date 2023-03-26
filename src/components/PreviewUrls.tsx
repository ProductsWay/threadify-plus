import logger from "~/logger";

export function PreviewUrls({ urls }: { urls: string[] }) {
  logger.info("preview urls", urls);
  if (urls.length === 0) return null;

  return (
    <div class="flex flex-row">
      <script async type="module" src="/scripts/preview-url.js"></script>
      <div class={`w-full bg-gray-100`}>
        {urls.map((url) => (
          // @ts-expect-error use preview-url web component
          <preview-url class="max-w-xs" key={url} url={url} shortened="yes" />
        ))}
      </div>
    </div>
  );
}
