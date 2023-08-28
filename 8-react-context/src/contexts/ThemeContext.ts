import { createContext } from "react";

export interface ITheme {
  name: string;
  backgroundColor: string;
  foregroundColor: string;
}

interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export const themes: IThemes = {
  dark: {
    name: "Night",
    backgroundColor: "black",
    foregroundColor: "white",
  },
  light: {
    name: "Day",
    backgroundColor: "white",
    foregroundColor: "black",
  },
};

export const ThemeContext = createContext<ITheme>(themes.light);
