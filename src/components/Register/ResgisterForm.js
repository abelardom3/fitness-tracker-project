import { useFormik } from "formik";
import axios from "axios";
import { registerSchema } from "./registerSchema";
import InputContext from "../../Context/InputContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom"


const Register = () => {

    const { getUserInfo, handleLoggingIn } = useContext(InputContext)
    const [err, setErr] = useState({})

    const onSubmit = async (values, actions) => {
        try {
            // const result = await axios.post('http://localhost:8000/auth/register', values)
            const result = await axios.post('https://fitness-tracker-api.onrender.com/auth/register', values)
            localStorage.setItem("accessToken", result.data.accessToken)
            localStorage.setItem('isAuth', true)
            handleLoggingIn()
            getUserInfo()
            actions.resetForm()
        } catch (error) {
            setErr(error.response.data)
        }
    }

    const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: registerSchema,
        onSubmit
    })


    return (

        <div className="container2">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Link to='/' style={{ textDecoration: 'none' }} >
                    <h1 className="header-text"><span className="f-text">F</span>ITNESS <span className="t-text">T</span>RACKER</h1>
                </Link>
            </div>
            <div style={{ paddingTop: '10rem' }}>
                <div className="register-container">
                    <h1 className="header-reg">Register</h1>
                    <form onSubmit={handleSubmit} className='form-container'>
                        <div className="input-box2">
                            <label className="label-h1">Name</label>
                            <input type='text'
                                id="input-reg"
                                placeholder="Name"
                                name="name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                className={errors.name && touched.name ? 'input-error' : ''}
                            />
                            {errors.name && touched.name && <p className="error-p">{errors.name}</p>}
                        </div>
                        <div className="input-box2">
                            <label className="label-h1">Email</label>
                            <input type='text'
                                id="input-reg"
                                placeholder="Email"
                                name='email'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                values={values.email}
                                className={errors.email && touched.email ? 'input-error' : ''}
                            />
                            {((errors.email && touched.email) || err.msg) && <p className="error-p">{errors.email || err.msg}</p>}
                        </div>
                        <div className="input-box2">
                            <label className="label-h1">Password</label>
                            <input type='password'
                                id="input-reg"
                                placeholder='Password'
                                name='password'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                className={errors.password && touched.password ? 'input-error' : ''}
                            />
                            {errors.password && touched.password && <p className="error-p">{errors.password}</p>}
                        </div>
                        <button type="submit" className="btn-reg">submit</button>
                    </form>
                </div>
            </div>
        </div>



    )

}



export default Register;