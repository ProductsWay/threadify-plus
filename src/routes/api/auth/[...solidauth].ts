import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start";
import GitHub from "@auth/core/providers/github";
import { serverEnv } from "~/env/server";

export const authOpts: SolidAuthConfig = {
  providers: [
    // @ts-expect-error missing type
    GitHub({
      clientId: serverEnv.GITHUB_ID,
      clientSecret: serverEnv.GITHUB_SECRET,
    }),
  ],
  debug: serverEnv.NODE_ENV === "development",
};

export const { GET, POST } = SolidAuth(authOpts);
