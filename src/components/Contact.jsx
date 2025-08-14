import React, { useState } from "react";
import { sendContactEmail } from "../services/contact.js";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formMsg, setFormMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success, message, color } = await sendContactEmail(
      formData,
      setLoading
    );

    setFormMsg({ text: message, color });
    if (success) {
      setFormData({ name: "", email: "", message: "" });
    }

    setTimeout(() => setFormMsg(""), 5000);
  };

  return (
    <section id="contact" className="section glass">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {formMsg && (
          <p id="formMsg" style={{ color: formMsg.color }}>
            {formMsg.text}
          </p>
        )}
      </form>
    </section>
  );
}
