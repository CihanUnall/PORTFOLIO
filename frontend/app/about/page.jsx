"use client";
import React from "react";
import "../styles/about.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function page() {
  return (
    <div className="about-page">
      <div className="container">
        <div className="header">
          <div className="profile">
            <h1>Cihan Ünal</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="contact">
            <p>
              <FontAwesomeIcon icon={faMailBulk} width={16} height={16} />
              ---------------------
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} width={16} height={16} />
              ---------------------
            </p>
            <p>
              <FontAwesomeIcon icon={faAddressBook} width={16} height={16} />
              Nrw, Deutschland
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} width={16} height={16} />
              linkedin.com/in/cihan-unal
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} width={16} height={16} />
              github.com/CihanUnall
            </p>
          </div>
        </div>
        <hr />
        <div className="content">
          <h3>Motivationsschreiben</h3>
          <p>Sehr geehrte Damen und Herren,</p>
          <p>
            Klicken Sie <a href="#">hier</a>, um weitere Informationen zu
            erhalten
          </p>

          <hr />
          <p className="signature">
            Mit freundlichen Grüßen
            <br />
            Cihan Ünal
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
