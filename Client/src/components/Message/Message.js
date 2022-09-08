import React from 'react'
import MessagesList from './MessagesList/MessagesList';
import useStyle from './Style'
const Message = () => {
    const classes = useStyle();

    const callback = (e) => {
        alert(e)
    }
    return (
        <div className={classes.messageRoot}>
            <MessagesList callback={(e) => { callback(e) }} />
        </div>
    )
}

export default Message