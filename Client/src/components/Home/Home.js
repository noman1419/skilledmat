import React, { useEffect, useState } from 'react'
import PostStory from './HomeComponents/PostStory/PostStory'
import Stories from './HomeComponents/Stories/Stories'
import axios from 'axios'
import { useCookies } from 'react-cookie'
const Home = () => {
    const [value, setValue] = useState()
    const [cookies, setCookies] = useCookies();
    useEffect(() => {
        const data = {
            name: "hamza",
            age: "22"
        }
        axios.post('http://localhost:5000/home', cookies).then((res) => { console.log(res.data.message) }).catch(() => { console.log("error") })
    }, [])

    console.log(cookies.JWT, "hello")
    return (
        <div style={{
            padding: "10px", maxWidth: "1000px", margin: "auto", marginTop: "10px", background: "white", marginBottom: "20px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}>
            <PostStory />
            <h1>{ }</h1>
            <Stories />
        </div>
    )
}

export default Home