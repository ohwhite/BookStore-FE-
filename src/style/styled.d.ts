import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    name: "light" | "dark";
    color: {
      primary: string;
      background: string;
      secondary: string;
      third: string;
      border: string;
      text: string;
    };
    
    heading: {
      large: { fontSize: string };
      medium: { fontSize: string };
      small: { fontSize: string };
    };
    button: {
      large: { fontSize: string; padding: string };
      medium: { fontSize: string; padding: string };
      small: { fontSize: string; padding: string };
    };
    buttonScheme: {
      primary: { color: string; backgroundColor: string };
      normal: { color: string; backgroundColor: string };
      like: { color: string; backgroundColor: string };
    };
    borderRadius: {
      default: string;
    };
    Layout: {
      width: {
        large: string;
        medium: string;
        small: string;
      };
    };
    inputText: {
      background: string;
      color: string;
    }
  }
}