import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Header/>
        <Route path="/profile" exact component={Profile} />
      </Router>
    </div>
  );
}

export default App;
