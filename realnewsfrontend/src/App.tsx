import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import Newsfeed from './components/Newsfeed';
import Routes from './Routes'
import RouteList from './Routes';

function App() {
  return (
    <div className="App">
      <RouteList />
    </div>
  );
}

export default App;
