import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MobBar from "@/components/MobBar";
import NavLists from "@/components/NavsList";

export const metadata = {
  title: "Resume Builder",
  description: "Smart Resume Builder App with AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="font-[WDXL_Lubrifont_JP_N] antialiased"
        style={{ fontFamily: "WDXL Lubrifont JP N, sans-serif" }}
      >
        <MobBar outer="main-navbar xl:hidden flex flex-row justify-between px-5" />
        <NavLists
          outers="hidden main-navbar xl:flex flex-row justify-between p-3 xl:px-65 "
          inners="flex flex-row px-5 gap-2"
          themebtn="flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200"
        />
        {children}
      </body>
    </html>
  );
}
