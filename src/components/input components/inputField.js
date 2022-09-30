

const InputField = () => {

    return (
        <>

            <div className="field">
                <label>Workout</label>
                <input type="text" placeholder="Workout" />
            </div>

            <div className="field">
                <label>duration</label>
                <input type="text" placeholder="Duration" />
            </div>

            <div className="field">
                <label>Date</label>
                <input type="text" placeholder="Date" />
            </div>
            <button className="input-add-btn">Add</button>
        </>

    )

}
export default InputField