"use client";
import React from "react";
import "../styles/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBell } from "@fortawesome/free-regular-svg-icons";

function Footer() {
  return (
    <div className="footer-menu">
      <div className="footer-item1">
        <div className="remote">
          <img src="/remote.png" alt="remote icon" width={20} height={20} />
        </div>
        <div className="info-icon">
          <img src="/wrong.png" alt="VS Code" width={11} height={11} />
          <p>0</p>
          <img src="/math.png" alt="VS Code" width={11} height={11} />
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
        <img src="/google_chrome.png" alt="chrome" />
        <img src="/firefox.png" alt="firefox" />
        <img src="/folders.png" alt="folders" />
        <img src="/vscode.png" alt="vscode" />
        <img src="/github.png" alt="githup" />
        <img src="/mongodb.png" alt="mongodb" />
        <img src="/settings.png" alt="setting" />
        <img src="/trash.png" alt="trash" />
        <img src="/menu.png" alt="menu" />
      </div>
    </div>
  );
}

export default Footer;
