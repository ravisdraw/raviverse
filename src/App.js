import './App.css';
import LandingNote from './Landing Note/LandingNote';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';
import { Element } from 'react-scroll';


function App() {
  return (
    <div className="main-wrapper">
      <Navigation />
      <LandingNote />
      <Element name="Projects">
        <Projects />
      </Element>
    </div>
  );
}

export default App;
