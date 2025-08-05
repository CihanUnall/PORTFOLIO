"use client";
import "../styles/contact.scss";
import dynamic from "next/dynamic";

// Harita bileşenini sadece istemci tarafında yüklenecek şekilde ayarla
const MapWithNoSSR = dynamic(() => import("../components/Mapcomponent"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <div className="contactPage">
      <div className="mapSection">
        {/* Dinamik olarak yüklenen harita bileşenini kullanın */}
        <MapWithNoSSR />
      </div>

      <div className="infoSection">
        <h2>Cihan Ünal</h2>
        <p>
          <strong>Email:</strong>cihanunal_20@hotmail.com
        </p>
        <p>
          <strong>GitHub:</strong>
          <a
            href="https://github.com/CihanUnall"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/CihanUnall
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>
          <a
            href="https://www.linkedin.com/in/cihan-%C3%BCnal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/cihanunal
          </a>
        </p>
      </div>
    </div>
  );
}
