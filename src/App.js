import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import { Home } from './Pages/Home';
import { Informacion } from './Pages/Informacion';
import { Contact } from './Pages/Contact';
import { Layout } from './Componentes/Layout';
import { Navigation } from './Componentes/Navigation';
import { Footer } from './Componentes/Footer';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Navigation />
        
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/about" component={Informacion}/>
              <Route  path="/contact" component={Contact}/>
              <Route path="/" component={Home}/>
            </Switch>
          </Router>
         
        <Footer />
        
      </React.Fragment>
    );
  }
}
export default App;

