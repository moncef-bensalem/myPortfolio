import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="background">
        <div className="gradient-bg">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#00c6ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0072ff', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" />
            <circle cx="20%" cy="30%" r="100" fill="#00c6ff" opacity="0.5">
              <animate attributeName="r" from="50" to="150" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="70%" cy="60%" r="150" fill="#0072ff" opacity="0.5">
              <animate attributeName="r" from="100" to="200" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </div>

      <div className="content">
        <section className="hero-section">
          <div className="code-animation">
            <pre>
              <code>
                <span className="keyword">const</span> developer = {'{'}
                <br />
                &nbsp;&nbsp;name: <span className="string">"Moncef"</span>,
                <br />
                &nbsp;&nbsp;type: <span className="string">"Full Stack"</span>,
                <br />
                &nbsp;&nbsp;passions: [<span className="string">"Web"</span>, <span className="string">"Mobile"</span>, <span className="string">"AI"</span>]
                <br />
                {'}'};
              </code>
            </pre>
          </div>
        </section>

        <section className="skills-section">
          <div className="skill-card frontend">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div className="skill-card backend">
            <div className="skill-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>PHP</li>
              <li>Laravel</li>
            </ul>
          </div>

          <div className="skill-card tools">
            <div className="skill-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Outils</h3>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Adobe XD</li> 
              <li>Photoshop</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </div>
        </section>

        <section className="experience-section">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <p>Building modern web applications with React and Node.js and backend with Spring Boot </p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3>Mobile Developer</h3>
                <p>Creating mobile apps with Flutter, Android Studio and React Native</p>
              </div>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-point"></div>
              <div className="timeline-content">
                <h3>  Graphical Designer</h3>
                <p>Designing user interfaces with Adobe XD, Figma, Canva and Photoshop</p>
              </div>
            </div>
          </div>
        </section>
     

        <section className="contact-section">
          <div className="social-links">
            <a href="https://github.com/moncef-bensalem" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/bensalem-moncef-49732b295/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:bensalemmoncef6@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
