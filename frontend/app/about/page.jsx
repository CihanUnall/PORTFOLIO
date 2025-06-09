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
          <div>
            <h1>Cihan Ünal</h1>
            <h2>Full Stack Developer</h2>
          </div>
          <div className="contact">
            <p>
              <FontAwesomeIcon icon={faMailBulk} width={16} height={16} />
              cihanunal_20@hotmail.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} width={16} height={16} />
              01573980923
            </p>
            <p>
              <FontAwesomeIcon icon={faAddressBook} width={16} height={16} />
              Herne, Deutschland
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
            meine Leidenschaft für Programmierung und Webentwicklung hat mich
            dazu bewegt, mich beruflich neu zu orientieren und meine technischen
            sowie kreativen Fähigkeiten gezielt in diesem Bereich
            weiterzuentwickeln. Bereits in der Vergangenheit habe ich mich
            intensiv mit Webdesign beschäftigt und moderne Benutzeroberflächen
            mit Tools wie Photoshop, Fireworks und Dreamweaver gestaltet. Dabei
            konnte ich HTML und CSS effektiv einsetzen, um benutzerfreundliche
            und ästhetische Websites zu realisieren.
          </p>
          <p>
            In Deutschland habe ich erfolgreich eine Weiterbildung zum Web- und
            Softwareentwickler abgeschlossen. Dabei habe ich mir fundierte
            Kenntnisse in JavaScript, React, Next.js, Node.js, Express und
            MongoDB angeeignet. Während meiner Ausbildung habe ich an mehreren
            Projekten mitgewirkt – darunter auch ein Gruppenprojekt mit dem
            Titel „KRC Cars“, einer Webanwendung für den Autoverkauf, die mit
            React und Next.js realisiert wurde. Zudem habe ich eine eigene
            Buchhaltungsanwendung in JavaScript entwickelt.
          </p>

          <p>
            Darüber hinaus habe ich in der Vergangenheit eine Ausbildung zum
            Microsoft-Systemadministrator absolviert, wodurch ich auch ein gutes
            Verständnis für technische Infrastrukturen mitbringe. Diese
            Kenntnisse helfen mir dabei, Softwareentwicklung aus einer
            umfassenden Perspektive zu betrachten – sowohl in Bezug auf
            Benutzerfreundlichkeit als auch auf Systemarchitektur.
          </p>
          <p>
            Meine vielfältigen beruflichen Erfahrungen in verschiedenen Branchen
            ermöglichen es mir, innovative und moderne Ansätze in Design und
            Entwicklung zu verfolgen. Ich bin überzeugt, dass meine Motivation,
            mein technisches Wissen und mein kreativer Blick für Gestaltung
            einen Mehrwert für Ihr Unternehmen darstellen werden.
          </p>
          <p>
            Gerne überzeuge ich Sie in einem persönlichen Gespräch von meinen
            Fähigkeiten und meiner Einsatzbereitschaft.
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
