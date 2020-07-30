import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import AdminWrapper from './components/AdminWrapper';
import PageWrapper from './components/PageWrapper';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/common/Contact';
import Services from './components/common/Services';
import Team from './components/common/Team';
import Portfolio from './components/common/Portfolio';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';


function App() {
  return (
    <Router>

      <Route 
        path="/admin"
        render={props => (
          <AdminWrapper>
            <Login />
          </AdminWrapper>
        )}
      />

        <Route 
          exact={true}
          path="/"
          render={props => (
            <PageWrapper>
              <Home {...props} />
            </PageWrapper>
          )}
        />

        <Route 
          path="/portfolio"
          render={props => (
            <PageWrapper>
              <Portfolio {...props} />
            </PageWrapper>
          )}
        />

        <Route 
          path="/about"
          render={props => (
            <PageWrapper>
              <About {...props} />
            </PageWrapper>
          )}
        />

        <Route
        path="/contact"
        render={props => (
          <PageWrapper>
            <Contact {...props} />
          </PageWrapper>
        )}
        />

        <Route 
        path="/services"
        render={props => (
          <PageWrapper>
            <Services {...props} />
          </PageWrapper>
        )}
        />
    </Router>
  );
}

export default App;
