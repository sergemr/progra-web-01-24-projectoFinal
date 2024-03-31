import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import Hero from './components/LandingPage';
import Productos from './pages/Productos'; // Import the Productos page
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router> {/* Wrap your components with Router */}
        <NavBar />
        <Routes> {/* Define your routes within Routes */}
          <Route path="/" element={<Hero />} /> {/* Default path for home */}
          <Route path="/productos" element={<Productos />} /> {/* Path for Productos */}
          {/* Add more Route components for additional paths as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
