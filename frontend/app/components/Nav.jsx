"use client";
import React, { useState, useEffect, useRef } from "react";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Menü açıldığında 10 saniye sonra otomatik kapat
  useEffect(() => {
    if (menuOpen) {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setMenuOpen(false);
      }, 10000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [menuOpen]);

  // Menüye tıklanınca süreyi sıfırla ve tekrar başlat
  const handleMenuClick = () => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 10000);
  };

  return (
    <section className="options">
      <div className="item1">
        <div>
          <Image
            src="/vscode.png"
            alt="VS Code"
            width={16}
            height={16}
            loading="lazy"
          />
        </div>

        {/* Menü (Geniş ekran) */}
        <div className="item1-menu">
          <ul>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
          </ul>
        </div>

        {/* Burger Menü */}
        <div className="burger-container">
          <button onClick={toggleMenu} className="item1-burger">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="burger-text">Settings</div>

          {menuOpen && (
            <div className="mobile-menu" onClick={handleMenuClick}>
              <ul>
                <li>File</li>
                <li>Edit</li>
                <li>Selection</li>
                <li>View</li>
                <li>Go</li>
                <li>Run</li>
                <li>Terminal</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="item2">
        <p>Cihan Ünal - Portfolio</p>
      </div>

      <div className="item3">
        <p>_</p>
        <FontAwesomeIcon icon={faSquare} />
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </section>
  );
}

export default Nav;
