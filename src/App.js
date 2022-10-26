import * as React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import "./index.css"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Newsletter />
      <Analytics /> 
      <Footer />
    </div>
  );
}

export default App;
