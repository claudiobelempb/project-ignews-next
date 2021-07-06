import Head from "next/head";
import style from "../assets/styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <div className={style.title}>Hello World!</div>
    </>
  );
}
