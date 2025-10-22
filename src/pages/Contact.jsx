// src/pages/Contact.jsx
import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${name}!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-3 text-center">Contact Us</h2>
      <p className="text-center">
        Got questions, feedback, or just want to say hi? We’d love to hear from you!
      </p>

      <ul>
        <li><strong>📍 Address:</strong> 123 Brew Street, Manila, Philippines</li>
        <li><strong>📞 Phone:</strong> (02) 9876-5432</li>
        <li><strong>✉️ Email:</strong> hello@brewedbliss.com</li>
      </ul>

      <div className="mt-4">
        <h5>Opening Hours</h5>
        <p>Monday to Sunday: <strong>7:00 AM - 10:00 PM</strong></p>
      </div>

      <div className="mt-4">
        <h5>Follow Us</h5>
        <p>
          <a href="#" className="me-3 text-dark">Facebook</a>
          <a href="#" className="me-3 text-dark">Instagram</a>
          <a href="#" className="text-dark">Twitter</a>
        </p>
      </div>

      <hr className="my-4" />

      <h4 className="mb-3 text-center">Send Us a Message</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Your Message or Feedback"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-dark w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
