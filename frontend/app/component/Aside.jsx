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
    { href: "/", label: "home.jsx", icon: "/react.png" },
    { href: "/about", label: "about.html", icon: "/html.png" },
    { href: "/project", label: "project.js", icon: "/js.png" },
    { href: "/document", label: "document.json", icon: "/data.png" },
    { href: "/resume", label: "resume.md", icon: "/markdown.png" },
    { href: "/contact", label: "contact.scss", icon: "/scss.png" },
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
