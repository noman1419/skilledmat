import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { ThumbUp } from '@material-ui/icons'
const Stories = () => {
    const classes = useStyle();
    const [cookies] = useCookies();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/displaystory`, {
            headers: {
                user_token: cookies.JWT
            }
        }).then((res) => { setData(res.data.data); console.log(res.data.data); }).catch(() => { console.log("did not get proper response") })
    })
    return (
        <div>
            <div className={classes.storyRoot}>
                {
                    data.map((val) => {
                        console.log(val);
                        const profileImage = `${process.env.REACT_APP_DOMAIN}/uploads/${val.profileImage}`
                        return (<div>
                            <div className={classes.singleStory}>
                                <div className={classes.storyHeader}>
                                    <img className={classes.profileImage} src={profileImage} alt="profile image" />
                                    <div className={classes.storyUser}>
                                        <span style={{ fontWeight: "600", marginBottom: "5px" }}>{val.userName}</span>
                                        <span style={{ fontSize: "13px" }}>21-02-2022</span>
                                    </div>
                                </div>
                                <p className={classes.storyDescription}>{val.text}</p>
                                <div style={{ marginTop: "20px" }}>
                                    {
                                        !val.image.length == 0 ?

                                            val.image.length >= 1 ?
                                                val.image.map((val) => {
                                                    const image = `${process.env.REACT_APP_DOMAIN}/storyImages/${val}`
                                                    return (<>
                                                        <img style={{ width: "50%", height: "300px", }} src={image} alt="img" />
                                                    </>)
                                                }) :
                                                <img style={{ width: "100%", height: "100%", }} src={val.image[0]} alt="img" />
                                            : <></>
                                    }
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "5px", borderTop: "solid #EAEAEA 1px", marginTop: "5px" }}>
                                    <ThumbUp style={{ marginRight: "5px", color: "lightGray", cursor: "pointer" }} />({val.likes})
                                </div>
                            </div>
                        </div>)
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Stories