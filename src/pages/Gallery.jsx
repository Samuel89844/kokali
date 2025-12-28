import React, { useState } from 'react';
import { gallery } from '../mock';
import { Award } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(gallery.map(item => item.category))];
  
  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="display-large">Galerie Photos</h1>
          <p className="body-large hero-description">
            Découvrez la vie de notre association en images
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'Tout' : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <div key={item.id} className="gallery-item">
                <div className="gallery-image">
                  <div className="image-placeholder">
                    <Award size={48} />
                    <p className="body-small">{item.title}</p>
                  </div>
                </div>
                <div className="gallery-overlay">
                  <h3 className="heading-3">{item.title}</h3>
                  <span className="gallery-category">{item.category}</span>
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
            <h2 className="display-medium">Rejoignez-Nous !</h2>
            <p className="body-large">
              Faites partie de nos prochaines photos et créez vos propres souvenirs sportifs.
            </p>
            <button className="btn-cta">
              Devenir Membre
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;