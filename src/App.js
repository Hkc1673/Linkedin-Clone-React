import React, { useEffect } from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { logout, selectUser, login } from './features/userSlice';
import Login from "./Login"
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {
        !user ? (
          <Login />
        ) : (
            <div className="app__body">
              <Sidebar />
              <Feed />
            </div>
          )}
    </div>
  );
}

export default App;
