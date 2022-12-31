export function ToastMsg({
  type,
  msg,
}: {
  type: "success" | "info";
  msg: string;
}) {
  return (
    <div class="toast toast-top toast-end">
      <div class={`alert alert-${type}`}>
        <span>{msg}</span>
      </div>
    </div>
  );
}
