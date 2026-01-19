"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "../styles/header.scss";

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/home", label: "Startseite.jsx", icon: "/react.png" },
    { href: "/profile", label: "Profil.html", icon: "/html.png" },
    { href: "/project", label: "Projekte.js", icon: "/js.png" },
    { href: "/document", label: "Dokumente.json", icon: "/data.png" },
    { href: "/skills", label: "Fähigkeiten.md", icon: "/markdown.png" },
    { href: "/contact", label: "Kontakt.scss", icon: "/scss.png" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={menuOpen ? "burger-line open" : "burger-line"}></span>
        <span className={menuOpen ? "burger-line open" : "burger-line"}></span>
        <span className={menuOpen ? "burger-line open" : "burger-line"}></span>
      </button>

      <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
            onClick={() => setMenuOpen(false)} // Menü kapansın linke tıklayınca
          >
            <Image
              src={item.icon}
              alt={`${item.label} icon`}
              width={20}
              height={20}
            />
            &nbsp;
            <p className="nav-item-label">{item.label}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
