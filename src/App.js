import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./pages/cover";
import Home from "./pages/home";
import About from './pages/about';
import Activities from './pages/activities';
import Schedule from './pages/schedule';
import Goods from './pages/goods';
import Members from './pages/members';

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Cover} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/goods" component={Goods} />
      </div>
    </Router>
  )
}

export default App;
