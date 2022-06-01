import React from 'react'
import useStyle from './Style'
const PostStory = () => {
    const classes = useStyle();
    return (
        <div className={classes.postStoryRoot}>
            <textarea className={classes.postStoryTextarea} rows="5" placeholder='post your story' />
            <div >
                <label className={classes.uploadPageHeroBtn}>+
                    <input style={{ display: "none" }} type="file" />
                </label>
            </div>
            <button className={classes.postStoryBtn}>Post</button>
        </div>
    )
}

export default PostStory