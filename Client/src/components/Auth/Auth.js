import React, { useState } from 'react'
import './Auth.css'
import Register from './Register/Register'
import SignIn from './SignIn/SignIn'
const Auth = () => {
    const [state, setState] = useState(true)
    const [tabColor, setTabColor] = useState({
        color: "#9d9d9d",
        borderBottom: "solid transparent 0.1em",
        border: "solid transparent 3px"
    })
    const [tabColor2, setTabColor2] = useState({
        color: "#5830E0",
        borderBottom: "solid #5830E0  0.1em",
        border: "solid #5830E0 3px"
    })
    const handleChang = () => {
        state ? setState(false) : setState(true)
        !state ? setTabColor({ color: "#9d9d9d", borderBottom: "solid transparent  0.1em", border: "solid transparent 3px" }) : setTabColor({ color: "#5830E0", borderBottom: "solid #5830E0 0.1em", border: "solid #5830E0 3px" })
        !state ? setTabColor2({ color: "#5830E0", borderBottom: "solid #5830E0 0.1em", border: "solid #5830E0 3px" }) : setTabColor2({ color: "#9d9d9d", borderBottom: "solid transparent  0.1em", border: "solid transparent 3px" })

    }
    return (
        <div className='auth-root'>
            <div className='form-root'>
                <div className='form-block-outside'>
                    <div className='single-div'>
                        <div className='top-tag-outer-border'>
                            <span className='top-tag-inner-border'>{state ? <span className='top-tag-text'>Signinng in Page</span> : <span className='top-tag-text'>Registration Page</span>}</span>
                        </div>
                        <ul className='tabs'>
                            <li onClick={handleChang} style={{ color: tabColor.color, borderBottom: tabColor.borderBottom, display: "flex", flexDirection: "row", alignItems: "center" }} className='tabs-item'>
                                <span style={{ border: tabColor.border, height: "2px", width: "2px", borderRadius: "50px", marginRight: "10px", }}></span>
                                <span>Register</span>
                            </li>
                            <li onClick={handleChang} style={{ color: tabColor2.color, borderBottom: tabColor2.borderBottom, display: "flex", flexDirection: "row", alignItems: "center" }} className='tabs-item'>
                                <span style={{ border: tabColor2.border, height: "2px", width: "2px", borderRadius: "50px", marginRight: "10px", }}></span>
                                <span>Sign In</span>
                            </li>
                        </ul>
                        {
                            state ? <SignIn /> : <Register />
                        }
                    </div>
                    {/* <div><SignIn /></div>
                    <div><Register /></div> */}
                </div>
            </div >

        </div >
    )
}

export default Auth