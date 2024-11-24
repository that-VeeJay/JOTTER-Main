import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { ThemeContext } from "../Context/ThemeProvider";
import { useContext, useCallback } from "react";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = useCallback((currentTheme, setTheme) => {
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
    return <Switch className="hidden md:flex" defaultSelected={theme === "light"} onChange={() => toggleTheme(theme, setTheme)} size="sm" aria-label="Toggle theme" color="danger" startContent={<SunIcon />} endContent={<MoonIcon />}></Switch>;
}
