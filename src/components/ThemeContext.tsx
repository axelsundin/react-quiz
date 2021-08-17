import React from "react";

const themeColours = {
  light: {
    color: "#343434",
    backgroundColor: "#fefefe"
  },
  dark: {
    color: "#fff",
    backgroundColor: "#3f3f3f"
  }
};

type ThemeName = "light" | "dark";
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (name: ThemeName) => void;
};
const ThemeContext = React.createContext<ThemeContextType>(undefined!);

type Props = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [themeName, setThemeName] = React.useState<ThemeName>("light");

  React.useEffect(() => {
    const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkOS ? "dark" : "light");
  }, []);

  const setTheme = (name: ThemeName) => {
    document.body.style.setProperty("--color", themeColours[name].color);
    document.body.style.setProperty(
      "--background-color",
      themeColours[name].backgroundColor
    );
    setThemeName(name);
  };
  return (
    <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);