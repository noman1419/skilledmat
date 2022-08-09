import React, { useState } from 'react'
import useStyles from './Style'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Search = (props) => {
    const classes = useStyles();
    const [search, setSearch] = useState({
        name: "",
        email: "",
        city: "",
        field: "",
    });
    const [loader, setLoader] = useState()
    const textTransform = {
        textTransform: "capatalize"
    }
    const [data, setData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }
    const submitData = async (e) => {
        setLoader("searching...")
        e.preventDefault();
        console.log(search);
        await axios.post(`${process.env.REACT_APP_DOMAIN}/search`, search).then((res) => { setData(res.data.data); setLoader(''); console.log(res.data.data); }).catch(() => { console.log("did not get proper response") })
    }

    async function sendIdOfUser(id) {
        props.cb(id)
        // console.log("id i am foing to send", id);
        // const data = {
        //     user_id: id
        // }
        // await axios.post(`${process.env.REACT_APP_DOMAIN}/userprofile`, data).then((res) => { console.log(res.data.res); });
    }
    return (
        <div className={classes.searchRoot}>
            <form className={classes.searchBoxRoot} >
                <input className={classes.searchInput} type="text" style={textTransform} name="name" value={search.name} onChange={handleChange} placeholder="Enter Name" />
                <input className={classes.searchInput} type="text" name="email" value={search.email} onChange={handleChange} placeholder="Enter Email" />
                <input className={classes.searchInput} type="text" name="city" value={search.city} onChange={handleChange} placeholder="Enter City" />
                <input className={classes.searchInput} type="text" name="field" value={search.field} onChange={handleChange} placeholder="Enter Field" />
                <input className={classes.searchInputBtn} type="submit" value="search" onClick={submitData} />
            </form>
            <div>
                <div style={{ textAlign: "center" }}><h1>{loader}</h1></div>
                {
                    data.map((value) => {
                        const image = `${process.env.REACT_APP_DOMAIN}/uploads/${value.image}`
                        return (
                            <Link to={`/home/userprofile`} style={{ textDecoration: "none", color: "black" }}>
                                <div onClick={() => { sendIdOfUser(value._id) }} style={{ border: "solid green 1px", display: "flex", flexDirection: "row", alignItems: "center", padding: "10px", borderRadius: "5px" }}>
                                    <img src={image} style={{ width: "50px", height: "50px", borderRadius: "50%", }} />
                                    <span style={{ marginLeft: "15px" }}>{value.name}</span>
                                    <span style={{ marginLeft: "auto", marginRight: "10px" }}>follow</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Search