import React from 'react'
import MessagesList from './MessagesList/MessagesList';
import useStyle from './Style'
const Message = () => {
    const classes = useStyle();
    return (
        <div className={classes.messageRoot}>
            <MessagesList />
        </div>
    )
}

export default Message