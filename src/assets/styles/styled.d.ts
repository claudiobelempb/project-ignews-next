import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue: string;
      blue_light: string;
      red: string;
      red_light: string;
      green: string;
      green_light: string;
      white: string;
      gray: string;
      dark: string;
      dark_light: string;
      light: string;
      black: string;
      gray: string;
      gray_light: string;
      success: string;
      info: string;
      warning: string;
      danger: string;
    };
  }
}
