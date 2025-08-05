"use client";
import "../styles/skills.scss";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <main className="container-skills">
      <h1 className="title-skills">My Skillset</h1>
      <p className="subtitle-skills">As a Fullstack Developer</p>

      <section className="icons-skills">
        <div className="card-skills">
          <Image
            src="/html.png"
            alt="HTML"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          HTML
        </div>
        <div className="card-skills">
          <Image
            src="/css.png"
            alt="CSS"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          CSS
        </div>
        <div className="card-skills">
          <Image
            src="/scss.png"
            alt="SCSS"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          SCSS
        </div>
        <div className="card-skills">
          <Image
            src="/javascript.png"
            alt="JavaScript"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          JavaScript
        </div>
        <div className="card-skills">
          <Image
            src="/tailwind.png"
            alt="Tailwind CSS"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Tailwind CSS
        </div>
        <div className="card-skills">
          <Image
            src="/react.png"
            alt="React.js"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          React.js
        </div>
        <div className="card-skills">
          <Image
            src="/next.svg"
            alt="Next.js"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Next.js
        </div>
        <div className="card-skills">
          <Image
            src="/express.png"
            alt="Express.js"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Express.js
        </div>
        <div className="card-skills">
          <Image
            src="/mongodb.png"
            alt="MongoDB"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          MongoDB
        </div>
        <div className="card-skills">
          <Image
            src="/node.png"
            alt="Node.js"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Node.js
        </div>
        <div className="card-skills">
          <Image
            src="/excalidraw.png"
            alt="Excalidraw"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Excalidraw (Diagram & Wireframe Tool)
        </div>
        <div className="card-skills">
          <Image
            src="/seo.png"
            alt="SEO"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          SEO
        </div>

        <div className="card-skills">
          <Image
            src="/uiux.png"
            alt="UI/UX"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          UI / UX
        </div>

        <div className="card-skills">
          <Image
            src="/api.png"
            alt="API"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Api (Rest)
        </div>
        <div className="card-skills">
          <Image
            src="/vscode.png"
            alt="Visual Studio Code"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Visual Studio Code
        </div>
        <div className="card-skills">
          <Image
            src="/github.png"
            alt="GitHub"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          GitHub
        </div>
        <div className="card-skills">
          <Image
            src="/git.png"
            alt="Git"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Git
        </div>
        <div className="card-skills">
          <Image
            src="/linux.png"
            alt="Linux"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Linux
        </div>
        <div className="card-skills">
          <Image
            src="/windows.png"
            alt="Windows"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Windows
        </div>
        <div className="card-skills">
          <Image
            src="/macos.png"
            alt="macOS"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          macOS
        </div>

        <div className="card-skills">
          <Image
            src="/ftp.png"
            alt="FTP"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          FTP / Web Hosting
        </div>
        <div className="card-skills">
          <Image
            src="/photoshop.png"
            alt="Photoshop"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Photoshop
        </div>
        <div className="card-skills">
          <Image
            src="/websocket.svg"
            alt="WebSocket"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          WebSocket
        </div>
        <div className="card-skills">
          <Image
            src="/system.png"
            alt="System"
            width={40}
            height={30}
            className="skill-image"
            loading="lazy"
          />
          Microsoft System Administration
        </div>
      </section>

      <footer className="footer-skills">
        Weiterbildung | Fullstack Developer <br />
        <span className="footer-icons-skills">
          <a
            href="https://www.flaticon.com/free-icons/system"
            title="system icons"
          >
            System icons created by Design Circle - Flaticon
          </a>
        </span>
        <br />
        <span className="footer-icons-skills">
          <a href="  https://www.iconfinder.com/" title="system icons">
            System icons created by ICONFINDER
          </a>
        </span>
      </footer>
    </main>
  );
}
