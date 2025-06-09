import Header from "./component/Header";
import "./styles/page.scss";

export default function Home() {
  return (
    <div className="main-container">
      <div className="text1">
        <h2>Web Development</h2>
      </div>
      <div className="bild">
        <img src="/cihan.png" alt="cihan picture" className="cihanbild" />
      </div>
      <div className="text2">
        <h3>Hello </h3>
        <p>It's C.Unal a design wizerd</p>
      </div>
    </div>
  );
}
