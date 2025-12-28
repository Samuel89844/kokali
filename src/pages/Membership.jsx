import React from 'react';
import { Check } from 'lucide-react';
import { membership } from '../mock';

const Membership = () => {
  const plans = [
    {
      key: 'youth',
      ...membership.youth,
      popular: false
    },
    {
      key: 'individual',
      ...membership.individual,
      popular: true
    },
    {
      key: 'family',
      ...membership.family,
      popular: false
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">Devenir Membre</h1>
          <p className="body-large hero-description">
            Choisissez la formule d'adhésion qui vous correspond et rejoignez notre communauté
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan) => (
              <div 
                key={plan.key} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Populaire</div>}
                <h3 className="heading-2">{plan.title}</h3>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                </div>
                <ul className="benefits-list">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <Check size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className={plan.popular ? 'btn-cta' : 'btn-primary'}>
                  Choisir cette formule
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="registration-section">
        <div className="container">
          <div className="registration-wrapper">
            <div className="section-header">
              <h2 className="heading-1">Formulaire d'Inscription</h2>
              <p className="body-large section-subtitle">
                Remplissez le formulaire ci-dessous pour démarrer votre inscription
              </p>
            </div>
            
            <form className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Prénom</label>
                  <input type="text" className="form-input" placeholder="Votre prénom" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nom</label>
                  <input type="text" className="form-input" placeholder="Votre nom" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="votre@email.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">Téléphone</label>
                  <input type="tel" className="form-input" placeholder="+596 696 XX XX XX" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Date de naissance</label>
                <input type="date" className="form-input" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Adresse</label>
                <input type="text" className="form-input" placeholder="Votre adresse complète" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Code postal</label>
                  <input type="text" className="form-input" placeholder="97233" />
                </div>
                <div className="form-group">
                  <label className="form-label">Ville</label>
                  <input type="text" className="form-input" placeholder="Schœlcher" />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Type d'adhésion</label>
                <select className="form-select">
                  <option>Adhésion Jeune (-18 ans)</option>
                  <option>Adhésion Individuelle</option>
                  <option>Adhésion Famille</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Activité(s) souhaitée(s)</label>
                <select className="form-select" multiple>
                  <option>Football</option>
                  <option>Basketball</option>
                  <option>Athlétisme</option>
                  <option>Volleyball</option>
                  <option>Fitness & Remise en Forme</option>
                  <option>Sports Aquatiques</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Message (optionnel)</label>
                <textarea 
                  className="form-textarea" 
                  rows="4"
                  placeholder="Parlez-nous de vos objectifs, expérience sportive, etc."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-cta form-submit">
                Envoyer ma demande d'inscription
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Questions Fréquentes</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="heading-3">Quand puis-je commencer ?</h3>
              <p className="body-medium">
                Vous pouvez commencer dès que votre inscription est validée. Les inscriptions sont ouvertes toute l'année.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">L'équipement est-il fourni ?</h3>
              <p className="body-medium">
                Oui, l'équipement de base est fourni avec votre adhésion. Vous devez seulement apporter vos chaussures de sport.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">Puis-je essayer avant de m'inscrire ?</h3>
              <p className="body-medium">
                Absolument ! Nous proposons une séance d'essai gratuite pour toutes nos activités. Contactez-nous pour planifier votre essai.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="heading-3">Y a-t-il un engagement minimum ?</h3>
              <p className="body-medium">
                Non, vous pouvez résilier votre adhésion à tout moment avec un préavis d'un mois.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;