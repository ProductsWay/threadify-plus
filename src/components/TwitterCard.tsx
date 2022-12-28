import { For } from "solid-js";

export function TwitterCard({
  images = [],
  createdAt,
  text,
}: {
  images?: string[];
  createdAt?: Date;
  text?: string;
}) {
  // TODO: show embed video
  return (
    <div class="w-full text-left card bg-base-100 lg:card-side">
      {images?.length > 0 && (
        <figure>
          <For each={images}>{(image) => <img src={image} alt={image} />}</For>
        </figure>
      )}
      <div class="card-body">
        <p>{text}</p>
        {createdAt && (
          <div class="justify-end card-actions">
            {new Date(createdAt).toUTCString()}
          </div>
        )}
      </div>
    </div>
  );
}
