"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

export default function NavMenu() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((nav) => document.getElementById(nav.id));
      const currentScroll = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && currentScroll >= sections[i].offsetTop - 300) {
          setActiveLink(navLinks[i].id);
          break;
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once on component mount to initialize active link

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run this effect only once on mount

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((nav, i) => (
          <li key={i}>
            <Link
              href={`#${nav.id}`}
              className={`group flex items-center py-3 
            ${activeLink === nav.id ? "active" : ""}
          `}
              onClick={() => {
                const element = document.getElementById(nav.id);
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {nav.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
