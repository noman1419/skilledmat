import React, { useState, useEffect } from 'react'
import useStyles from './Style'
import axios from 'axios';
import reactHtmlParser from 'react-html-parser'
const Jobs = () => {
    const classes = useStyles();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.post(`${process.env.REACT_APP_DOMAIN}/displayjobs`).then((res) => {
            setData(res.data.jobs)
            console.log(res.data);
        }).catch(() => {
            console.log("some response problem");
        })
    }, [])
    return (
        <div className={classes.jobsRoot}>
            {

                data.sort().map((val) => {
                    return (<div style={{ border: "solid lightGray 1px", padding: "20px", margin: "10px" }}>
                        {reactHtmlParser(val.job)}
                        <button style={{
                            border: "none",
                            background: "#5830E0",
                            color: "white",
                            padding: "10px 25px 10px 25px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}>Apply Now</button><br /><br />
                        <span style={{ marginTop: "20px", fontSize: "13px" }}>uploaded on : {
                            val.data.slice(0, 10)
                        }</span>
                    </div>)
                })
            }

        </div>
    )
}

export default Jobs