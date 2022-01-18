import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteList from './Routes';
import Header from './components/Header';
import {AuthContext} from './context'
import SignInSide from './components/SignIn';
// export default function App(){
//    return (
//        <AuthContext.Provider>
//           <Authentication/>
//           <ProtectedResource />
//        <AuthContext.Provider />
//    )
// }


function App() {
  const [token, setToken] = useState<string>();

  if(!token) {
    return <SignInSide setToken={setToken} />
  }

  return (
    <div className="App">
      <Header />
      <RouteList />
    </div>
  );
}

export default App;
