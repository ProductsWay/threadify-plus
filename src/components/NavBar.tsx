import { Show, type Component } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { authOpts } from "~/routes/api/auth/[...solidauth]";
import { signIn, signOut } from "@auth/solid-start/client";
import { getSession } from "@auth/solid-start";
import { A } from "solid-start";

interface INavBarProps {}

export const NavBar: Component<INavBarProps> = () => {
  const session = useSession();
  return (
    <>
      <div class="navbar bg-primary text-neutral-content">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="lg:hidden btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="p-2 mt-3 w-52 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
            >
              <li>
                <A href="/about">About</A>
              </li>
              <li>
                <A href="/faq">FAQ</A>
              </li>
            </ul>
          </div>
          <A href="/" class="text-xl normal-case btn btn-ghost">
            Threadify<sup>+</sup>
          </A>
        </div>
        <div class="hidden lg:flex navbar-center">
          <ul class="px-1 menu menu-horizontal">
            <li>
              <A href="/about">About</A>
            </li>
            <li>
              <A href="/faq">FAQ</A>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <Show
            when={session()?.user}
            keyed
            fallback={
              <button class="btn" onClick={() => signIn("github")}>
                Sign in
              </button>
            }
          >
            {(user) => (
              <>
                <div class="dropdown dropdown-end">
                  <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <Show when={user.image} keyed>
                        {(avatar) => (
                          <img src={avatar} class="mask mask-squircle" />
                        )}
                      </Show>
                    </div>
                  </label>
                  <ul
                    tabindex="0"
                    class="p-2 mt-3 w-52 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
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
              </>
            )}
          </Show>
        </div>
      </div>
    </>
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
