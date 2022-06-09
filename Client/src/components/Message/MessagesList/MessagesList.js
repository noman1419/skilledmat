import React from 'react'
import useStyle from './Style';
import Data from './MessageListApi';
import { Link } from 'react-router-dom';
const MessagesList = () => {
    const classes = useStyle();
    return (
        <div>
            <div className={classes.messageListHeading}>Messages</div>
            <div>
                {
                    Data.map((val) => {
                        return (<>
                            <Link to="/home/inbox">
                                <div className={classes.messageListSingleUnit}>
                                    <img className={classes.messageListUserImage} src={val.userImage} alt="user image" />
                                    <span className={classes.messageListUserName}>{val.name}</span>
                                    {
                                        val.unseen > 0 ?
                                            <span style={{ background: "#00B502", padding: "5px", textAlign: "center", borderRadius: "50%" }}>{val.unseen}</span> : ""
                                    }
                                    <span className={classes.messageListUserLastMessageDate}>{val.date}</span>
                                </div>
                            </Link>
                        </>)
                    })
                }
            </div>
        </div>
    )
}

export default MessagesList;