import { useParams } from "solid-start";

export default function ThreadPage() {
  const params = useParams();

  return (
    <div class="min-h-screen hero bg-base-200">
      <div>ID {params.id}</div>
    </div>
  );
}
