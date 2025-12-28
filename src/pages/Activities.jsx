import React from 'react';
import { Activity, Trophy, Zap, Target, Heart, Waves, Calendar, Users } from 'lucide-react';
import { activities } from '../mock';

const iconMap = {
  activity: Activity,
  trophy: Trophy,
  zap: Zap,
  target: Target,
  heart: Heart,
  waves: Waves
};

const Activities = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">Nos Activités</h1>
          <p className="body-large hero-description">
            Découvrez notre large gamme de sports et trouvez celui qui vous correspond
          </p>
        </div>
      </section>

      {/* Activities List */}
      <section className="activities-section">
        <div className="container">
          <div className="activities-grid">
            {activities.map((activity) => {
              const IconComponent = iconMap[activity.icon] || Activity;
              return (
                <div key={activity.id} className="activity-card">
                  <div className="activity-icon">
                    <IconComponent size={40} />
                  </div>
                  <h2 className="heading-2">{activity.title}</h2>
                  <p className="body-medium activity-description">
                    {activity.description}
                  </p>
                  
                  <div className="activity-details">
                    <div className="detail-item">
                      <Calendar size={20} />
                      <div>
                        <div className="detail-label">Horaires</div>
                        <div className="detail-value">{activity.schedule}</div>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <Users size={20} />
                      <div>
                        <div className="detail-label">Groupes d'âge</div>
                        <div className="detail-value">
                          {activity.ageGroups.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary activity-cta">
                    S'inscrire
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-card">
            <h2 className="heading-2">Comment S'inscrire ?</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3 className="heading-3">Choisir votre activité</h3>
                <p className="body-medium">
                  Sélectionnez le sport qui vous intéresse parmi notre offre variée.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3 className="heading-3">Remplir le formulaire</h3>
                <p className="body-medium">
                  Complétez votre inscription en ligne ou venez nous rencontrer.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3 className="heading-3">Commencer à pratiquer</h3>
                <p className="body-medium">
                  Rejoignez votre groupe et débutez votre aventure sportive avec nous !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;