import { useContext, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import InputContext from "../../Context/InputContext"

const LoginForm = () => {

    const [err, setErr] = useState({})

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const { getUserInfo, handleLoggingIn } = useContext(InputContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.post('http://localhost:8000/auth/login', values)
        if (result.data.errors) {
            setErr(result.data.errors)
        } else if (result.data.msg) {
            setErr(result.data)
        } else {
            setErr({})
            setValues({ ...values, email: '', password: '' })
            localStorage.setItem("accessToken", result.data.accessToken)
            localStorage.setItem('isAuth', true)
            handleLoggingIn()
            getUserInfo()
        }
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="container2">
            <div style={{ paddingTop: '10rem' }}>
                <div className="loginPage-container">
                    <h1 className="loginPage-text">Login</h1>
                    <form className="form-box" onSubmit={handleSubmit} >
                        <div className="input-box">
                            <label className="label-log">Email</label>
                            <input type='text' onChange={handleChange} value={values.email} name='email' className="input-login" />
                            {err.email && <p className="error-log">{err.email}</p>}
                        </div>
                        <div className="input-box">
                            <label className="label-log">Password</label>
                            <input type='password' onChange={handleChange} value={values.password} name='password' className="input-login" />
                            {(err.password || err.msg) && <p className="error-log">{err.password || err.msg}</p>}
                        </div>

                        <button type="submit" className="btn-loginPage">Log in </button>
                        <Link to='/register' className="signUp-link">
                            <div >Need an account? Sign Up!</div>
                        </Link>
                    </form>
                </div >
            </div>

        </div>
    )
}


export default LoginForm