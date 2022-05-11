import './App.css';
// import { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Hello from './Hello';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>
          </Route>
          <Route path='/hello'>
            <Hello></Hello>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
