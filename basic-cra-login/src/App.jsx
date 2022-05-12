import './App.css';
// import { useState } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Hello from './Hello';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route path='/hello' element={<Hello />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
