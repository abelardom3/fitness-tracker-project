import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import InputContext from "../Context/InputContext";


const EditPopup = ({ log, close }) => {

    const { updateLogs } = useContext(InputContext)
    const [newInput, setNewInput] = useState(log)
    const [error, setError] = useState(false)

    const editData = async (id) => {
        if (newInput === log) {
            setError(true)
        } else {
            const response = await axios.put(`http://localhost:8000/api/logs/${id}`, newInput)
            updateLogs()
            close()
        }

    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:8000/api/logs/${id}`)
        close()
        updateLogs()
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setNewInput({
            ...newInput,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="popup-box">
            <form className="popup-form" onSubmit={handleSubmit}>
                <div className='input-cont'>
                    <label className='label-pop'>Workout</label>
                    <input className="pop-input" type="text" value={newInput.workout} onChange={handleChange} name='workout' />
                </div>
                <div className='input-cont'>
                    <label className='label-pop'>Duration</label>
                    <input className="pop-input" type="text" value={newInput.duration} onChange={handleChange} name='duration' />
                </div>

                <div className='input-cont'>
                    <label className='label-pop'>Date</label>
                    <input className="pop-input" type="text" value={newInput.to_char} onChange={handleChange} name='date' />
                </div>

            </form>

            {error && <p className="edit-error">Need new edit*</p>}
            <div className="pop-btn-box">
                <button className="save-btn" onClick={() => { editData(log.fit_id) }}>Save</button>
                <button className="pop-delete-btn" onClick={() => handleDelete(log.fit_id)}>Delete</button>
            </div>

        </div>

    )
}


export default EditPopup