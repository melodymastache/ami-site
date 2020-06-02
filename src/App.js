/////////////////// App.js ////////////////////////

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
import scrollDownImg from "./images/arrow-circle-down-solid.svg";
import scrollUpImg from "./images/arrow-circle-up-solid.svg";

function toggleDownArrow() {
  if (document.documentElement.clientHeight === window.screen.height) {
    return (
      <div class="scroll-button">
        <a href="#footer">
          <img src={scrollDownImg} alt="scroll-down-button" />
        </a>
      </div>
    )
  }
  else {
    return <span></span>
  }
}

function toggleUpArrow() {
  if (document.documentElement.clientHeight > window.screen.height) {
    return (
      <div class="scroll-button" id="scroll-up">
        <a href="#logo">
          <img src={scrollUpImg} alt="scroll-up-button" />
        </a>
      </div>
    )
  }
  else {
    return <span></span>
  }
}

class Site extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    // window.screen.height = viewport
  }
  render() {
    return (
      <Router>
        <NavBar />

        {toggleDownArrow()}

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/" component={Features} />
        </Switch>

        {toggleUpArrow()}

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
