import React from 'react'

const Password = () => {
    return (
        <div className='usernameEmail-root' style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <span className='resetHeading' style={{ fontSize: "25px", fontWeight: "600", marginBottom: "10px" }}>Password reset</span>
            <span style={{ fontWeight: "500", marginBottom: "20px", }}>Please enter your password twice so we can verify you typed it in correctly.</span>
            <div>
                <div>
                    <label style={{ fontWeight: "600", color: "gray" }}>New Password</label>
                    <input type="text" placeholder='New Password' style={{ padding: "10px", width: "100%", outline: "none", border: "solid gray 1px", borderRadius: "5px" }} />
                </div>
                <div style={{}}>
                    <ul style={{ fontSize: "12px", color: "gray", marginLeft: "20px" }}>
                        <li>Your password can't be too smaller to your other persnol inforation</li>
                        <li>Your password must contain at least 6 characters</li>
                        <li>your password can't be a commonly use password</li>
                        <li>your password cannot be entirely numeric </li>
                    </ul>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <label style={{ fontWeight: "600", color: "gray" }}>New Password Conformation</label>
                    <input type="text" placeholder='New Password Conformation' style={{ padding: "10px", width: "100%", outline: "none", borderRadius: "5px", border: "solid gray 1px" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", marginTop: "10px" }}>
                    <button style={{ background: "green", padding: "10px 20px 10px 20px", color: "white", border: "none", marginTop: "10px", borderRadius: "4px", cursor: "pointer" }}>Change</button>
                </div>
            </div>
        </div>
    )
}

export default Password