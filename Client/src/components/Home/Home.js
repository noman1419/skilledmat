import React from 'react'
import PostStory from './HomeComponents/PostStory/PostStory'
import Stories from './HomeComponents/Stories/Stories'
const Home = () => {

    return (
        <div style={{
            padding: "10px", maxWidth: "800px", margin: "auto", marginTop: "10px", background: "white", marginBottom: "20px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}>
            <PostStory />
            <h1>{ }</h1>
            <Stories />
        </div>
    )
}

export default Home