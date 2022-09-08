import React, { useState, useEffect } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'
import useStyles from './Style.js';
import reactHtmlParser from 'react-html-parser'
import { useCookies } from 'react-cookie';
const PostJob = (props) => {

    const classes = useStyles();
    const [cookies] = useCookies();
    const [value, setValue] = useState();
    const [data, setData] = useState();
    const handleValue = (e, editor) => {
        const jobDescription = editor.getData();
        setValue(jobDescription)
    }
    const handleSubmit = async () => {
        await axios.post(`${process.env.REACT_APP_DOMAIN}/postjob`, {
            data: {
                job: value
            },
            headers: {
                user_token: cookies.JWT,
            }
        })
    }
    // useEffect(() => {
    //     axios.post(`${process.env.REACT_APP_DOMAIN}/displayjobs`).then((res) => {
    //         setData(res.data.jobs)
    //         console.log(res.data);
    //     }).catch(() => {
    //         console.log("some response problem");
    //     })
    // }, [])
    return (
        <div className={classes.postJobRoot} style={{}}>
            <div>

            </div>
            <div style={{ textAlign: "center", marginBottom: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Post New Job</span>
                <span style={{ color: "gray", width: "70%" }}>Job Post should be well explained and everything you require for the position and skills in the employee that you are liiking for should be well described.</span>
            </div>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleValue}
            />
            <button onClick={handleSubmit} style={{ background: "lightgray", color: "black", fontWeight: "600", marginTop: "10px", border: "none", padding: "10px 40px" }}>Post Job</button>
            {/* <span>
                {
                    data.map((val) => {
                        return (<>
                            <div style={{ border: "solid lightGray 1px", padding: "20px", margin: "10px" }}>
                                {reactHtmlParser(val.job)}
                                <button style={{
                                    border: "none",
                                    background: "#5830E0",
                                    color: "white",
                                    padding: "10px 25px 10px 25px",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                }}>Apply Now</button>
                            </div>
                        </>)
                    })
                }
            </span> */}
        </div>
    )
}

export default PostJob