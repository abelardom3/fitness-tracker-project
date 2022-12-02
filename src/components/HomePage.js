import Header from "./header"
import { Link } from "react-router-dom"


const HomePage = () => {

    return (
        <div className='container'>
            <Header />
            <div className='main-page'>
                <div className="lti-container">
                    <div className="lti-box">
                        <div style={{ marginTop: '3rem', marginLeft: '10rem' }}>
                            <img alt="" className='lti-img' src="https://www.freeiconspng.com/uploads/study-icon-12.png" />
                            <h1 className="lti-header">Learn</h1>
                        </div>
                        <img className="lti-2-img" alt="" src={require("../Images/CoachVsTrainer.png")} />
                    </div>

                    <div className="lti-box-special">
                        <div style={{ marginTop: '3rem', marginRight: '9rem' }} >
                            <img alt="" className='lti-img' src="https://cdn-icons-png.flaticon.com/512/4974/4974975.png" />
                            <h1 className="lti-header">Track</h1>
                        </div>
                        <img className="lti-2-img" alt="" src={require("../Images/Fitness-Journal.jpg")} />
                    </div>

                    <div className="lti-box">
                        <div style={{ marginTop: '3rem', marginLeft: '10rem' }} >
                            <img alt="" className='lti-img' src="https://www.freeiconspng.com/uploads/growth-icon-27.png" />
                            <h1 className="lti-header">Improve</h1>
                        </div>
                        <img className="lti-2-img" alt="" src={require("../Images/MassMeasures.jpg")} />
                    </div>
                </div>

                <div className="login-container">
                    <Link to='/login'>
                        <button className="login-btn">Get started</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HomePage