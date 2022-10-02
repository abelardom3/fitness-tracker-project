import axios from "axios"
import { useState } from "react"


const InputField = ({ input, workoutChange, durationChange, dateChange, clearForm }) => {
    const [error, setError] = useState(false)

    const inputValid = () => {

        if ((input.workout === '' || input.workout == null) || (input.duration === '' || input.duration == null) || (input.date === '' || input.date == null)) {
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
                <label>Workout</label>
                <input type="text" placeholder="Workout" onChange={workoutChange} value={input.workout} />
                {error && <p>Required</p>}
            </div>

            <div className="field">
                <label>duration</label>
                <input type="text" placeholder="Duration" onChange={durationChange} value={input.duration} />
                {error && <p>Required</p>}
            </div>

            <div className="field">
                <label>Date</label>
                <input type="date" placeholder="Date" onChange={dateChange} value={input.date} />
                {error && <p>Required</p>}
            </div>
            <button className="input-add-btn" onClick={inputValid}>Add</button>
        </>

    )

}
export default InputField