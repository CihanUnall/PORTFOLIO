"use client";
import React from "react";
import "../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer-menu">
      <div className="footer-item1">
        <div className="remote">
          <Image src="/remote.png" alt="remote icon" width={20} height={20} />
        </div>
        <div className="info-icon">
          <Image src="/wrong.png" alt="VS Code" width={11} height={11} />
          <p>0</p>
          <Image src="/math.png" alt="VS Code" width={11} height={11} />
          <p>0</p>
        </div>
        <div className="footer-info">
          <ul>
            <li>Watch Sass</li>
            <li>UTF-8</li>
            <li>Go Live</li>
            <li>Prettier</li>
            <li>
              <FontAwesomeIcon icon={faBell} />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-item2">
        <Image src="/google_chrome.png" alt="chrome" width={20} height={20} />
        <Image src="/firefox.png" alt="firefox" width={20} height={20} />
        <Image src="/folders.png" alt="folders" width={20} height={20} />
        <Image src="/vscode.png" alt="vscode" width={20} height={20} />
        <Image src="/github.png" alt="githup" width={20} height={20} />
        <Image src="/mongodb.png" alt="mongodb" width={20} height={20} />
        <Image src="/settings.png" alt="setting" width={20} height={20} />
        <Image src="/trash.png" alt="trash" width={20} height={20} />
        <Image src="/menu.png" alt="menu" width={20} height={20} />
      </div>
    </div>
  );
}

export default Footer;
