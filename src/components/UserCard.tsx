import { A } from "solid-start";

export function UserCard({
  name,
  picture,
  username,
}: {
  name: string;
  username: string;
  picture: string;
}) {
  return (
    <div class="w-96 card card-side bg-base-100">
      <figure>
        <img src={picture} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {name} (@{username})
        </h2>
        <div class="justify-center card-actions">
          <A href={"https://twitter.com/" + username} target="_blank">
            <button class="btn btn-secondary">Follow</button>
          </A>
        </div>
      </div>
    </div>
  );
}
