
import Header from './components/header';
import InputForm from './components/input components/inputForm'
import Logs from './components/logs';
import React, { useState, useEffect } from 'react'
const axios = require('axios')

function App() {

  const [logs, setLogs] = useState([])
  const [count, setCount] = useState(0)
  const [input, setInput] = useState({
    workout: '',
    duration: '',
    to_char: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/logs')
      console.log(response.data)
      setLogs(response.data)
    }
    fetchData()

  }, [count])


  const workoutChange = (e) => {
    setInput({ ...input, workout: e.target.value })
  }

  const durationChange = (e) => {
    setInput({ ...input, duration: e.target.value })
  }

  const dateChange = (e) => {
    setInput({ ...input, to_char: e.target.value })
  }

  const clearForm = () => {
    setInput({ ...input, workout: '', duration: '', to_char: '' })
    updateLogs()
  }

  const updateLogs = () => {
    setCount(count + 1)

  }

  return (
    <div className='container'>
      <Header />
      <div className='main-page'>
        <InputForm input={input} workoutChange={workoutChange} durationChange={durationChange} dateChange={dateChange} clearForm={clearForm} />
        <Logs logs={logs} updateLogs={updateLogs} />

      </div>

    </div>
  );
}

export default App;
