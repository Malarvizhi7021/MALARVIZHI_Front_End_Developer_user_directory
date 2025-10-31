import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? <FaMoon /> : <FaSun />}
    </button>
  );
}
