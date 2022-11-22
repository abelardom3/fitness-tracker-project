import Logs from "../logs"
import InputForm from "../InputLogs/inputForm"


const UserHome = () => {

    let newDate = new Date().toDateString()

    const userData = localStorage.getItem('accessToken')
    const getPayLoad = userData.split(".")[1];
    const payLoad = JSON.parse(atob(getPayLoad))

    console.log(payLoad)

    return (
        <>
            <div className="name-date-header">
                <h1 className="user-name">Welcome dude</h1>
                <h2 className="date-text">{newDate}</h2>
            </div>
            <div className="user-page">
                <InputForm />
                <Logs />
            </div>
        </>

    )
}

export default UserHome