import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteList from './Routes';
import Header from './components/Header';
import { UserContext } from './context'
import SignInSide from './components/SignIn';

// import { useInRouterContext } from 'react-router-dom';
// export default function App(){
//    return (
//        <AuthContext.Provider>
//           <Authentication/>
//           <ProtectedResource />
//        <AuthContext.Provider />
//    )
// }


function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState<Number>();
  const [username, setUsername] = useState("");

  console.log('THIS IS MY USERNAME!!', username, 'THIS IS MY USERID', userId)
  // if(!token) {
  //   return <SignInSide setToken={setToken} />
  // }

  return (
    <UserContext.Provider value={token}>
    <div className="App" >
      <Header setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>
      <RouteList setToken={setToken} setUserId={setUserId} setUsername={setUsername}/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
