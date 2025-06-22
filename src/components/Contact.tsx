import React, { useState } from 'react';
import './Contact.css';

const EmailForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Utiliser l'API Formspree - remplacer VOTRE_ID_FORMSPREE par votre ID après inscription
      const response = await fetch('https://formspree.io/f/mjkrenzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      
      if (response.ok) {
        console.log('Message envoyé avec succès');
        setStatus('success');

        // Effacer les champs du formulaire
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Échec de l\'envoi du message');
      }
    } catch (error: any) {
      console.error('Échec de l\'envoi:', error);
      setErrorMessage(error.message || 'Échec de l\'envoi du message');
      setStatus('error');
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-title">Contact</h2>
        <p className="contact-subtitle">
          N'hésitez pas à me contacter pour toute opportunité de collaboration ou question.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3 className="info-label">Email</h3>
                <p className="info-value">
                  <a href="mailto:moncefbensalem222@gmail.com">moncefbensalem222@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3 className="info-label">Téléphone</h3>
                <p className="info-value">
                  <a href="tel:+21694914886">+216 94 914 886</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3 className="info-label">Localisation</h3>
                <p className="info-value">Tunis, Manouba</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/moncef-bensalem" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/moncef-bensalem" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/moncef_bensalem" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form" action="https://formspree.io/f/mjkrenzv" method="POST">
            <div className="form-background"></div>
            
            {status === 'success' && (
              <div className="alert alert-success">
                Message envoyé avec succès!
              </div>
            )}
            
            {status === 'error' && (
              <div className="alert alert-error">
                {errorMessage || 'Une erreur est survenue. Veuillez réessayer.'}
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="form-label">Nom</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="form-label">Email</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label className="form-label">Sujet</label>
            </div>

            <div className="form-group">
              <textarea
                className="form-input"
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <label className="form-label">Message</label>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
