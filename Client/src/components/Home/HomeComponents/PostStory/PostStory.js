import React, { useState } from 'react'
import useStyle from './Style';
import axios from 'axios';
import { useCookies } from 'react-cookie';
const PostStory = () => {
    const classes = useStyle();
    const [cookies] = useCookies();
    const [storyText, setStoryText] = useState()
    const [img, setImg] = useState('');
    const handleImage = (e) => {
        setImg(e.target.files)
    }
    const handleText = (e) => {
        setStoryText(e.target.value)
    }
    const submitData = async (e) => {

        const data = new FormData();

        for (let i = 0; i < img.length; i++) {
            console.log(img[i]);
            data.append('images', img[i])
        }
        data.append('text', storyText)
        data.append('user_token', cookies.JWT)
        await axios.post(`${process.env.REACT_APP_DOMAIN}/poststory`, data, {
            headers: {
                text: storyText,
            }
        }).then(() => {
            setImg([]);
            setStoryText('');
        })

    }

    return (
        <form className={classes.postStoryRoot} encType="multipart/form-data">
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
                        multiple
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