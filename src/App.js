import './App.css';
import LandingNote from './Landing Note/LandingNote';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';
import { Element } from 'react-scroll';
import Skills from './Skills/Skills';

function App() {
  return (
    <div className="main-wrapper">
      <Element name="Navigation"> <Navigation /> </Element>
      <LandingNote />
      <Element name="Projects"> <Projects /> </Element>
      <Element name="Skills"> <Skills /> </Element>
    </div>
  );
}

export default App;
