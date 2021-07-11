import { AppProps } from "next/app";
import { Header } from "../components/Header";

import "../assets/styles/global-default.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={"container border-bottom"}>
        <div className={"content"}>
          <Header />
        </div>
      </div>
      <div className={"container"}>
        <div className={"content"}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
