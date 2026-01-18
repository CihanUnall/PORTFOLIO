"use client";

import "../styles/myprofile.scss";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <div className="cvWrapper">
      {/* Header */}
      <div className="header">
        <div className="headerOverlay">
          <div className="profile">
            <div className="avatar">
              <Image
                src="/cihan.png"
                alt="Cihan Ünal"
                width={220}
                height={220}
              />
            </div>

            <div className="title">
              <h1>Cihan Ünal</h1>
              <h2>Web Developer</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="socials">
        <div>

        <a href="https://github.com/CihanUnall" target="_blank">
          <FontAwesomeIcon icon={faGithub} style={{ marginRight: "5px" }} />
          GitHub
        </a>
        </div>
        <div>

        <a href="https://www.linkedin.com/in/cihan-ünal/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: "5px" }} />
          LinkedIn
        </a>
        </div>
      </div>

      {/* Contact */}
      <div className="contact">
     
        <span>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: "5px" }} />
          0157 393 80 923
        </span>
       
        <span>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} />
          cihanunal_20@hotmail.com
        </span>
        <span>
          <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "5px" }} />
          44623 Herne
        </span>
       
      </div>

      {/* Experience */}
      <div className="section">
        <div className="date">09.2024 – 11.2025</div>
        <div className="content">
          <h3>Weiterbildung Web und Softwareentwickler</h3>
          <h4>DCI Digital Career Institute GmbH – Berlin – Online</h4>
          <ul>
            <li>09.2025 – 11.2025 Praktikum in Web und Softwareentwicklung</li>
            <li>Zertifikat, 1.800 Unterrichtseinheiten</li>
            <li>
              HTML, CSS, SCSS, Tailwind, JavaScript, React, Next.js, Node.js,
              Express, Git, GitHub, API, SEO, MongoDB
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
