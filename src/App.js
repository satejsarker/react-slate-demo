import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RichText from './components/RichText/RichText';

import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
class App extends Component {
  
  render() {
    return <Router>
        <div className="container">
          <Header />

          <Switch>
            <Route component={RichText} exact path="/richText" />
          </Switch>
        </div>
      </Router>;
  }
}

export default App;
