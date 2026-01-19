"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/project.scss";

export default function ProjectPage() {
  return (
    <div className="container">
      <div className="card">
        <div className="project-card">
          <h3 className="project-title">Liefrik – Full-Stack-Webanwendung</h3>

          <p className="project-description">
            Als Abschlussprojekt von einem vierköpfigen Team mit der
            Scrum-Methodik entwickelt. Umgesetzt mit HTML, Tailwind CSS,
            Next.js, Express und MongoDB.
          </p>

          <a
            href="https://liefrik.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Projekt ansehen →
          </a>
        </div>

        <iframe
          src="https://liefrik.vercel.app/"
          width="95%"
          height="20rem"
          style={{ border: "none" }}
        ></iframe>
      </div>
      <div className="card">
        <div className="project-card">
          <h3 className="project-title2">
            Auto-nextjs-project – SPA Final Project
          </h3>

          <p className="project-description">
            KRC Cars Homepage Overhaul – komplett neu gestaltet mit Next.js.
            Umgesetzt mit Next.js , React, CSS Modules / Tailwind CSS, Local
            Storage, Vercel.
          </p>

          <a
            href="https://auto-nextjs-project-ebon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Projekt ansehen →
          </a>
        </div>

        <iframe
          src="https://auto-nextjs-project-ebon.vercel.app/"
          width="95%"
          height="20rem"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
