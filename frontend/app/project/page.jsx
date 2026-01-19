"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/project.scss";

export default function ProjectPage() {
  return (
    <div className="container">
      <div className="card">
        <iframe
          src="https://liefrik.vercel.app/"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
