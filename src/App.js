import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';
import Features from "./components/Features";
import About from './components/About';
import Footer from './components/Footer';
import Resources from './components/Resources';
import scrollUpImg from "./images/arrow-circle-up-solid.svg";
import scrollDownImg from "./images/arrow-circle-down-solid.svg";
var buttons;

class Site extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    // window.screen.height = viewport
    if (document.documentElement.clientHeight > window.screen.height) {
      buttons =
        <div class="scroll-button" id="scroll-up">
          <a href="#logo">
            <img src={scrollUpImg} alt="scroll-up-button" />
          </a>
        </div>
    }
    console.log(buttons);
  }
  render() {
    return (
      <Router>
        <NavBar />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/" component={Features} />
        </Switch>

        <div class="scroll-button" onScroll={console.log(this.innerHeight)}>
          <a href="#footer">
            <img src={scrollDownImg} alt="scroll-down-button" />
          </a>
        </div>

        <Footer />
      </Router>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Site />
    </div>
  );
}

export default App;
