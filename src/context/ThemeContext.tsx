import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    // Store theme preference
    localStorage.setItem('theme', theme);
    // Also add a class to body for easier styling
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
