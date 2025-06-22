import React from 'react';
import './Experience.css';

interface ExperienceData {
  date: string;
  company: string;
  title: string;
  details: string[];
  technologies: string[];
}

const experiences: ExperienceData[] = [
  {
    date: "2025 - Present",
    company: "Societe frére ben marzouk - SFBM",
    title: "Full Stack Developer ",
    details: [
      "Développement dune paltforme e-commerce avec  Next.js et Node.js, et mongodb et nextauth ",
      "Création d'APIs RESTful avec express.js et prisma",
      "Gestion de bases de données mongodb",
      "Intégration de systèmes de securite  et d'authentification avec nextauth"
    ],
    technologies: ["React", "Next.js", "Node.js", "express.js", "prisma", "MongoDB"]
  },
  {
    date: "2024",
    company: "Freelance",
    title: "Full Stack Developer",
    details: [
      "Développement d'applications web avec React.js, Next.js et Node.js",
      "Création d'APIs RESTful avec Spring Boot et Express.js",
      "Gestion de bases de données MySQL et MongoDB",
      "Intégration de systèmes de paiement et d'authentification"
    ],
    technologies: ["React", "Next.js", "Node.js", "Spring Boot", "MySQL", "MongoDB"]
  },
  {
    date: "Janvier 2023",
    company: "Baity.tn",
    title: "Stage de perfectionnement",
    details: [
      "Conception et développement d'un site web de vente en ligne pour la société",
      "Présentation et vente d'articles de mobilier",
      "Développement frontend avec React.js",
      "Intégration avec Firebase pour le backend"
    ],
    technologies: ["HTML", "CSS", "React.js", "Firebase"]
  },
  {
    date: "Janvier 2022",
    company: "Topnet",
    title: "Stage d'initiation",
    details: [
      "Participation à la conception et au développement d'une plateforme présentant les offres Internet et réseaux aux clients",
      "Participation aux réunions d'équipe et apprentissage des méthodes de travail de la société",
      "Développement frontend avec HTML, CSS et JavaScript"
    ],
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    date: "2022 - 2023",
    company: "Projets Personnels",
    title: "Mobile Developer",
    details: [
      "Développement d'applications mobiles cross-platform avec Flutter",
      "Création d'interfaces utilisateur modernes et réactives",
      "Intégration de fonctionnalités natives (caméra, GPS, notifications)",
      "Publication d'applications sur Google Play Store"
    ],
    technologies: ["Flutter", "Dart", "Android Studio", "Firebase", "React Native"]
  },
  {
    date: "2021 - 2022",
    company: "Freelance",
    title: "UI/UX Designer",
    details: [
      "Conception d'interfaces utilisateur pour applications web et mobile",
      "Création de maquettes et prototypes interactifs",
      "Optimisation de l'expérience utilisateur",
      "Collaboration avec les équipes de développement"
    ],
    technologies: ["Adobe XD", "Figma", "Photoshop", "Canva"]
  },
  {
    date: "2021 - 2025",
    company: "Institut Supérieur des Études Technologiques de Djerba",
    title: "Formation",
    details: [
      "Diplomé en licence en technologie d' informatique et Développement des Systèmes d'Information",
      "Spécialisation en développement web et mobile",
      "Projets académiques en équipe",
      "Stage de fin d'études en développement full stack"
    ],
    technologies: ["Java", "PHP", "JavaScript", "SQL", "UML"]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Mon parcours professionnel en développement logiciel, où j'ai eu l'opportunité de travailler
          avec des technologies modernes et des équipes talentueuses.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />
        {experiences.map((exp, index) => (
          <div
            className="experience-item"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="experience-content">
              <span className="experience-date">{exp.date}</span>
              <h3 className="company-name">{exp.company}</h3>
              <h4 className="job-title">{exp.title}</h4>
              <ul className="job-details">
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h2>Compétences Techniques</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>React.js</span>
                <div className="skill-bar"><div style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>Next.js</span>
                <div className="skill-bar"><div style={{ width: '85%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>Angular</span>
                <div className="skill-bar"><div style={{ width: '75%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>TypeScript</span>
                <div className="skill-bar"><div style={{ width: '85%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>Node.js</span>
                <div className="skill-bar"><div style={{ width: '90%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>Spring Boot</span>
                <div className="skill-bar"><div style={{ width: '80%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>Laravel</span>
                <div className="skill-bar"><div style={{ width: '75%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>MongoDB</span>
                <div className="skill-bar"><div style={{ width: '85%' }}></div></div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h3>Mobile</h3>
            <div className="skill-items">
              <div className="skill-item">
                <span>Flutter</span>
                <div className="skill-bar"><div style={{ width: '85%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>React Native</span>
                <div className="skill-bar"><div style={{ width: '80%' }}></div></div>
              </div>
              <div className="skill-item">
                <span>Android</span>
                <div className="skill-bar"><div style={{ width: '75%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
