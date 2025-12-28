import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Tag } from 'lucide-react';
import { events, news } from '../mock';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = events.filter(e => e.status === 'upcoming');

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">Événements & Actualités</h1>
          <p className="body-large hero-description">
            Restez informés de nos compétitions, stages et dernières nouvelles
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-full-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Événements à Venir</h2>
          </div>
          
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-full-card">
                <div className="event-category-badge">{event.category}</div>
                <h3 className="heading-2">{event.title}</h3>
                <p className="body-medium event-desc">{event.description}</p>
                
                <div className="event-info-grid">
                  <div className="event-info-item">
                    <Calendar size={20} />
                    <span>{new Date(event.date).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="event-info-item">
                    <Clock size={20} />
                    <span>{event.time}</span>
                  </div>
                  <div className="event-info-item">
                    <MapPin size={20} />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <button className="btn-primary event-register-btn">
                  S'inscrire à l'événement
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Actualités</h2>
            <p className="body-large section-subtitle">
              Les dernières nouvelles de l'association
            </p>
          </div>
          
          <div className="news-grid">
            {news.map((article) => (
              <div key={article.id} className="news-card">
                <div className="news-image">
                  <div className="image-placeholder">
                    <Tag size={48} />
                  </div>
                </div>
                <div className="news-content">
                  <div className="news-date">
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="heading-3">{article.title}</h3>
                  <p className="body-medium">{article.excerpt}</p>
                  <button className="link-text">
                    Lire la suite →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;