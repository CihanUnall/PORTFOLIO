// app/product/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/project.scss";

const projects = [
  {
    title: "🚗 KRC Cars - Gruppenprojekt",
    image: "/cars.png",
    link: "https://auto-nextjs-project-ebon.vercel.app/about",
  },
  {
    title: "🎓 Be Final Projekt: REST-API für einen Webshop",
    image: "/beproject.png",
    link: "https://github.com/CihanUnall/Be-Final-Project",
  },
  {
    title: "🌐 Web-socket -Simple chat program",
    image: "/websocket.png",
    link: "https://github.com/CihanUnall/Web-socket",
  },
  {
    title: "💰 Accounting",
    image: "/accounting.png",
    link: "https://github.com/CihanUnall/Accounting_software_JavaScript",
  },
  {
    title: "📋 Todo App",
    image: "/todo.png",
    link: "https://github.com/CihanUnall/FULLSTACK-APP-TODO",
  },
  {
    title: "🎸 Music Group",
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
