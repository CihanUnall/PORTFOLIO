"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/document.scss";

const certificates = [
  {
    title: "Zertifizierte Weiterbildung zum Webentwickler - Full Stack",
    image: "/dci.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Bachelor of Arts in International Business",
    image: "/bachelers.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "English",
    image: "/sprache.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Deutsch",
    image: "/sprache.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Html & CSS",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Dreamweaver",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Adobe Photoshop",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Adobe Flash",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Adobe Fireworks",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Microsoft System Expert",
    image: "/certificate.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Cultural Diversity",
    image: "/goodhabitz.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Scrum",
    image: "/goodhabitz.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Soziale Intelligenz",
    image: "/goodhabitz.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
  {
    title: "Teamwork",
    image: "/goodhabitz.png",
    link: "https://secure.internxt.com/sh/folder/gPGenzuRReKcYu5Ip822Kw/z4RBY1vX",
  },
];

export default function DocumentPage() {
  return (
    <div className="certificate-container">
      {certificates.map((certificate, index) => (
        <Link
          key={index}
          href={certificate.link}
          target={certificate.link.startsWith("http") ? "_blank" : "_self"}
        >
          <div className="certificate-card">
            <h2 className="certificate-title">{certificate.title}</h2>
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={400}
              height={300}
              className="certificate-image"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
