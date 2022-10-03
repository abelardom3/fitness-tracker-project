import React from "react";
import { useState } from "react";
import axios from "axios";

const EditPopup = ({ close, log, updateLogs }) => {

    const [newInput, setNewInput] = useState(log)
    const [error, setError] = useState(false)

    const editData = async (id) => {
        if (newInput === log) {
            setError(true)
        } else {

            const response = await axios.put(`http://localhost:8000/api/logs/${id}`, newInput)
            console.log(response.data)
            updateLogs()
            close()
        }

    }


    const handleXClick = () => {
        close()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleWorkout = (e) => {
        setNewInput({ ...newInput, workout: e.target.value })
    }
    const handleDuration = (e) => {
        setNewInput({ ...newInput, duration: e.target.value })
    }
    const handleDate = (e) => {
        setNewInput({ ...newInput, to_char: e.target.value })
    }

    return (
        <div className="popup-box">
            <form className="popup-form" onSubmit={handleSubmit}>
                <label>Workout</label>
                <input className="pop-input" type="text" value={newInput.workout} onChange={handleWorkout} />
                <label>Duration</label>
                <input className="pop-input" type="text" value={newInput.duration} onChange={handleDuration} />
                <label>Date</label>
                <input className="pop-input" type="text" value={newInput.to_char} onChange={handleDate} />
                <div className="pop-btn">
                    <button className="update-btn" onClick={() => { editData(log.fit_id) }}><ion-icon name="create"></ion-icon></button>
                    <button className="close-edit-btn" onClick={handleXClick}><ion-icon name="close"></ion-icon></button>
                </div>
            </form>
            {error && <p className="edit-error">Need new edit*</p>}


        </div>

    )
}


export default EditPopup