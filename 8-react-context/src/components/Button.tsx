import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  click: () => void;
  children: JSX.Element;
}

export const Button = ({ click, children }: IButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.foregroundColor,
      }}
      onClick={click}
    >
      {children}
    </button>
  );
};
