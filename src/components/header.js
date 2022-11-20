import React from "react";
import { Link } from "react-router-dom";

const Header = () => {


    return (
        <>
            <div className="header">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <h1 className="header-text"><span className="f-text">F</span>ITNESS <span className="t-text">T</span>RACKER</h1>

                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <h2 className="login-header">Log In</h2>
                    </Link>

                </div>


                <div className="info-box">
                    <h2 className="info-header">GET FIT</h2>
                    <p className="info-ptag">FITNESS TRACKER LETS YOU TRACK YOUR WORKOUTS AND SEE YOUR PROGRESS</p>
                </div>
            </div>
        </>
    )
}

export default Header