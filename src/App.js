import React from 'react';
import logo from './logo.svg';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/common/Contact';
import Services from './components/common/Services';
import Team from './components/common/Team';
import Projects from './components/common/Projects';
import Admin from './components/pages/Admin';

function App() {
  return (
    <Router>
      <Route 
        path="/admin"
        component={Admin}
      />

      <PageWrapper>
        <Route 
          exact={true}
          path="/"
          component={Home}
        />

        <Route 
          path="/projects"
          component={Projects}
        />

        <Route 
          path="/about"
          component={About}
        />

        <Route
        path="/contact"
        component={Contact}
        />

        <Route 
        path="/services"
        component={Services}
        />
      
      </PageWrapper>
    </Router>
  );
}

export default App;
