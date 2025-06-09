// app/product/page.jsx
"use client"; // Eğer App Router kullanıyorsan bunu eklemelisin

import Link from "next/link";
import Image from "next/image";
import "../styles/project.scss";

const projects = [
  {
    title: "KRC Cars",
    image: "/cars.png",
    link: "https://github.com/CihanUnall/Krc-Cars",
  },
  {
    title: "Accounting",
    image: "/accounting.png",
    link: "https://github.com/CihanUnall/Accounting_software_JavaScript",
  },
  {
    title: "Todo App",
    image: "/todo.png",
    link: "https://github.com/CihanUnall/FULLSTACK-APP-TODO",
  },
  {
    title: "Music Group",
    image: "/music.png",
    link: "https://github.com/CihanUnall/annen_may_kantereit",
  },

  // Yeni projeyi buraya ekle
];

export default function ProductPage() {
  return (
    <div className="container">
      {projects.map((project, index) => (
        <Link
          key={index}
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : "_self"}
        >
          <div className="card">
            <h2 className="title">{project.title}</h2>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="image"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
