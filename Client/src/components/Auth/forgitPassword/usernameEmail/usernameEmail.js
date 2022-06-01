import { React } from 'react'
import './usernameEmail.css'
const UsernameEmail = (props) => {
    return (
        <div className='usernameEmail-root' style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <span className='resetHeading' style={{ fontSize: "30px", fontWeight: "600", marginBottom: "10px" }}>Password reset</span>
            <div>
                <label style={{ fontWeight: "600", color: "gray" }}>Email or UserName</label>
                <input type="text" placeholder='Email or UserName' style={{ padding: "10px", width: "100%", outline: "none" }} />
            </div>
        </div>
    )
}

export default UsernameEmail