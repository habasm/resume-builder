"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function NavLists({
  outers,
  inners,
  hero,
  themebtn,
  onNavigate,
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("class", savedTheme);
    }
    // Add smooth transition for theme change
    document.documentElement.style.transition =
      "background-color 1.5s, color 0.5s";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("class", newTheme);
  };

  return (
    <div className={outers}>
      <Link className={hero} href="/" onClick={onNavigate}>
        Hero
      </Link>
      <div className={inners}>
        <Link href="/contact" onClick={onNavigate}>
          contact
        </Link>
        <Link href="/contact" onClick={onNavigate}>
          Login
        </Link>
        <button onClick={toggleTheme} className={themebtn} title="Toggle theme">
          {theme === "light" ? (
            <FaMoon className="text-lg text-blue-900" />
          ) : (
            <FaSun className="text-lg text-yellow-400" />
          )}
        </button>
      </div>
    </div>
  );
}
