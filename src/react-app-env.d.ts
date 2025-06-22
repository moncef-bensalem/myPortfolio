/// <reference types="react-scripts" />

// Déclarations pour React
declare module 'react' {
  export import React = __React;
  
  // Hooks et fonctions de base
  export function useState<T>(initialState: T | (() => T)): [T, (newState: T | ((prevState: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly any[]): void;
  export function useContext<T>(context: React.Context<T>): T;
  export function createContext<T>(defaultValue: T): React.Context<T>;
  
  // Types de base
  export type ReactNode = React.ReactElement | string | number | boolean | null | undefined | React.ReactNodeArray;
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = string | React.JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: React.Key | null;
  }
  export type JSXElementConstructor<P> = ((props: P) => React.ReactElement<any, any> | null);
  export type Key = string | number;
  export type FormEvent<T = Element> = React.SyntheticEvent<T>;
  
  // Composants
  export interface FC<P = {}> {
    (props: P, context?: any): React.ReactElement<any, any> | null;
  }
  export type FunctionComponent<P = {}> = FC<P>;
  
  // StrictMode
  export const StrictMode: React.FC<{ children?: React.ReactNode }>;
}

// Déclarations pour React Router DOM
declare module 'react-router-dom' {
  // Composants de base
  export const BrowserRouter: React.FC<{ children?: React.ReactNode }>;
  export const Routes: React.FC<{ children?: React.ReactNode }>;
  export const Route: React.FC<{
    path?: string;
    element?: React.ReactNode;
    children?: React.ReactNode;
  }>;
  export const Link: React.FC<{
    to: string;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }>;
  
  // Hooks
  export function useLocation(): {
    pathname: string;
    search: string;
    hash: string;
    state: any;
    key: string;
  };
}
