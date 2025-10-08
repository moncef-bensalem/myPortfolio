import React from 'react';
import './Projects.css';

interface ProjectData {
  id: number;
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: ProjectData[] = [
  
  {
    id: 1,
    title: "PENVENTORY - Multivendor E-commerce platform",
    type: "E-commerce - Multivendor",
    description: "Penventory est une plateforme e-commerce multi-vendeur spécialisée dans les fournitures scolaires en Tunisie.",
    image: "/images/PENVENTORY.png",
    technologies: ["Next.js", "mongodb", "nextauth", "vercel", "prisma"],
    github: "https://github.com/moncef-bensalem/Penventory",
    demo: "https://penventory-pen.vercel.app/",
    featured: true
  },
  {
    id: 2,
    title: "Handball Academy",
    type: "Application Web",
    description: "Plateforme de gestion pour une académie de handball: inscriptions, calendrier, équipes, et suivi des performances.",
    image: "/images/handball.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/moncef-bensalem/HandBall-academy",
    demo: "https://handball-academy.example.com",
    featured: true
  },
  {
    id: 3,
    title: "Rizervi Hagem",
    type: "Application Web",
    description: "Plateforme de réservation pour les barberies en Tunisie.",
    image: "/images/hagem.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/moncef-bensalem/barber",
    demo: "https://rezervi-hagem.vercel.app/",
    featured: true
  },

  {
    id: 4,
    title: "ElMarche - Marketplace de Poisson",
    type: "E-commerce",
    description: "Plateforme de vente en ligne de poisson avec système de commande et de livraison. Intègre un système de paiement en ligne, gestion des commandes en temps réel, et interfaces vendeur/acheteur.",
    image: "/images/elmarche.jpg",
    technologies: ["Next.js", "Laravel", "MySQL", "Stripe"],
    github: "https://github.com/moncef-bensalem/elmarche",
    demo: "https://elmarche.com",
    featured: true
  },
  {
    id: 5,
    title: "Baity.tn",
    type: "E-commerce",
    description: "Site web de vente en ligne de mobilier avec gestion de catalogue. Inclut un catalogue dynamique, panier d'achat, authentification utilisateur et dashboard administrateur.",
    image: "/images/baity.jpg",
    technologies: ["React.js", "Firebase", "Material-UI", "Node.js"],
    github: "https://github.com/username/baity",
    demo: "https://baity.tn",
    featured: true
  },
  {
    id: 6,
    title: "Système de Gestion des Candidats",
    type: "Application Web",
    description: "Application web pour la gestion des candidatures et recrutement. Permet le suivi des candidatures, gestion des entretiens, évaluation des candidats et génération de rapports.",
    image: "/images/candidat.jpg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/moncef-bensalem/Gestion_Candidature"
  },
  {
    id: 7,
    title: "Topnet - Site Vitrine",
    type: "Site Web",
    description: "Site web statique présentant les offres Internet et réseaux. Comprend la présentation des offres, formulaire de contact, design responsive et animations JavaScript.",
    image: "/images/topnet.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/topnet",
    demo: "https://topnet.tn"
  },
  {
    id: 8,
    title: "Contact Manager",
    type: "Application Mobile",
    description: "Application mobile Android pour la gestion des contacts. Fonctionnalités CRUD des contacts, recherche et filtrage, synchronisation cloud et interface intuitive.",
    image: "/images/contacts.jpg",
    technologies: ["Android Studio", "Java", "SQLite"],
    github: "https://github.com/username/contact-manager"
  },
  {
    id: 9,
    title: "Dashboard de Réclamation",
    type: "Application Web",
    description: "Système de gestion des réclamations pour le matériel avec double interface. Interface professeur et technicien, suivi des réclamations, notifications en temps réel et génération de rapports.",
    image: "/images/dashboard.jpg",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    github: "https://github.com/username/reclamation-dashboard"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">Projets</h2>
        <p className="projects-subtitle">
          Une sélection de mes projets les plus significatifs, démontrant mes compétences en développement web et mobile.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          project.featured ? (
            <div key={project.id} className="featured-project" style={{ animationDelay: `${0.1}s` }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <span className="featured-tag">
                  <i className="fas fa-star"></i>
                  Projet Vedette
                </span>
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div key={project.id} className="project-card" style={{ animationDelay: `${project.id * 0.1}s` }}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fab fa-github"></i>
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <i className="fas fa-external-link-alt"></i>
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Projects;
