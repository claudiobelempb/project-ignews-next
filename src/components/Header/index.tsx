import React from "react";
import Img from "next/image";
import style from "./header.module.scss";
import imgLogo from "../../assets/images/ig.news.svg";
import imgGithubLeft from "../../assets/images/github-left.svg";
import imgGithubRight from "../../assets/images/github-right.svg";
import { Button } from "../Button";
import { FiX } from "react-icons/fi";

interface IHeader {
  children?: React.ReactNode;
}

export const Header: React.FC<IHeader> = ({ children, ...props }: IHeader) => {
  const isUserLoggedIn = true;
  return (
    <header className={`${style.header_default}`}>
      <div className={`grid-1 flex_center`}>
        <div className={`${style.brand}`}>
          <h1 className={"font-zero"}>Logo Ig-news</h1>
          <a href="#">
            <Img src={imgLogo} alt="Logo Ig-news" />
          </a>
        </div>

        <div className={`navbar`}>
          <nav>
            <h2 className={"font-zero"}>nav primary</h2>
            <ul>
              <li>
                <a className={`active`} href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Posts</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={style.btn}>
          {isUserLoggedIn ? (
            <Button
              isEnd={true}
              size={"small"}
              background={"gray"}
              title={"Sing in with GitHub"}
              isIcon={true}
              src={imgGithubLeft}
            />
          ) : (
            <Button
              isEnd={true}
              size={"small"}
              background={"gray"}
              title={"tiagoluchtenberg"}
              isIcon={true}
              src={imgGithubRight}
            >
              <FiX className={"closeIcon"} />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
