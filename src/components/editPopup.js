import React from "react";



const EditPopup = ({ close, log }) => {
    console.log(`${log.date}  ${log.workout}`)
    const handleClick = () => {
        close()
    }


    return (
        <div className="popup-box">

            <p>this is pop</p>
            <button onClick={() => { console.log('hit edit ') }}>edit 2 </button>
            <button onClick={handleClick}>close</button>

        </div>

    )
}


export default EditPopup