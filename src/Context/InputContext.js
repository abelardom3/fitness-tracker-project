import { createContext, useState, useEffect } from "react";
import axios from "axios";


const InputContext = createContext()

export const InputProivder = ({ children }) => {

    const [logs, setLogs] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8000/api/logs')
            console.log(response.data)
            setLogs(response.data)
        }
        fetchData()

    }, [count])


    const updateLogs = () => {
        setCount(count + 1)
    }

    return (
        <InputContext.Provider value={{ logs, updateLogs, setLogs, count }}>
            {children}
        </InputContext.Provider>
    )

}

export default InputContext