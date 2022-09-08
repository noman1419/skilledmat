import React, { useState, useEffect } from 'react'
import useStyle from './Style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client'
import { useContext } from 'react';
import { chatContext } from '../../../Context';

const socket = io.connect("http://localhost:5000");

const MessagesList = () => {
    const { setID, setName } = useContext(chatContext);
    const [data, setData] = useState([]);
    const joinRoom = (val) => {
        socket.emit('joinRoom', { data: val })
    }
    const classes = useStyle();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_DOMAIN}/messagelist`).then((res) => { setData(res.data.data); console.log(res.data.data); })
    }, [])
    return (
        <div>
            <div className={classes.messageListHeading}>Messages</div>
            <div>
                {
                    data.map((val) => {
                        return (<>
                            <Link to="/home/inbox" onClick={() => { joinRoom(val._id); setID(val._id); setName(val.name) }}>
                                <div className={classes.messageListSingleUnit}>
                                    <img className={classes.messageListUserImage} src={`${process.env.REACT_APP_DOMAIN}/uploads/${val.image}`} alt="user image" />
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