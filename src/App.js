import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./pages/cover";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Cover} />
      </div>
    </Router>
  )
}

export default App;
