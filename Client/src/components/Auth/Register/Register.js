import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import IconFirstName from '../Assets/icons/firstname.png'
import IconEmail from '../Assets/icons/email.png'
import IconUserName from '../Assets/icons/username.png'
import IconPassword from '../Assets/icons/password.png'
import { Link } from 'react-router-dom'

const Register = () => {
    const [fieldData, setFieldData] = useState({
        fName: "",
        lName: "",
        email: "",
        username: "",
        password: "",
        cpassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFieldData((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }


    return (
        <form >
            <p className='instruction-text'>Please fill in the following information to have access to our system</p>
            <div className='inputs-div'>
                <div className='input-div' >

                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconFirstName} alt="icon" />
                        <input className='register-input' name="fName" value={fieldData.fName} type="text" placeholder="first name" onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >

                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconFirstName} alt="icon" />
                        <input className='register-input' name="lName" value={fieldData.lName} type="text" placeholder="last name" onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >

                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconEmail} alt="icon" />
                        <input className='register-input' name="email" value={fieldData.email} type="text" placeholder="email" onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >

                    <div className='register-input-root'>
                        <img className='register-input-icon' src={IconUserName} alt="icon" />
                        <input className='register-input' name="username" value={fieldData.username} type="text" placeholder="username" onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >

                    <div className='register-input-root' >
                        <img className='register-input-icon' src={IconPassword} alt="icon" />
                        <input className='register-input' name="password" value={fieldData.password} type="text" placeholder="password" onChange={handleChange} />
                    </div>
                </div>
                <div className='input-div' >

                    <div className='register-input-root' >
                        <img className='register-input-icon' src={IconPassword} alt="icon" />
                        <input className='register-input' name="password" value={fieldData.cpassword} type="text" placeholder="conform password" onChange={handleChange} />
                    </div>
                </div>

            </div>
            <div className='form-btn-div' style={{}}>
                {/* <Link to="/uploadfile"><button className='form-btn'>REGISTER</button></Link> */}
                <button className='form-btn' >REGISTER</button>
            </div>
            <p className='instruction-text'>After submission you will receive an email
                indicating your registration request status.</p>
        </form>
    )
}

export default Register