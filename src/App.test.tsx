import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  test('renders navbar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const brandElement = screen.getByText(/MB/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders home link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });

  test('renders contact link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
  });
});
