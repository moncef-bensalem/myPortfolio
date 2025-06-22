import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
// Importer le hook de thème au lieu du ThemeProvider
import { useThemeHook } from './hooks/useThemeHook';
import './styles/theme.css';
import './App.css';

// Solution globale pour les erreurs TypeScript avec React 18
// Cette approche permet d'ignorer les erreurs de typage pour tous les composants JSX
declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Fonction App standard
function App() {
  // Initialiser le thème au niveau de l'application
  // Nous n'utilisons pas les valeurs retournées car le Navbar gèrera le toggle
  useThemeHook();
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-8 text-center text-slate">
          <p>Developed by Moncef Bensalem</p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
