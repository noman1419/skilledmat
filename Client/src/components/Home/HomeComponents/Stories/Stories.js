import React, { useEffect, useState } from 'react'
import useStyle from './Style'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { ThumbUp } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { Favorite } from '@material-ui/icons'
const Stories = () => {
    const classes = useStyle();
    const [cookies] = useCookies();
    const [manue, setManue] = useState('none')
    const [data, setData] = useState([]);
    const [likersID, setLikersID] = useState([])
    const [id, setID] = useState('');
    const [loader, setLoader] = useState(false)
    const [user_id, setuser_ID] = useState('')
    const [like, setLike] = useState("gray")
    const [condation, setCondation] = useState(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/displaystory`, {
            headers: {
                user_token: cookies.JWT
            },
        }).then((res) => { setData(res.data.data); setuser_ID(res.data.user_id); setLoader(true) }).catch(() => { console.log("did not get proper response") });

        axios.get(`${process.env.REACT_APP_DOMAIN}/updatelikes`).then((res) => { console.log(res.data); })

    }, [])

    function handleManueChange(id) {
        setID(id)
        if (manue == 'block') {
            setManue('none')
        } else {
            setManue('block')
        }
    }
    function filterData(id) {
        const filteredData = data.filter(data => {
            return data._id !== id;
        })

        setData(filteredData);
    }
    const handleLikesIds = (val) => {
        console.log(val);
        setLike(val);
    }
    const handleLikeChange = async (likes, likeID,) => {
        if (like === "gray") {
            setLike("red")

            var data = {
                likes: likes + 1,
                post_id: likeID,
                likersID: user_id,
                push: true

            }
        } else {
            setLike("gray")

            var data = {
                likes: likes - 1,
                post_id: likeID,
                likersID: user_id,
                push: false
            }
        }

        await axios.post(`${process.env.REACT_APP_DOMAIN}/updatelikes`, data).then(() => { console.log("updated successfully") })
    }
    async function handleDeletePost(id) {
        setManue('none')
        await axios.delete(`${process.env.REACT_APP_DOMAIN}/deletestory/`, {
            headers: {
                delete_id: id,
            }
        }).then(() => { console.log("post deleted successfully") });
    }

    return (
        <div>
            <div className={classes.storyRoot}>
                {
                    !loader ? <div style={{ width: "100%", height: "50vh", display: "flex", justifyContent: "center", alignItems: "center" }}><h1>Loading ...</h1></div> : <>
                        {
                            data.map((val) => {
                                const profileImage = `${process.env.REACT_APP_DOMAIN}/uploads/${val.profileImage}`;

                                return (<div>
                                    <div className={classes.singleStory}>
                                        <div className={classes.storyHeader}>
                                            <Link to='/userprofile'><img className={classes.profileImage} src={profileImage} alt="profile image" /></Link>
                                            <div className={classes.storyUser}>
                                                <span style={{ fontWeight: "600", marginBottom: "5px" }}>{val.userName}</span>
                                                <span style={{ fontSize: "13px" }}>21-02-2022</span>
                                            </div>
                                            {
                                                val.user_id == user_id ? <>
                                                    <span style={{ marginLeft: "auto", position: "relative" }}>
                                                        <span onClick={() => { handleManueChange(val._id) }} style={{ cursor: "pointer" }}>...</span>

                                                        {
                                                            id == val._id ? <>
                                                                <ul style={{ display: manue, position: "absolute", background: "white", marginTop: "10px", borderRadius: "5px", border: "solid gray 1px", listStyle: "none", padding: "5px", fontSize: "15px" }}>
                                                                    <li style={{ borderBottom: "solid gray 1px", cursor: "pointer" }} onClick={() => { handleDeletePost(val._id); filterData(val._id) }}>Delete</li>
                                                                    <li >Edit</li>
                                                                </ul>
                                                            </> : <></>
                                                        }
                                                    </span>
                                                </> : <></>
                                            }
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
                                            <Favorite style={{ marginRight: "5px", cursor: "pointer", color: like }} onClick={() => { handleLikeChange(val.likes, val._id,); }} onLoad={() => { setLikersID(val.likersID) }} />({val.likes})
                                        </div>
                                    </div>
                                </div>)
                            }
                            )
                        }
                    </>
                }
            </div>
        </div >
    )
}

export default Stories