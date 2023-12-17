import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
     <Routes> 
      <Route path="/" />
      <Route path="/about" element={<About/>}  />
      <Route path="/skills" element={<Skills/>}  />
      <Route path="/certifications" element={<Certifications/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>}  />

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
