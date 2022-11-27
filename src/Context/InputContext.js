import { createContext, useState, useEffect } from "react";
import axios from "axios";


const InputContext = createContext()

export const InputProivder = ({ children }) => {

    const [logs, setLogs] = useState([])
    const [count, setCount] = useState(0)
    const [userInfo, setUserInfo] = useState({})

    const getUserInfo = () => {
        const userData = localStorage.getItem('accessToken')
        if (!userData) {
            console.log('hit undefined')
        } else {
            const getPayLoad = userData.split(".")[1];
            const payLoad = JSON.parse(atob(getPayLoad))
            console.log('hit else')
            setUserInfo(payLoad)
            // console.log(payLoad)
        }
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log('hit use effect')
    //         console.log(userInfo)
    //         const response = await axios.get('http://localhost:8000/api/logs')
    //         console.log(response.data)
    //         setLogs(response.data)
    //     }
    //     fetchData()

    // }, [count])


    const updateLogs = () => {
        setCount(count + 1)
    }


    return (
        <InputContext.Provider value={{ logs, updateLogs, setLogs, count, getUserInfo, userInfo }}>
            {children}
        </InputContext.Provider>
    )

}

export default InputContext