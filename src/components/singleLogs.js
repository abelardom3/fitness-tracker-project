import axios from "axios";
import React from "react";
import EditPopup from "./editPopup";
import { useState } from "react";

const SingleLogs = ({ log, updateLogs }) => {

    const [open, setOpen] = useState(false)

    let logText = `Workout: ${log.workout}, Duration: ${log.duration} on ${log.date}`

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/logs/${id}`)
        updateLogs()
    }

    const handleEdit = (id) => {
        setOpen(true)
    }

    const closePopup = () => {
        setOpen(false)
    }

    if (!open) {
        return (
            <div id={log.fit_id} className="log-box">
                <p className="log-text">{logText}</p>
                <button className='edit-btn' onClick={() => { handleEdit(log.fit_id) }}>Edit</button>
                <button className="delete-btn" onClick={() => { handleDelete(log.fit_id) }}>Delete</button>
            </div>
        )

    } else {
        return < EditPopup close={closePopup} log={log} updateLogs={updateLogs} />
    }

}

export default SingleLogs