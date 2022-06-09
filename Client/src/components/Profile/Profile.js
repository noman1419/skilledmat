import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import dummyImage from './Assets/dummy-person-01.png'
const Profile = () => {
    const [cookies] = useCookies();
    const [value, setValue] = useState({})
    useEffect(() => {
        axios.post('http://localhost:5000/profile', cookies).then((res) => { setValue(res.data.res) }).catch(() => { console.log("some error on profile page"); })
    }, [])
    const { firstName, lastName, email, userName } = value;
    const classes = useStyle();
    return (
        <div className={classes.profileRoot}>
            <div className={classes.profileHeader}>
                <div>
                    <img src={dummyImage} className={classes.profilePicture} alt="dummy Profile picture" />
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
            </div>
        </div>

    )
}

export default Profile