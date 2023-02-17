import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import Picture from './components/Picture/Picture';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import DisplayMenu from './components/DisplayMenu/DisplayMenu';
import { useState } from 'react';
import Footer from './components/Footer/Footer';


function App() {
  
  const [display, setDisplay] = useState(false)
const toggleDisplay = () => {
  setDisplay(prevVal => !prevVal)
}


  return (
    <div className="App">
      <Navbar toggleDisplay={toggleDisplay} />
      <Home />
      {/* <Picture /> */}
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer/>
      {display && <DisplayMenu />}
      
    </div>
  );
}

export default App;
