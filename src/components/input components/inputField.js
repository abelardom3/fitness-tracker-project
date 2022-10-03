import axios from "axios"
import { useState } from "react"


const InputField = ({ input, workoutChange, durationChange, dateChange, clearForm }) => {
    const [error, setError] = useState(false)

    const inputValid = () => {

        if ((input.workout === '' || input.workout == null) || (input.duration === '' || input.duration == null) || (input.to_char === '' || input.to_char == null)) {
            setError(true)
        } else {
            postData()
            setError(false)
        }
    }

    const postData = async () => {
        const response = await axios.post('http://localhost:8000/api/logs', input)
        console.log(response.data)
        clearForm()
    }

    return (
        <>
            <div className="field">
                <label className='label-text-input'>WORKOUT</label>
                <input className="input-box-new" type="text" placeholder="Workout" onChange={workoutChange} value={input.workout} />
                {error && <p className="error-text">Required*</p>}
            </div>

            <div className="field">
                <label className='label-text-input'>DURATION</label>
                <input className="input-box-new" type="text" placeholder="Duration" onChange={durationChange} value={input.duration} />
                {error && <p className="error-text" >Required*</p>}
            </div>

            <div className="field">
                <label className='label-text-input'>DATE</label>
                <input className="input-box-new" type="date" placeholder="Date" onChange={dateChange} value={input.to_char} />
                {error && <p className="error-text" >Required*</p>}
            </div>
            <button className="input-add-btn" onClick={inputValid}>Add</button>
        </>

    )

}
export default InputField