import React from 'react';
import Footer from './components/Footer';
import NavbarComp from './components/NavbarComp';
import './styles/App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Footer/>
    </div>
  );
}

export default App;
