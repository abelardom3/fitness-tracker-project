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
    const handleChange = (e, nameOf) => {
        console.log(nameOf)
        setNewInput({ ...newInput, nameOf: e.target.value })
        // setNewInput({ ...newInput, duration: e.target.value })
        // setNewInput({ ...newInput, date: e.target.value })

    }


    return (
        <div className="popup-box">
            <form onSubmit={handleSubmit}>
                <label>Workout</label>
                <input type="text" value={newInput.workout} onChange={(e) => { handleChange(e, newInput.workout) }} />
                <label>duration</label>
                <input type="text" value={newInput.duration} onChange={handleChange} />
                <label>date</label>
                <input type="text" value={newInput.date} onChange={handleChange} />
                <button onClick={() => { editData(log.fit_id) }}>Update</button>
            </form>
            {error && <p>need new edit</p>}
            <button onClick={handleXClick}>X</button>

        </div>

    )
}


export default EditPopup