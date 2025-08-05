"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/myprofile.scss";

const projects = [
  {
    title: "Lebenslauf",
    image: "/lebenslauf.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Motivasionschreiben",
    image: "/motive.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Arbeitszeugnis_Titgemeyer",
    image: "/titgemeyer.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Arbeitszeugnis_Qfs",
    image: "/qfs.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
];

export default function ProductPage() {
  return (
    <div className="container-myprofile">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : "_self"}
        >
          <div className="card-myprofile">
            <h2 className="title-myprofile">{project.title}</h2>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="image-myprofile"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
