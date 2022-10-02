

import InputField from "./inputField";



const InputForm = ({ input, workoutChange, durationChange, dateChange, clearForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <form className="input-form" onSubmit={handleSubmit} >
                <h1 className="input-new-text">New Workout</h1>
                <div className="input-box">
                    <InputField input={input} workoutChange={workoutChange} durationChange={durationChange} dateChange={dateChange} clearForm={clearForm} />
                </div>
            </form>
        </>
    )
}


export default InputForm
