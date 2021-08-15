import "./App.scss";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route name="Home" path="/" exact component={Home} />
          <Route name="Contact" path="/contact" exact component={Contact} />
          <Route name="Projects" path="/projects" exact component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
