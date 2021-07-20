import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./pages/cover";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Cover} />
        <Route exact path="/home" component={Home} />
      </div>
    </Router>
  )
}

export default App;
