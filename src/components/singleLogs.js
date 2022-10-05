import axios from "axios";
import React from "react";
import EditPopup from "./editPopup";
import { useState } from "react";

const SingleLogs = ({ log, updateLogs }) => {

    const [open, setOpen] = useState(false)

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
                <p className="log-text">
                    <span className="log-text-display">Workout: </span>{log.workout},
                    <span className="log-text-display"> Duration: </span>{log.duration}
                    <span className="log-text-display"> on </span>{log.to_char}
                </p>
                <div className="log-btn">
                    <button className='edit-btn' onClick={() => { handleEdit(log.fit_id) }}><ion-icon name="create"></ion-icon></button>
                    <button className="delete-btn" onClick={() => { handleDelete(log.fit_id) }}><ion-icon name="trash"></ion-icon></button>
                </div>
            </div>
        )
    } else {
        return < EditPopup close={closePopup} log={log} updateLogs={updateLogs} />
    }

}

export default SingleLogs