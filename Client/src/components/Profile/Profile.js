import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Edit } from '@material-ui/icons'
const Profile = () => {
    const [cookies] = useCookies();
    const [value, setValue] = useState({})
    const [load, setLoad] = useState(false)
    useEffect(() => {
        axios.post('http://localhost:5000/profile', cookies).then((res) => { setValue(res.data.res); setLoad(true) }).catch(() => { console.log("some error on profile page"); })
    }, [])
    const { firstName, lastName, email, userName } = value;
    const classes = useStyle();
    return (
        <div className={classes.profileRoot}>
            {
                load ?
                    <div className={classes.profileHeader}>
                        <div className={classes.profilePictureDiv}>
                            <label form='profileImg' className={classes.profileImg}>Change Profile
                                <input type="file" id='profileImg' style={{ display: "none" }} />
                            </label>
                        </div>
                        <div className={classes.nameUsernameRoot}>
                            <span className={classes.profileUserName}>{firstName + " " + lastName}</span>
                            <span>{userName}</span>
                            <div>
                                <span>Friends (22)</span>
                                <span style={{ marginLeft: "20px" }}>Followers (200)</span>
                            </div>
                            <div className={classes.profileHeaderBtnRoot}>
                                <button className={classes.profileMessageBtn}>Message</button>
                                <button className={classes.profileFollowBtn}>Follow</button>
                            </div>
                        </div>
                    </div> : <h1 >Loading...</h1>
            }
        </div>

    )
}

export default Profile