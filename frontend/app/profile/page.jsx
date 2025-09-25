"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/myprofile.scss";

const projects = [
  {
    title: "Lebenslauf",
    image: "/lebenslauf.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Motivasionschreiben",
    image: "/motive.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Arbeitszeugnis_Titgemeyer",
    image: "/titgemeyer.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Arbeitszeugnis_Qfs",
    image: "/qfs.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
];

export default function ProfilePage() {
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
