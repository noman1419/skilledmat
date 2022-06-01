import React, { useState } from 'react'
import './forgetPassword.css'
import Password from './password/password'
import UsernameEmail from './usernameEmail/usernameEmail'
import { Link } from 'react-router-dom'
const ForgetPassword = () => {
    const [next, setNext] = useState(true);
    const changeValue = () => {
        setNext(false)
    }
    return (
        <div className='root'>
            <div className='header-image'>
            </div>
            <div className='form-root'>
                <div className='form-block-outside'>
                    <div className='single-div'>
                        {next ? <UsernameEmail /> : <Password />}
                        {
                            next ?
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", marginTop: "10px" }}>
                                    <button style={{ background: "blue", padding: "10px 20px 10px 20px", color: "white", border: "none", marginTop: "10px", borderRadius: "4px", cursor: "pointer" }} onClick={changeValue}>Next</button>
                                    <Link to="/authorization" style={{ textDecoration: "none", }}><button style={{ background: "transparent", border: "solid blue 1px", marginTop: "10px", borderRadius: "4px", cursor: "pointer", padding: "10px 20px 10px 20px", color: "blue" }}>Back To Login</button></Link>
                                </div> : <></>
                        }
                    </div>
                </div >
            </div>
        </div >
    )
}

export default ForgetPassword