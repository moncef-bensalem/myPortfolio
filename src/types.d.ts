// Déclarations globales pour résoudre les problèmes de typage
import React from 'react';

declare global {
  namespace JSX {
    interface Element {}
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Déclarations pour React
declare module 'react' {
  export interface ReactElement {
    type: any;
    props: any;
    key: any;
  }
  
  export interface StrictMode {
    children?: React.ReactNode;
  }
  
  export function createContext<T>(defaultValue: T): React.Context<T>;
  export function useContext<T>(context: React.Context<T>): T;
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
}

// Déclarations pour React Router DOM
declare module 'react-router-dom' {
  import React from 'react';
  
  export const BrowserRouter: React.ComponentType<any>;
  export const Routes: React.ComponentType<any>;
  export const Route: React.ComponentType<any>;
  export const Link: React.ComponentType<any>;
  export const useLocation: () => any;
  export const useNavigate: () => any;
  export const useParams: () => any;
}

// Déclarations pour notre contexte de thème
declare module '../context/ThemeContext' {
  export interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
  }
  
  export function useTheme(): ThemeContextType;
  export const ThemeProvider: React.FC<{ children: React.ReactNode }>;
}
