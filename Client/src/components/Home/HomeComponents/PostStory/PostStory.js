import React, { useState } from 'react'
import useStyle from './Style';
import axios from 'axios';
const PostStory = () => {
    const classes = useStyle();
    const [allow, setAllow] = useState(false);
    const [storyText, setStoryText] = useState()
    const [img, setImg] = useState();
    const handleImage = (e) => {
        setImg(e.target.files[0])
    }
    const handleText = (e) => {
        setStoryText(e.target.value)
    }
    console.log(img);
    const submitData = async () => {
        const image = img;
        const data = new FormData();
        data.append('image', image);
        data.append('text', storyText)
        await axios.post(`${process.env.REACT_APP_DOMAIN}/poststory`, data, {
            headers: {
                text: storyText,
            }
        })
    }

    return (
        <form className={classes.postStoryRoot}>
            <textarea
                className={classes.postStoryTextarea}
                rows="5"
                value={storyText}
                placeholder='post your story'
                onChange={handleText}
            />
            <div >
                <label className={classes.uploadPageHeroBtn}>+
                    <input
                        style={{ display: "none" }}
                        type="file"
                        name="image"
                        onChange={handleImage}
                    />
                </label>
            </div>
            <button
                onClick={submitData}
                className={classes.postStoryBtn}>Post</button>
        </form>
    )
}

export default PostStory