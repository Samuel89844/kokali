import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { associationInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé ! Nous vous recontacterons très bientôt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">Contactez-Nous</h1>
          <p className="body-large hero-description">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="heading-2">Nos Coordonnées</h2>
              <p className="body-medium contact-intro">
                Vous pouvez nous joindre par téléphone, email ou venir nous rencontrer directement à nos bureaux.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="heading-3">Adresse</h3>
                    <p className="body-medium">
                      {associationInfo.address}<br />
                      {associationInfo.postalCode} {associationInfo.city}
                    </p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="heading-3">Téléphone</h3>
                    <p className="body-medium">{associationInfo.phone}</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="heading-3">Email</h3>
                    <p className="body-medium">{associationInfo.email}</p>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="heading-3">Horaires d'ouverture</h3>
                    <p className="body-medium">
                      Lundi - Vendredi: 9h - 20h<br />
                      Samedi: 9h - 18h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="heading-2">Envoyez-nous un Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Nom complet *</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-input" 
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-input" 
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-input" 
                    placeholder="+596 696 XX XX XX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Sujet *</label>
                  <select 
                    name="subject"
                    className="form-select"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="inscription">Demande d'inscription</option>
                    <option value="information">Demande d'information</option>
                    <option value="partenariat">Proposition de partenariat</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    name="message"
                    className="form-textarea" 
                    rows="5"
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-cta form-submit">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-placeholder">
              <MapPin size={64} />
              <p className="heading-3">Plan d'accès</p>
              <p className="body-medium">
                102 Chemin Petit Bois<br />
                97233 Schœlcher, Martinique
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;