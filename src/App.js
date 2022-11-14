import HomePage from './components/HomePage';
import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import InputContext from './Context/InputContext'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register/ResgisterForm';
import LoginForm from './components/login/login';

function App() {

  const { setLogs, count } = useContext(InputContext)



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/logs')
      console.log(response.data)
      setLogs(response.data)
    }
    fetchData()
  }, [count])




  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<LoginForm />} />
    </Routes>
  );
}

export default App;
