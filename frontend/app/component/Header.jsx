"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/header.scss";

function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "home.jsx", icon: "/react.png" },
    { href: "/about", label: "about.html", icon: "/html.png" },

    { href: "/project", label: "project.js", icon: "/js.png" },
    { href: "/document", label: "document.json", icon: "/data.png" },
    { href: "/resume", label: "resume.md", icon: "/markdown.png" },
    { href: "/contact", label: "contact.scss", icon: "/scss.png" },
  ];

  return (
    <header>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ? "active" : ""}
        >
          <img src={item.icon} alt={`${item.label} icon`} />
          &nbsp;{item.label}
        </Link>
      ))}
    </header>
  );
}

export default Header;
