import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import Experience from './components/Experience/Experience';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/skills" component={Skills} />
        <Route path="/Experience" component={Experience} />
      </div>
    </Router>
  );
}

export default App;
