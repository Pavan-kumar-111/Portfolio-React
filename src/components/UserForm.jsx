import React, { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("⏳ Sending...");

    try {
      const res = await fetch("/.netlify/functions/saveUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: messageText })
      });

      const data = await res.json();
      if (data.success) {
        setStatusMessage(data.message);
        setName("");
        setEmail("");
        setMessageText("");
      } else {
        setStatusMessage("❌ Failed to save data.");
      }
    } catch (err) {
      console.error(err);
      setStatusMessage("❌ Server error.");
    }
  };

  return (
    <section id="contact" className="section glass">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          required
        />
        <button type="submit" className="btn primary">
          Send Message
        </button>
        <p>{statusMessage}</p>
      </form>
    </section>
  );
}
