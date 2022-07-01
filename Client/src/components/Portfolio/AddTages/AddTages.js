import React, { useState } from 'react'
import useStyles from './Style'
const AddTages = (prop) => {


    const classes = useStyles();
    const [tags, setTags] = useState([])
    const handleChange = (e) => {
        if (e.key !== ',') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if (!value.trim()) return
        // Add the value to the tags array
        setTags([...tags, value])
        // Clear the input
        e.target.value = ''
    }
    const removeTag = (index) => {
        setTags(tags.filter((pn, val) => {
            return val !== index;
        }))
    }
    return (
        <div className={classes.addTageRoot}>
            <span>Skills:</span>
            <div className={classes.addTageRootInput}>
                {
                    tags.map((val, index) => {
                        return (
                            <span key={index} style={{ background: "green", color: "white", borderRadius: "2px", padding: "2px 10px", margin: "5px", display: "flex", flexDirection: "row", }}><span>{val}</span><span style={{ marginLeft: "17px", fontWeight: "bold" }} onClick={() => { removeTag(index) }}>x</span></span>
                        )
                    })
                }
                <input type="text" className={classes.theRealInput} onKeyDown={handleChange} placeholder='Add Skills .....' />
            </div>
        </div>
    )
}

export default AddTages