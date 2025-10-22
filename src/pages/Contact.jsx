function Contact() {
    return (
      <div>
        <h2 className="mb-3">Contact Us</h2>
        <p>
          Got questions, feedback, or just want to say hi? We’d love to hear from you! Reach out
          through any of the following ways:
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
      </div>
    );
  }
  
  export default Contact;
  