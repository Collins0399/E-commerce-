

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
