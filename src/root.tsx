// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  Link,
} from "solid-start";
import Footer from "./components/Footer";
import { NavBar } from "./components/NavBar";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Threadify+ Reader App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="Threadify+ is a simple and easy-to-use tool that helps users read and share Twitter threads with ease."
        />
        <Link rel="manifest" href="/site.webmanifest" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
          cross-origin="anonymous"
        />
        <script
          data-goatcounter="https://threadify.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="6d454ee0-c8fb-4223-a67b-892d75d03523"></script>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary
            fallback={(e: Error) => (
              <div class="flex flex-col justify-center items-center w-full h-screen">
                <h2 class="text-6xl font-bold tracking-wider text-gray-300 md:text-7xl lg:text-9xl">
                  Oops! An Error!
                </h2>
                <details class="py-2 mt-8 text-center text-gray-500 border-y-2">
                  <summary>Click here to learn more</summary>
                  <p>
                    <strong>{e.name}</strong>: {e.message}
                  </p>
                </details>
                <A href="/" class="mt-8 btn btn-primary">
                  Go Home
                </A>
              </div>
            )}
          >
            <NavBar />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
