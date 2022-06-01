import React from 'react'
import useStyle from './Style'
import Data from './DataApi'
import { ThumbUp } from '@material-ui/icons'
const Stories = () => {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.storyRoot}>
                {
                    Data.map((val) => {
                        return (<div>
                            <div className={classes.singleStory}>
                                <div className={classes.storyHeader}>
                                    <img className={classes.profileImage} src={val.profileImage} alt="profile image" />
                                    <div className={classes.storyUser}>
                                        <span style={{ fontWeight: "600", marginBottom: "5px" }}>Hamza Faham</span>
                                        <span style={{ fontSize: "13px" }}>21-02-2022</span>
                                    </div>
                                </div>
                                <p className={classes.storyDescription}>{val.description}</p>
                                <div style={{ marginTop: "20px" }}>
                                    {
                                        !val.storyImages.length == 0 ?
                                            val.storyImages.length > 1 ?
                                                val.storyImages.map((val) => {
                                                    return (<>
                                                        <img style={{ width: "50%", height: "300px", }} src={val} alt="img" />
                                                    </>)
                                                }) :
                                                <img style={{ width: "100%", height: "500px", }} src={val.storyImages[0]} alt="img" />
                                            : <></>
                                    }
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "5px", borderTop: "solid #EAEAEA 1px", marginTop: "5px" }}>
                                    <ThumbUp style={{ marginRight: "5px", color: "lightGray", cursor: "pointer" }} />(15)
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Stories