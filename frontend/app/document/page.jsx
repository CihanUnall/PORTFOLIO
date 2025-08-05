"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/document.scss";

const certificates = [
  {
    title: "Zertifizierte Weiterbildung zum Webentwickler - Full Stack",
    image: "/dci.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Bachelor of Arts in International Business",
    image: "/bachelers.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "English",
    image: "/sprache.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Deutsch",
    image: "/sprache.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Html & CSS",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Dreamweaver",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Adobe Photoshop",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Adobe Flash",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Adobe Fireworks",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Microsoft System Expert",
    image: "/certificate.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Cultural Diversity",
    image: "/goodhabitz.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Scrum",
    image: "/goodhabitz.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Soziale Intelligenz",
    image: "/goodhabitz.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
  },
  {
    title: "Teamwork",
    image: "/goodhabitz.png",
    link: "https://share.eu.internxt.com/d/sh/folder/fa75b9e5-2ee8-4ff9-85c2-73ee7c097edb/5de42aebde80c37056912d56f8ee0adedceba6a80d6ebf7ec1f6ad2c9aa1c0a1",
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
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
