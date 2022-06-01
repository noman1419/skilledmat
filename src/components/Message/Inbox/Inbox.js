import React from 'react'
import useStyle from './Style'
import UserImage from '../../Message/MessagesList/Assets/img1.png'
import SendMessage from './SendMessage/SendMessage'
import Data from './InboxApi'
const Inbox = () => {
    const classes = useStyle()
    return (
        <div className={classes.inboxRoot}>
            <div className={classes.inboxHeader}>
                <img className={classes.inboxUserImage} src={UserImage} alt="user image" />
                <span className={classes.inboxUserName}>Hamza Faham</span>
            </div>
            <div className={classes.inboxMessagesRoot}>
                {
                    Data.map((val) => {
                        return (<>
                            {
                                val.textId == 1 ?
                                    <div style={{ background: "lightBlue", width: "60%", marginTop: "5px", borderRadius: "10px", }} >
                                        <p style={{ padding: "5px" }}>{val.message}</p>
                                        <div style={{ textAlign: "end", marginRight: "10px" }}>{val.time}</div>
                                    </div> :
                                    <div style={{ width: "60%", background: "#FFCB6A", marginTop: "5px", padding: "5px", borderRadius: "10px", marginLeft: "auto" }}>
                                        <p style={{ marginLeft: "auto" }}>{val.message}</p>
                                        <div style={{ textAlign: "end", marginRight: "10px", marginTop: "5px" }}>{val.time}</div>
                                    </div>
                            }
                        </>)
                    })
                }
            </div>
            <SendMessage />
        </div>
    )
}

export default Inbox