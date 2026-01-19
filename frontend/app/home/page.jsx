import Image from "next/image";
import "../styles/home.scss";

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
          width={500}
          height={600}
        />
      </div>
      <div className="text2">
        <h3>Hallo</h3>
        <h4>Ich bin C.Unal, ein Design-Wizard</h4>
        <br />
        <p>
          Ich habe diese Portfolio-Oberfläche komplett von Grund auf mit
          Next.js, JavaScript, SCSS und HTML erstellt. Es wurden keine
          vorgefertigten UI-Bibliotheken oder visuellen Assets verwendet — außer
          meinem eigenen Foto. Ziel war es, meine
          Front-End-Entwicklungsfähigkeiten und die Fähigkeit zu demonstrieren,
          saubere, funktionale Oberflächen ausschließlich durch Code zu
          erstellen.
        </p>
      </div>
    </div>
  );
}
