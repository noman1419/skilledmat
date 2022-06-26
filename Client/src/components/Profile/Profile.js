import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Edit, Settings } from '@material-ui/icons'
import EditPopup from './Edit/EditUser'
import Popup from "reactjs-popup";
const Profile = (props) => {
    const [cookies] = useCookies();
    const [value, setValue] = useState({})
    const [load, setLoad] = useState(false)
    useEffect(() => {
        axios.post('http://localhost:5000/profile', cookies).then((res) => { setValue(res.data.res); setLoad(true) }).catch(() => { console.log("some error on profile page"); })
    }, [])

    const { firstName, lastName, email, userName } = value;
    const classes = useStyle();

    const handleProfileImage = async (e) => {
        const image = e.target.files[0]
        console.log(image);
        await axios.post('http://localhost:5000/profileimage', image).then((res) => { console.log(res.data.res) }).catch((err) => { console.log(err.response); })
    }
    const [popup, setPopup] = useState("none");

    const handleEditPopup = () => {
        if (popup == "none") {
            setPopup("block")
        }
    }
    return (
        <div className={classes.profileRoot}>
            {
                load ?
                    <div style={{ position: "relative" }}>
                        <div style={{ position: "relative" }}>
                            <Settings style={{ position: "absolute", left: "95%", cursor: "pointer", }} name="setting"
                                onClick={handleEditPopup} />
                        </div>
                        <div style={{ display: popup }} className={classes.editPopupModulComponentRoot}>
                            <EditPopup setPopup={setPopup} firstName={firstName} lastName={lastName} userName={userName} />
                        </div>
                        <div className={classes.profileHeader}>
                            <form className={classes.profilePictureDiv} enctype="multipart/form-data">
                                <label form='profileImg' className={classes.profileImg}>Change Profile
                                    <input type="file" id='profileImg' name='profileImage' style={{ display: "none" }} onChange={handleProfileImage} />
                                </label>
                            </form>
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
                    </div> : <h1 >Loading...</h1>
            }
        </div>

    )
}

export default Profile