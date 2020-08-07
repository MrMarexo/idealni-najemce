import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'; 

import Nav from './Nav';
import Main from './Main';
import Contact from './Contact';
import HousePage from './HousePage';

const App:React.FC = () => {

  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/houses" exact component={Main}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/" exact>
          <Redirect to="/houses" />
        </Route>
        <Route path="/houses/:id" component={HousePage} />
      </Switch>
      
    </Router>
    
  );
}

export default App;
