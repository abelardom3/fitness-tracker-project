import { useState } from "react"


const LoginForm = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <div className="loginPage-container">
                <h1 className="loginPage-text">Login</h1>
                <form className="form-box" onSubmit={handleSubmit} >
                    <div className="input-box">
                        <label className="label-log">Email</label>
                        <input type='text' onChange={handleChange} value={values.email} name='email' className="input-login" />
                        <p>error</p>
                    </div>
                    <div className="input-box">
                        <label className="label-log">Password</label>
                        <input type='password' onChange={handleChange} values={values.password} name='password' className="input-login" />
                        <p>error</p>
                    </div>

                    <button type="submit" className="btn-loginPage">Log in </button>
                </form>
            </div>
        </>
    )
}


export default LoginForm