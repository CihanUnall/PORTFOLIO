import Image from "next/image";
import "../app/styles/home.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="text1">
        <h2>Web Development</h2>
      </div>
      <div className="bild">
        <Image
          src="/cihan.png"
          alt="cihan picture"
          className="cihanbild"
          width={900}
          height={1000}
        />
      </div>
      <div className="text2">
        <h3>Hello </h3>
        <h4>It's C.Unal a design wizerd</h4>
        <br />
        <p>
          I built this portfolio interface entirely from scratch using Next.js,
          SCSS, and HTML. No pre-built UI libraries or visual assets were used —
          except for my own photo. The goal was to demonstrate my front-end
          development skills and ability to build clean, functional interfaces
          purely through code.
        </p>
      </div>
    </div>
  );
}
