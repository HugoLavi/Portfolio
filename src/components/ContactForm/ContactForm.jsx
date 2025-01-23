import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_a53auw3";
    const templateID = "template_x9ozow7";
    const publicAPIKey = "etJZoqq-ptlibX5Ti";

    emailjs.init(publicAPIKey);

    emailjs.sendForm(serviceID, templateID, e.target, publicAPIKey).then(
      (result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact-form-section" id="contact">
      <div className="contact-form-container">
        <h1>Contactez-moi</h1>
        <p>
          N'hésitez pas à me laisser un message, je vous répondrai rapidement !
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>

        {isSubmitted && (
          <p className="success-message">Merci pour votre message !</p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
