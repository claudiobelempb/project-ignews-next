import Head from "next/head";
// import style from "../assets/styles/global-default.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <div className={"container"}>
        <div className={"content"}>
          <h1>Hello World!</h1>
        </div>
      </div>
    </>
  );
}
