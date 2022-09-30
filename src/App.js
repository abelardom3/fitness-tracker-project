
import Header from './components/header';
import InputForm from './components/input components/inputForm'
import Logs from './components/logs';
import React, { useState, useEffect } from 'react'
const axios = require('axios')

function App() {

  const [logs, setLogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/logs')
      console.log(response.data)
      setLogs(response.data)
    }
    fetchData()

  }, [])





  return (
    <div className='container'>
      <Header />
      <InputForm />
      <Logs logs={logs} />
    </div>
  );
}

export default App;
