import React from "react";
import Img from "next/image";

import style from "./button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  title?: string;
  color?: string;
  background?: string;
  isBgColor?: boolean;
  bgColor?: string;
  tgColor?: string;
  width?: number;
  MaxWidth?: number;
  MinWidth?: number;
  fontSize?: string;
  opacity?: number | string;
  isAfter?: boolean;
  alt?: string;
  src?: string;
  isIcon?: boolean;
  isActive?: boolean;
  isContent?: boolean;
  isLarge?: boolean;
  isMedium?: boolean;
  isSmall?: boolean;
  isBlue?: boolean;
  isGreen?: boolean;
  isGreenLight?: boolean;
  isRedLight?: boolean;
  isEnd?: boolean;
  isStart?: boolean;
  radius?: boolean;
  size?: "small" | "medium" | "large" | "link" | "block";
}

export function Button({ children, ...props }: IButtonProps) {
  return (
    <div
      className={`${style.btn} ${props.isEnd ? "flex_end" : ""} ${
        props.isStart ? "flex_start" : ""
      }`}
    >
      <button
        className={`
        ${style[props.size]} 
        ${style[props.background]}
        ${style.radius}
      `}
      >
        {props.isIcon ? (
          <Img src={props.src} alt={props.alt} width={24} height={24} />
        ) : (
          ""
        )}
        {props.title ? props.title : "Button"}
        {children}
      </button>
    </div>
  );
}
