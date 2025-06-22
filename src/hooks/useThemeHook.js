import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer le thème de l'application
 * Fournit une alternative au contexte ThemeContext pour éviter les problèmes de typage
 */
export const useThemeHook = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Appliquer le thème au body
    document.body.setAttribute('data-theme', theme);
    // Stocker la préférence de thème
    localStorage.setItem('theme', theme);
    
    // Préserver les classes existantes et ajouter/remplacer seulement la classe de thème
    const currentClasses = document.body.className.split(' ').filter(cls => !cls.includes('theme'));
    document.body.className = [...currentClasses, theme === 'dark' ? 'dark-theme' : 'light-theme'].join(' ');
    
    // S'assurer que html a aussi la classe de thème pour une meilleure compatibilité
    document.documentElement.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
