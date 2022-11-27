import axios from "axios"
import { useFormik } from "formik"
import { useContext } from "react";
import { dataSchema } from "./dataSchema";
import InputContext from '../../Context/InputContext'

const InputForm = () => {
    const { updateLogs, userInfo } = useContext(InputContext)

    const onSubmit = async (values, actions) => {
        const body = { ...values, userId: userInfo.userId }
        const response = await axios.post('http://localhost:8000/api/logs', body)
        console.log(response.data)
        actions.resetForm()
        updateLogs()
    }


    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            workout: '',
            duration: '',
            date: ''
        },
        validationSchema: dataSchema,
        onSubmit
    })


    return (
        <>
            <form className="input-form" onSubmit={handleSubmit} >
                <h1 className="input-new-text">New Workout</h1>
                <div className="input-box-cont">
                    <div className="field">
                        <label className='label-text-input'>WORKOUT</label>
                        <input id="input-box-new"
                            type="text"
                            placeholder="Workout"
                            onChange={handleChange}
                            value={values.workout}
                            name='workout'
                            onBlur={handleBlur}
                            className={errors.workout && touched.workout ? "input-error" : ""} />
                        {errors.workout && touched.workout && <p className="error-text">{errors.workout}</p>}
                    </div>

                    <div className="field">
                        <label className='label-text-input'>DURATION</label>
                        <input id="input-box-new"
                            type="text"
                            placeholder="Duration"
                            onChange={handleChange}
                            value={values.duration}
                            name='duration'
                            onBlur={handleBlur}
                            className={errors.duration && touched.duration ? "input-error" : ""} />
                        {errors.duration && touched.duration && <p className="error-text">{errors.duration}</p>}
                    </div>

                    <div className="field">
                        <label className='label-text-input'>DATE</label>
                        <input id="input-box-new"
                            type="date"
                            placeholder="Date"
                            onChange={handleChange}
                            value={values.date}
                            name='date'
                            onBlur={handleBlur}
                            className={errors.date && touched.date ? "input-error" : ""} />
                        {errors.date && touched.date && <p className="error-text">{errors.date}</p>}
                    </div>
                    <button className="input-add-btn" type="submit">Add</button>
                </div>
            </form>
        </>
    )
}


export default InputForm
