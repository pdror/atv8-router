import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Homepage from './components/Homepage';
import NovoAluno from './components/NovoAluno';

const App = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/new">
      <NovoAluno />
    </Route>
    <Route>
      <Homepage />
    </Route>
  </Switch>
);

export default App;
