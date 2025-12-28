import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { associationInfo } from '../mock';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">{associationInfo.name}</h3>
            <p className="footer-text">
              {associationInfo.description}
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Liens Rapides</h4>
            <ul className="footer-links">
              <li><Link to="/about">À Propos</Link></li>
              <li><Link to="/activities">Nos Activités</Link></li>
              <li><Link to="/events">Événements</Link></li>
              <li><Link to="/membership">Adhésion</Link></li>
              <li><Link to="/gallery">Galerie</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Nos Sports</h4>
            <ul className="footer-links">
              <li>Football</li>
              <li>Basketball</li>
              <li>Athlétisme</li>
              <li>Volleyball</li>
              <li>Fitness</li>
              <li>Sports Aquatiques</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>
                  {associationInfo.address}<br />
                  {associationInfo.postalCode} {associationInfo.city}
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>{associationInfo.phone}</span>
              </li>
              <li>
                <Mail size={18} />
                <span>{associationInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {associationInfo.name}. Tous droits réservés.</p>
          <div className="footer-bottom-links">
            <Link to="/mentions-legales">Mentions Légales</Link>
            <Link to="/politique-confidentialite">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;