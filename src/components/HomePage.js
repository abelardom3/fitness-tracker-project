import { useContext } from "react"
import InputContext from "../Context/InputContext"
import Header from "./header"
import InputForm from "./InputLogs/inputForm"
import Logs from "./logs"
import { Link } from "react-router-dom"


const HomePage = () => {

    const { logs, updateLogs } = useContext(InputContext)


    return (
        <div className='container'>
            <Header />
            <div className='main-page'>
                <div className="lti-container">
                    <div className="lti-box">
                        <img alt="" className='lti-img' src="https://www.freeiconspng.com/uploads/study-icon-12.png" />
                        <h1 className="lti-header">Learn</h1>
                    </div>

                    <div className="lti-box">
                        <img alt="" className='lti-img' src="https://cdn-icons-png.flaticon.com/512/4974/4974975.png" />
                        <h1 className="lti-header">Track</h1>
                    </div>

                    <div className="lti-box">
                        <img alt="" className='lti-img' src="https://www.freeiconspng.com/uploads/growth-icon-27.png" />
                        <h1 className="lti-header">Improve</h1>
                    </div>
                </div>

                <div className="login-container">
                    <Link to='/login'>
                        <button className="login-btn">Get started</button>
                    </Link>
                </div>

                {/* <InputForm />
                <Logs logs={logs} updateLogs={updateLogs} /> */}
            </div>

        </div>
    )
}

export default HomePage