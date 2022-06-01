import React from 'react'
import useStyle from './Style'
const SendMessage = () => {
    const classes = useStyle();
    return (
        <div className={classes.sendMessageRoot}>
            <textarea className={classes.sendMessageTextarea} rows="5" placeholder='send message' />
            <div >
                <label className={classes.sendMessagePicUpload}>+
                    <input style={{ display: "none" }} type="file" />
                </label>
            </div>
            <button className={classes.sendMessageBtn}>Send Message</button>
        </div>
    )
}

export default SendMessage