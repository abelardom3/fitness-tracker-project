import Logs from "../logs"
import axios from "axios"
import InputForm from "../InputLogs/inputForm"
import InputContext from "../../Context/InputContext"
import { useContext, useEffect } from "react"


const UserHome = () => {

    let newDate = new Date().toDateString()

    const { userInfo, setLogs, count, logOut } = useContext(InputContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:8000/api/logs/${userInfo.userId}`)
            console.log(response.data)
            setLogs(response.data)
        }
        fetchData()

    }, [count])






    return (
        <>
            <div className="name-date-header">
                <h1 className="user-name">Welcome {userInfo.userName}</h1>
                <h2 className="date-text">{newDate}</h2>
                <button onClick={() => { logOut() }}>Log out mate</button>
            </div>
            <div className="user-page">
                <InputForm />
                <Logs />
            </div>
        </>

    )
}

export default UserHome