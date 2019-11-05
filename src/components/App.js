import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}
