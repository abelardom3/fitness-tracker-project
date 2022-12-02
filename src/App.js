import HomePage from './components/HomePage';
import React, { useEffect, useContext } from 'react'
import InputContext from './Context/InputContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './components/Register/ResgisterForm';
import LoginForm from './components/login/login';
import UserHome from './components/UserPage/UserHome';

function App() {


  const { setUserInfo, auth, setAuth } = useContext(InputContext)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuth');
    console.log(isLoggedIn)
    if (isLoggedIn !== null) {
      setAuth(isLoggedIn)
    }
  }, [])

  useEffect(() => {
    const userData = localStorage.getItem('accessToken')
    if (!userData) {
      console.log('hit undefined')
    } else {
      const getPayLoad = userData.split(".")[1];
      const payLoad = JSON.parse(atob(getPayLoad))
      console.log('hit else')
      setUserInfo(payLoad)

    }
  }, [])



  return (
    <Routes>
      <Route path='/' element={auth ? <UserHome /> : <HomePage />} />
      <Route path='/register' element={auth ? <UserHome /> : <Register />} />
      <Route path='/login' element={auth ? <Navigate to='/tracker' /> : <LoginForm />} />
      <Route path='/tracker' element={auth ? <UserHome /> : <LoginForm />} />
    </Routes>
  );
}

export default App;
