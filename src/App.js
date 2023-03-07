import './App.css';
import LandingNote from './Landing Note/LandingNote';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="main-wrapper">
      <Navigation />
      <LandingNote />
      <Projects />
    </div>
  );
}

export default App;
