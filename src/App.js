import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import Experience from './components/Experience/Experience';
import NeighborFave from './components/projectsDetails/NeighborFave';
import PersonalWeb from './components/projectsDetails/PersonalWeb';
import EzManage from './components/projectsDetails/EzManage';
import VirtualKitchen from './components/projectsDetails/VirtualKitchen';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsContainer} />
        <Route path="/virtual-kitchen" component={VirtualKitchen} />
        <Route path="/ez-manage" component={EzManage} />
        <Route path="/personal-web" component={PersonalWeb} />
        <Route path="/neighbor-fave" component={NeighborFave} />
        <Route path="/skills" component={Skills} />
        <Route path="/Experience" component={Experience} />
      </div>
    </Router>
  );
}

export default App;
