import { For } from "solid-js";

type Props = {
  images: string[];
};

export const Gallery = ({ images }: Props) => {
  if (images.length === 0) {
    return null;
  }

  return (
    <div class="rounded gallery">
      <For each={images}>
        {(image) => (
          <img
            class="mx-2 mt-2 w-full h-auto rounded-lg mask"
            src={image}
            alt={image}
          />
        )}
      </For>
    </div>
  );
};
