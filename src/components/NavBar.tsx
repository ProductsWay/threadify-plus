import { Show, type Component } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { authOpts } from "~/routes/api/auth/[...solidauth]";
import { signIn, signOut } from "@auth/solid-start/client";
import { getSession } from "@auth/solid-start";
import { A, useLocation } from "solid-start";

interface INavBarProps {}

export const NavBar: Component<INavBarProps> = () => {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  const session = useSession();
  return (
    <nav class="bg-sky-800">
      <ul class="container flex justify-end items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">Home</A>
        </li>
        <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
          <A href="/about">About</A>
        </li>
        <li class={`border-b-2 ${active("/faq")} mx-1.5 sm:mx-6`}>
          <A href="/faq">FAQ</A>
        </li>
        <Show
          when={session()?.user}
          keyed
          fallback={
            <li class="ml-auto">
              <button
                class="btn btn-secondary"
                onClick={() => signIn("github")}
              >
                Sign in
              </button>
            </li>
          }
        >
          {(user) => (
            <>
              <li class="ml-auto">
                <div class="dropdown dropdown-end">
                  <label tabIndex={0} class="p-2 btn btn-ghost rounded-btn">
                    <Show when={user.image} keyed>
                      {(avatar) => (
                        <div class="mr-2 avatar">
                          <div class="p-1 w-16 h-16 mask mask-squircle bg-base-100">
                            <img src={avatar} class="mask mask-squircle" />
                          </div>
                        </div>
                      )}
                    </Show>
                    <p class="font-semibold">{user.name}</p>
                  </label>
                  <ul
                    tabIndex={0}
                    class="p-2 mt-2 w-full shadow menu dropdown-content bg-base-100 rounded-box"
                  >
                    <li class="text-gray-700">
                      <A href="/dashboard">Dashboard</A>
                    </li>
                    <li class="mt-2">
                      <button
                        onClick={() => signOut()}
                        class="btn btn-secondary"
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          )}
        </Show>
      </ul>
    </nav>
  );
};

export const useSession = () => {
  return createServerData$(
    async (_, { request }) => {
      return await getSession(request, authOpts);
    },
    { key: () => ["auth_user"] }
  );
};
