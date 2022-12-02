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
            // const response = await axios.get(`http://localhost:8000/api/logs/${userInfo.userId}`)
            const response = await axios.get(`https://fitness-tracker-api.onrender.com/api/logs/${userInfo.userId}`)
            setLogs(response.data)
        }
        fetchData()

    }, [count])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#303036' }}>
                <h1 className="header-text2"><span className="f-text">F</span>ITNESS <span className="t-text">T</span>RACKER</h1>
            </div>


            <div className="name-date-header">
                <h1 className="user-name">Welcome {userInfo.userName}</h1>
                <h2 className="date-text">{newDate}</h2>
                <button className="logout-btn" onClick={() => { logOut() }}>Log out</button>
            </div>
            <div className="user-page">
                <InputForm />
                <Logs />
            </div>
        </>

    )
}

export default UserHome