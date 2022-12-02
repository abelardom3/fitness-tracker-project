import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const InputContext = createContext()

export const InputProivder = ({ children }) => {

    const [logs, setLogs] = useState([])
    const [count, setCount] = useState(0)
    const [userInfo, setUserInfo] = useState({})
    const [auth, setAuth] = useState(false)


    const navigate = useNavigate()



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


    const logOut = () => {
        setAuth(false)
        localStorage.removeItem('isAuth')
        localStorage.removeItem('accessToken')
        navigate('/')
    }

    const handleLoggingIn = () => {
        setAuth(true)
    }


    const updateLogs = () => {
        setCount(count + 1)
    }


    return (
        <InputContext.Provider value={{ logs, updateLogs, setLogs, count, getUserInfo, userInfo, logOut, setUserInfo, auth, setAuth, handleLoggingIn }}>
            {children}
        </InputContext.Provider>
    )

}

export default InputContext