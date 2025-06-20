"use client";
import React from "react";
import Link from "next/link";
import NavLists from "./NavsList";

const MobBar = ({ outer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={outer}>
      <div>Hero</div>
      <div
        style={{
          cursor: "pointer",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        {/* Hamburger icon (SVG) */}
        <svg width="24" height="24" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
        </svg>
      </div>
      {/* Left panel */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 999,
            }}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Side Panel */}
          <div
            className="sidebar-fixed overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
            style={{
              maxHeight: "120vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <button
              className="btn-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{ alignSelf: "flex-end" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <line
                  x1="5"
                  y1="5"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="19"
                  y1="5"
                  x2="5"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <NavLists
                outers="flex flex-col mt-7 items-center"
                inners="flex flex-col h-full w-full items-center text-center"
                hero="absolute top-15"
                themebtn="absolute top-16 right-6 cursor-pointer"
                onNavigate={() => setIsOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobBar;
