import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Calendar } from 'lucide-react';
import { associationInfo, activities, events, stats, testimonials } from '../mock';

const Home = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-large">
              Bienvenue à<br />
              <span className="brand-highlight">{associationInfo.name}</span>
            </h1>
            <p className="body-large hero-description">
              {associationInfo.description}. Rejoignez-nous pour développer vos talents sportifs dans une ambiance conviviale et professionnelle.
            </p>
            <div className="hero-cta-group">
              <Link to="/membership" className="btn-cta">
                Devenir Membre
              </Link>
              <Link to="/about" className="btn-secondary">
                En Savoir Plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Notre Mission</h2>
            <p className="body-large section-subtitle">
              Promouvoir le sport et le bien-être pour tous à Schœlcher
            </p>
          </div>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={32} />
              </div>
              <h3 className="heading-3">Excellence Sportive</h3>
              <p className="body-medium">
                Former des athlètes compétents avec des entraîneurs certifiés et des programmes d'entraînement adaptés à chaque niveau.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Users size={32} />
              </div>
              <h3 className="heading-3">Esprit d'Équipe</h3>
              <p className="body-medium">
                Développer les valeurs de solidarité, respect et fair-play à travers des activités collectives et inclusives.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Award size={32} />
              </div>
              <h3 className="heading-3">Développement Personnel</h3>
              <p className="body-medium">
                Accompagner chaque membre dans son épanouissement personnel et sportif avec un suivi individualisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="activities-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Nos Activités</h2>
            <p className="body-large section-subtitle">
              Découvrez notre large gamme de sports et activités
            </p>
          </div>
          <div className="network-grid">
            {activities.slice(0, 3).map((activity) => (
              <div key={activity.id} className="network-card">
                <h3 className="network-card-title">{activity.title}</h3>
                <p className="network-card-content">{activity.description}</p>
                <div className="card-meta">
                  <Calendar size={16} />
                  <span className="body-small">{activity.schedule}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/activities" className="btn-primary">
              Voir Toutes les Activités
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Événements à Venir</h2>
            <p className="body-large section-subtitle">
              Ne manquez pas nos prochains événements et compétitions
            </p>
          </div>
          <div className="events-list">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <div className="event-day">{new Date(event.date).getDate()}</div>
                  <div className="event-month">
                    {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                  </div>
                </div>
                <div className="event-content">
                  <h3 className="heading-3">{event.title}</h3>
                  <p className="body-medium">{event.description}</p>
                  <div className="event-meta">
                    <span className="body-small">{event.time}</span>
                    <span className="body-small">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/events" className="btn-primary">
              Tous les Événements
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Témoignages</h2>
            <p className="body-large section-subtitle">
              Ce que nos membres disent de nous
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-activity">{testimonial.activity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="display-medium">Prêt à Nous Rejoindre ?</h2>
            <p className="body-large">
              Inscrivez-vous dès maintenant et bénéficiez de nos installations de qualité et de notre encadrement professionnel.
            </p>
            <Link to="/membership" className="btn-cta">
              Devenir Membre Maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;