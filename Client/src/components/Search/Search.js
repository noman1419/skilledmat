import React from 'react'
import useStyles from './Style'
const Search = () => {
    const classes = useStyles()
    return (
        <div className={classes.searchRoot}>
            <div className={classes.searchBoxRoot}>
                <input className={classes.searchInput} type="text" placeholder="Enter Name" />
                <input className={classes.searchInput} type="text" placeholder="Enter Email" />
                <input className={classes.searchInput} type="text" placeholder="Enter City" />
                <input className={classes.searchInput} type="text" placeholder="Enter Field" />
                <input className={classes.searchInputBtn} type="submit" value="search" />
            </div>
        </div>
    )
}

export default Search