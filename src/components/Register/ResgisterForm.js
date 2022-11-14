import { useFormik } from "formik";
import axios from "axios";
import { registerSchema } from "./registerSchema";


const Register = () => {

    const onSubmit = async (values, actions) => {
        const result = await axios.post('http://localhost:8000/auth/register', values)
        console.log(result.data)
        actions.resetForm()
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
        <div className="register-container">
            <h1 className="header-reg">Register</h1>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className="input-box">
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
                <div className="input-box">
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
                    {errors.email && touched.email && <p className="error-p">{errors.email}</p>}
                </div>
                <div className="input-box">
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
    )

}



export default Register;