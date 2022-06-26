import { Close } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
const EditUser = (props) => {
    const [cookies] = useCookies();
    const classes = useStyle()
    const [val, setVal] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        userName: props.userName,
    });
    const userEditHandleChange = (e) => {
        const { name, value } = e.target;
        setVal((preValue) => {
            return {
                ...preValue,
                [name]: value,

            }
        })
    }
    const saveValues = async () => {
        await axios.post('http://localhost:5000/edituser', { cookies, val }).then((res) => { console.log(res.data.res) }).catch(() => { console.log("error saving data"); })
    }
    return (
        <div>
            <button style={{ background: "none", border: "none", cursor: "pointer" }} onClick={() => { props.setPopup("none") }}><Close /></button>
            <div>
                <form className={classes.EditUserFormRoot}>
                    <input className={classes.editUserInput} type="text" name='firstName' value={val.firstName} onChange={userEditHandleChange} />
                    <input className={classes.editUserInput} type="text" name='lastName' value={val.lastName} onChange={userEditHandleChange} />
                    <input className={classes.editUserInput} type="text" name='userName' value={val.userName} onChange={userEditHandleChange} />
                    <button className={classes.editUserInput} onClick={saveValues}>Saved</button>
                </form>
            </div>
        </div>
    )
}

export default EditUser