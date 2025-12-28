// Mock data for KOKALI Terreville Sports Association

export const associationInfo = {
  name: "KOKALI Terreville",
  fullName: "Association Sportive KOKALI Terreville",
  address: "102 Chemin Petit Bois",
  postalCode: "97233",
  city: "Schœlcher",
  phone: "+596 696 XX XX XX",
  email: "contact@kokali-terreville.com",
  description: "Association sportive dédiée au développement du sport et du bien-être à Schœlcher",
  founded: "2010"
};

export const activities = [
  {
    id: 1,
    title: "Football",
    description: "Entraînements et compétitions pour tous les âges. Développement technique et esprit d'équipe.",
    ageGroups: ["6-10 ans", "11-15 ans", "16+ ans"],
    schedule: "Lundi, Mercredi, Vendredi 17h-19h",
    icon: "activity"
  },
  {
    id: 2,
    title: "Basketball",
    description: "Programme complet de basketball avec coaching professionnel et tournois réguliers.",
    ageGroups: ["8-12 ans", "13-17 ans", "Adultes"],
    schedule: "Mardi, Jeudi 18h-20h",
    icon: "trophy"
  },
  {
    id: 3,
    title: "Athlétisme",
    description: "Course, saut, lancer - développez votre potentiel athlétique avec nos entraîneurs certifiés.",
    ageGroups: ["7-12 ans", "13-18 ans", "Adultes"],
    schedule: "Mercredi, Samedi 9h-11h",
    icon: "zap"
  },
  {
    id: 4,
    title: "Volleyball",
    description: "Sessions de volleyball en salle et sur plage. Ambiance conviviale et compétitive.",
    ageGroups: ["10-15 ans", "16+ ans"],
    schedule: "Mardi, Vendredi 19h-21h",
    icon: "target"
  },
  {
    id: 5,
    title: "Fitness & Remise en Forme",
    description: "Cours collectifs de fitness, yoga, et musculation pour tous les niveaux.",
    ageGroups: ["Adultes", "Seniors"],
    schedule: "Lundi à Vendredi 7h-9h et 18h-20h",
    icon: "heart"
  },
  {
    id: 6,
    title: "Sports Aquatiques",
    description: "Natation, water-polo et activités aquatiques pour enfants et adultes.",
    ageGroups: ["5-10 ans", "11-16 ans", "Adultes"],
    schedule: "Mercredi, Samedi 14h-16h",
    icon: "waves"
  }
];

export const events = [
  {
    id: 1,
    title: "Tournoi Inter-Quartiers de Football",
    date: "2025-09-15",
    time: "14h00",
    location: "Stade Municipal de Schœlcher",
    description: "Grand tournoi de football réunissant les équipes de tous les quartiers. Inscription gratuite pour les membres.",
    category: "Competition",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Journée Portes Ouvertes",
    date: "2025-09-01",
    time: "10h00",
    location: "102 Chemin Petit Bois, Schœlcher",
    description: "Venez découvrir toutes nos activités ! Séances d'essai gratuites, démonstrations, et inscriptions sur place.",
    category: "Open Day",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Stage de Basketball d'Été",
    date: "2025-08-20",
    time: "9h00 - 16h00",
    location: "Gymnase KOKALI",
    description: "Stage intensif de 5 jours pour améliorer vos compétences en basketball. Encadré par des coachs professionnels.",
    category: "Training",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Marathon de la Rentrée",
    date: "2025-10-05",
    time: "7h00",
    location: "Centre-ville de Schœlcher",
    description: "Course de 10km ouverte à tous. Parcours urbain et bord de mer. Inscriptions ouvertes dès maintenant.",
    category: "Race",
    status: "upcoming"
  }
];

export const news = [
  {
    id: 1,
    title: "KOKALI Terreville remporte le Championnat Régional",
    date: "2025-07-20",
    excerpt: "Notre équipe de football U15 a brillamment remporté le championnat régional avec un parcours sans faute.",
    content: "C'est une grande fierté pour l'association KOKALI Terreville. Après des mois d'entraînement intensif, nos jeunes footballeurs ont décroché le titre de champions régionaux...",
    image: "/placeholder-news1.jpg"
  },
  {
    id: 2,
    title: "Nouveaux Équipements pour la Saison 2025-2026",
    date: "2025-08-10",
    excerpt: "Grâce au soutien de la municipalité et de nos partenaires, nous avons pu acquérir de nouveaux équipements sportifs.",
    content: "L'association s'est dotée de nouveaux équipements de pointe pour offrir les meilleures conditions d'entraînement à nos membres...",
    image: "/placeholder-news2.jpg"
  },
  {
    id: 3,
    title: "Partenariat avec les Écoles Locales",
    date: "2025-08-05",
    excerpt: "KOKALI Terreville s'associe avec 5 écoles de Schœlcher pour promouvoir le sport chez les jeunes.",
    content: "Dans le cadre de notre mission de développement sportif, nous avons signé des partenariats avec les écoles primaires de la région...",
    image: "/placeholder-news3.jpg"
  }
];

export const team = [
  {
    id: 1,
    name: "Jean-Marc Duval",
    role: "Président",
    bio: "Passionné de sport depuis toujours, Jean-Marc a fondé KOKALI Terreville en 2010 avec la vision de rendre le sport accessible à tous.",
    image: "/placeholder-team1.jpg"
  },
  {
    id: 2,
    name: "Marie-Claire Lefèvre",
    role: "Vice-Présidente",
    bio: "Ancienne athlète professionnelle, Marie-Claire apporte son expertise et sa passion pour développer nos programmes sportifs.",
    image: "/placeholder-team2.jpg"
  },
  {
    id: 3,
    name: "Thomas Beaumont",
    role: "Trésorier",
    bio: "Gestionnaire expérimenté, Thomas assure la bonne santé financière de l'association et la transparence de nos comptes.",
    image: "/placeholder-team3.jpg"
  },
  {
    id: 4,
    name: "Sophie Martin",
    role: "Secrétaire Générale",
    bio: "Sophie coordonne toutes les activités administratives et assure la communication entre les membres et le bureau.",
    image: "/placeholder-team4.jpg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Lucas, 14 ans",
    activity: "Football",
    text: "Grâce à KOKALI, j'ai progressé énormément en football. Les entraîneurs sont super et l'ambiance est géniale !",
    rating: 5
  },
  {
    id: 2,
    name: "Isabelle M.",
    activity: "Fitness",
    text: "Les cours de fitness m'ont permis de retrouver la forme. Je recommande à 100% cette association !",
    rating: 5
  },
  {
    id: 3,
    name: "Pierre D.",
    activity: "Basketball",
    text: "Une association sérieuse avec de vrais professionnels. Mon fils s'épanouit complètement.",
    rating: 5
  }
];

export const membership = {
  individual: {
    title: "Adhésion Individuelle",
    price: "150€/an",
    benefits: [
      "Accès à toutes les activités",
      "Équipement sportif fourni",
      "Assurance incluse",
      "Tarifs préférentiels pour les stages",
      "Accès aux installations"
    ]
  },
  family: {
    title: "Adhésion Famille",
    price: "350€/an",
    benefits: [
      "Jusqu'à 4 membres de la famille",
      "Tous les avantages de l'adhésion individuelle",
      "Réduction de 20% sur les stages",
      "Priorité pour les inscriptions aux événements",
      "Newsletter exclusive"
    ]
  },
  youth: {
    title: "Adhésion Jeune (-18 ans)",
    price: "100€/an",
    benefits: [
      "Accès à toutes les activités jeunes",
      "Équipement sportif fourni",
      "Assurance incluse",
      "Encadrement par des éducateurs diplômés",
      "Suivi personnalisé"
    ]
  }
};

export const gallery = [
  {
    id: 1,
    title: "Entraînement Football U12",
    category: "Football",
    image: "/placeholder-gallery1.jpg"
  },
  {
    id: 2,
    title: "Tournoi Basketball 2024",
    category: "Basketball",
    image: "/placeholder-gallery2.jpg"
  },
  {
    id: 3,
    title: "Cours de Fitness",
    category: "Fitness",
    image: "/placeholder-gallery3.jpg"
  },
  {
    id: 4,
    title: "Compétition Athlétisme",
    category: "Athlétisme",
    image: "/placeholder-gallery4.jpg"
  },
  {
    id: 5,
    title: "Stage d'Été",
    category: "Events",
    image: "/placeholder-gallery5.jpg"
  },
  {
    id: 6,
    title: "Journée Portes Ouvertes",
    category: "Events",
    image: "/placeholder-gallery6.jpg"
  }
];

export const stats = [
  { label: "Membres Actifs", value: "450+" },
  { label: "Sports Proposés", value: "6" },
  { label: "Années d'Expérience", value: "15" },
  { label: "Entraîneurs Certifiés", value: "12" }
];