"use client";
import React from "react";
import "../styles/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"; // Eksik import eklendi

function Nav() {
  return (
    <section className="options">
      <div className="item1">
        <Image src="/vscode.png" alt="VS Code" width={16} height={16} />
        <ul>
          <li>File </li>
          <li>Edit </li>
          <li>Selection </li>
          <li>View </li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
        </ul>
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
