import Header from './components/header';
import InputForm from './components/InputLogs/inputForm'
import Logs from './components/logs';
import React, { useEffect, useContext } from 'react'
import axios from 'axios';
import InputContext from './Context/InputContext'

function App() {

  const { logs, updateLogs, setLogs, count } = useContext(InputContext)



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/api/logs')
      console.log(response.data)
      setLogs(response.data)
    }
    fetchData()
  }, [count])




  return (
    <div className='container'>
      <Header />
      <div className='main-page'>
        <InputForm />
        <Logs logs={logs} updateLogs={updateLogs} />
      </div>

    </div>
  );
}

export default App;
