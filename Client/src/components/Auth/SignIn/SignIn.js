import React, { useState } from 'react'
import './SignIn.css'
import IconUserName from '../Assets/icons/username.png'
import IconPassword from '../Assets/icons/password.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
const SignIn = () => {
    const [fieldData, setFieldData] = useState({
        email: "",
        password: "",
    })
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
    const history = useNavigate() //this is use to direct to home page after successfully login
    const [message, setMessage] = useState('Please fill in the fallowing information to sign in')
    const [status, setStatus] = useState(202) //code that we got from the api response came from the server and using to change the color of the warning
    const handleChange = (e) => {
        setMessage('Please fill in the fallowing information to sign in')
        setStatus(202)
        const { name, value } = e.target;
        setFieldData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const login = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/login', fieldData).then((res) => {
            const tokenFromLogin = res.data.token;
            setCookie("JWT", tokenFromLogin);
            history('./home');
        }).catch((err) => { setStatus(err.response.status); setMessage(err.response.data.err) })
    }
    return (
        <form>
            {
                status === 500 ?
                    <p className='instruction-text' style={{ color: "red" }} >{message}</p> :
                    <p className='instruction-text' style={{ color: "#5c636e" }}>{message}</p>
            }
            <div className='inputs-div'>
                <div className='input-div' >
                    <div className='signin-input-root'>
                        <img className='signin-input-icon' src={IconUserName} />
                        <input className='signin-input' type="text" placeholder="Enter Email" name="email" value={fieldData.email} onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >
                    <div className='signin-input-root' >
                        <img className='signin-input-icon' src={IconPassword} />
                        <input className='signin-input' type="text" placeholder="Password" name="password" value={fieldData.password} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className='form-btn-div' style={{}}>
                <Link to='/home'> <button className='form-btn' onClick={login}>SIGN-IN</button></Link>
            </div>
        </form>
    )
}

export default SignIn