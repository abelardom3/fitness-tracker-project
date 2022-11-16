import HomePage from './components/HomePage';
import React, { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import InputContext from './Context/InputContext'
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './components/Register/ResgisterForm';
import LoginForm from './components/login/login';
import UserHome from './components/UserPage/UserHome';

function App() {

  const { setLogs, count } = useContext(InputContext)
  const [auth, setAuth] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/logs')
      console.log(response.data)
      setLogs(response.data)
    }
    fetchData()
  }, [count])

  const test = () => {
    setAuth(true)
  }



  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={auth ? <Navigate to='/tracker' /> : <LoginForm test={test} />} />
      <Route path='/tracker' element={auth ? <UserHome /> : <LoginForm test={test} />} />
    </Routes>
  );
}

export default App;
