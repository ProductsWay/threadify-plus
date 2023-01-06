import { Meta } from "solid-start";

export function SEO({
  title,
  description,
  content,
  image,
}: {
  title: string;
  description: string;
  content: string;
  image: string;
}) {
  return (
    <>
      <Meta name="twitter:image:src" content={image} />
      <Meta name="twitter:site" content="@threadify+" />
      <Meta name="twitter:card" content={content} />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:image:alt" content={content} />
      <Meta property="og:image:width" content="200" />
      <Meta property="og:image:height" content="200" />
      <Meta property="og:site_name" content="Threadify+ Reader App" />
    </>
  );
}
