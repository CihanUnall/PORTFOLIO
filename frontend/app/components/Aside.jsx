"use client";
import React from "react";
import "../styles/aside.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";
import {
  faBoltLightning,
  faBox,
  faBug,
  faCodeMerge,
  faExpand,
  faLaptopCode,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Aside() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };
  const pathname = usePathname();
  const navItems = [
    { href: "/home", label: "Startseite.jsx", icon: "/react.png" },
    { href: "/profile", label: "Profil.html", icon: "/html.png" },
    { href: "/project", label: "Projekte.js", icon: "/js.png" },
    { href: "/document", label: "Dokumente.json", icon: "/data.png" },
    { href: "/skills", label: "Fähigkeiten.md", icon: "/markdown.png" },
    { href: "/contact", label: "Kontakt.scss", icon: "/scss.png" },
  ];
  const sideIcons = [
    faFile,
    faCodeMerge,
    faBug,
    faExpand,
    faLaptopCode,
    faMagnifyingGlass,
    faBoltLightning,
    faBox,
  ];
  return (
    <aside>
      <div className="icons">
        {sideIcons.map((icon, index) => (
          <div className="blue-line" key={index}>
            <FontAwesomeIcon icon={icon} />
          </div>
        ))}
      </div>
      <div className="navigation">
        <p onClick={togglePortfolio}>
          {isPortfolioOpen ? "\u003E" : "⌄"}
          &nbsp;PORTFOLIO
        </p>

        {!isPortfolioOpen && (
          <div className="submenu">
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
                &nbsp;{item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Aside;
