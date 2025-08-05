"use client";

import { useState } from "react";
import "../styles/contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basit doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      alert("Tüm alanları doldurun.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Geçerli bir e-posta girin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (err) {
      console.error("Hata:", err);
      alert("Sunucu hatası.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-main-container">
      <div className="contact-container">
        <h2>Contact Me</h2>
        {submitted ? (
          <p className="success-message">Teşekkürler! Mesajınız gönderildi.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">E-posta:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Mesajınız:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
