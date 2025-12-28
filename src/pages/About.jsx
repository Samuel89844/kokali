import React from 'react';
import { Heart, Target, Eye, Award } from 'lucide-react';
import { associationInfo, team } from '../mock';

const About = () => {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">À Propos de Nous</h1>
          <p className="body-large hero-description">
            Depuis {associationInfo.founded}, nous œuvrons pour le développement du sport à Schœlcher
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="heading-1">Notre Histoire</h2>
              <p className="body-medium">
                Fondée en {associationInfo.founded}, l'association sportive KOKALI Terreville est née de la volonté d'un groupe de passionnés de sport de créer un espace dédié au développement sportif et au bien-être dans la commune de Schœlcher.
              </p>
              <p className="body-medium">
                Au fil des années, nous avons grandi pour devenir l'une des associations sportives les plus dynamiques de la région, accueillant aujourd'hui plus de 450 membres actifs et proposant 6 disciplines sportives différentes.
              </p>
              <p className="body-medium">
                Notre engagement envers l'excellence sportive et le développement personnel de nos membres reste au cœur de notre mission. Nous continuons d'innover et d'élargir notre offre pour répondre aux besoins de notre communauté.
              </p>
            </div>
            <div className="content-image">
              <div className="image-placeholder">
                <Award size={64} />
                <p>Photo de l'association</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Nos Valeurs</h2>
            <p className="body-large section-subtitle">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3 className="heading-3">Passion</h3>
              <p className="body-medium">
                Nous transmettons notre amour du sport et encourageons chaque membre à développer sa passion pour l'activité physique.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={40} />
              </div>
              <h3 className="heading-3">Excellence</h3>
              <p className="body-medium">
                Nous visons l'excellence dans tout ce que nous faisons, de l'enseignement sportif à l'organisation d'événements.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Eye size={40} />
              </div>
              <h3 className="heading-3">Respect</h3>
              <p className="body-medium">
                Le respect mutuel, de soi-même, des autres et des règles est fondamental dans notre pratique sportive.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3 className="heading-3">Inclusion</h3>
              <p className="body-medium">
                Nous accueillons tous les membres de la communauté, quels que soient leur âge, niveau ou origine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <h2 className="heading-2">Notre Vision</h2>
              <p className="body-large">
                Devenir la référence en matière de sport et de bien-être à Schœlcher, en offrant des programmes sportifs de qualité accessibles à tous et en contribuant au développement d'une communauté active et en bonne santé.
              </p>
            </div>
            <div className="vm-card">
              <h2 className="heading-2">Notre Mission</h2>
              <p className="body-large">
                Promouvoir la pratique sportive pour tous les âges à travers des programmes d'entraînement professionnels, des compétitions enrichissantes et des événements communautaires qui renforcent les liens sociaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-1">Notre Équipe</h2>
            <p className="body-large section-subtitle">
              Les personnes dévouées qui font vivre l'association
            </p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <div className="image-placeholder-small">
                    <Award size={48} />
                  </div>
                </div>
                <h3 className="heading-3">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="body-small">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;