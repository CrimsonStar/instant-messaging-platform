import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import Chat from './Chat';
import selectUser from './features/userSlice'
import Login from './Login';
function App() {
  const user=useSelector(selectUser);
  return (
    //BEM naming convention
    <div className="app">
      {user ? (
        <>
     <Sidebar/>
     <Chat/>
        </>
      ):(
        <Login/> 
      )}
    </div>
    
  );
}

export default App;
