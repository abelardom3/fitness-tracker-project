import axios from "axios"


const InputField = ({ input, workoutChange, durationChange, dateChange, clearForm }) => {

    const postData = async () => {
        const response = await axios.post('http://localhost:8000/api/logs', input)
        console.log(response.data)
        clearForm()
    }



    return (
        <>
            <div className="field">
                <label>Workout</label>
                <input type="text" placeholder="Workout" onChange={workoutChange} value={input.workout} required />
            </div>

            <div className="field">
                <label>duration</label>
                <input type="text" placeholder="Duration" onChange={durationChange} value={input.duration} required />
            </div>

            <div className="field">
                <label>Date</label>
                <input type="text" placeholder="Date" onChange={dateChange} value={input.date} required />
            </div>
            <button className="input-add-btn" onClick={postData}>Add</button>
        </>

    )

}
export default InputField