import React from 'react';
import logo from './logo.svg';
import './App.css';
import RouteList from './Routes';
import Header from './components/Header';
import {AuthContext} from './context'
// export default function App(){
//    return (
//        <AuthContext.Provider>
//           <Authentication/>
//           <ProtectedResource />
//        <AuthContext.Provider />
//    )
// }


function App() {
  return (
    <div className="App">
      <Header />
      <RouteList />
    </div>
  );
}

export default App;
