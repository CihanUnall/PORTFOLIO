"use client";
import "../styles/contact.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    });
  }, []);

  const position = [51.538, 7.2257];

  return (
    <div className="contactPage">
      <div className="mapSection">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              I am here! <br /> Dortmund, Germany
            </Popup>
          </Marker>
        </MapContainer>
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
