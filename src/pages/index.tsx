import Head from "next/head";
import Img from "next/image";

import { Button } from "../components/Button";
import style from "./home.module.scss";
import imgMulher from "../assets/images/mulher.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={`grid-2 ${style.home_main}`}>
        <section>
          <p>👏 Hey, welcome</p>
          <h1>
            News about <br /> the <strong>React</strong> world
          </h1>
          <p>
            Get access to all the publications <br />
            <strong>for $9.90 month</strong>
          </p>

          <Button
            isStart={true}
            title={"Subscribe now"}
            background={"yellow"}
            size={"medium"}
          />
        </section>
        <section className={`${style.home_main__img}`}>
          <h2 className={"font-zero"}>img mulher student</h2>
          <Img src={imgMulher} alt={"photo is mulher"} />
        </section>
      </main>
    </>
  );
}
