import React from "react";


const Header = () => {

    const reload = () => {
        window.location.reload()
    }
    return (
        <>
            <div className="header">
                <h1 onClick={reload} className="header-text"><span className="f-text">F</span>ITNESS <span className="t-text">T</span>RACKER</h1>
                <div className="info-box">
                    <h2 className="info-header">GET FIT</h2>
                    <p className="info-ptag">FITNESS TRACKER LETS YOU TRACK YOUR WORKOUTS AND SEE YOUR PROGRESS</p>
                </div>
            </div>
        </>
    )
}

export default Header