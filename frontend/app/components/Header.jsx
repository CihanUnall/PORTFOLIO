"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "../styles/header.scss";

function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "home.jsx", icon: "/react.png" },
    { href: "/myprofile", label: "my_profile.html", icon: "/html.png" },
    { href: "/project", label: "project.js", icon: "/js.png" },
    { href: "/document", label: "document.json", icon: "/data.png" },
    { href: "/skills", label: "skills.md", icon: "/markdown.png" },
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
          <Image
            src={item.icon}
            alt={`${item.label} icon`}
            width={20}
            height={20}
          />
          &nbsp;<p className="nav-item-label">{item.label}</p>
        </Link>
      ))}
    </header>
  );
}

export default Header;
