import "./styles/page.scss";
import Image from "next/image";

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
          width={700}
          height={800}
          style={{ width: "37%", height: "auto" }}
        />
      </div>
      <div className="text2">
        <h3>Hello </h3>
        <p>It's C.Unal a design wizerd</p>
      </div>
    </div>
  );
}
