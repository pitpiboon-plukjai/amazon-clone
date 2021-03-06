import React, {useEffect} from 'react';
import "./App.css";
import Header from'./Header';
import Home from'./Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout'
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    //BEM

    //Note
    //React v6 changed from "Swtich" to "Routes"

    <Router>
      <div className="app">
        <Header/>
          <Routes>
            {/* <Route path="/login" element={<h1>Login page</h1>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/" element={<Home/>} />
              
          </Routes>

      </div>


    </Router>
  );
}

export default App;