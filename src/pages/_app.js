import "../public/css/custom.css";
import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import LoaderComponent from "../components/Loading-screeen";

global.__basedir = __dirname;

function MyApp({ Component, pageProps }) {
  const [loaderx, setLoaderx] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setLoaderx(true);
    };
    const handleComplete = () => {
      NProgress.done();
      setLoaderx(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  if (typeof window !== "undefined") {
    const jquery = require("jquery");
    window.$ = window.jQuery = jquery;
  }

  return (
    <>
      {loaderx && <LoaderComponent />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
