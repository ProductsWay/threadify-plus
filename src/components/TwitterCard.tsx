export function TwitterCard({
  images,
  createdAt,
  text,
}: {
  images?: string[];
  createdAt?: Date;
  text?: string;
}) {
  return (
    <div class="w-full card bg-base-100">
      {images?.length > 0 && (
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
      )}
      <div class="card-body">
        <p>{text}</p>
        <div class="justify-end card-actions">
          {new Date(createdAt).toUTCString()}
        </div>
      </div>
    </div>
  );
}
