import React, { useEffect, useState } from 'react'
import CreatePortfolio from './CreatePortfolio/CreatePortfolio'
import MyPortfolio from './MyPortfolio/MyPortfolio'
import { useCookies } from 'react-cookie'
import axios from 'axios'
const Portfolio = () => {
    const [val, setVal] = useState()
    const [cookies] = useCookies();
    const [data, setData] = useState({});
    const token = cookies.JWT
    useEffect(() => {
        axios.get('http://localhost:5000/myportfolio', {
            headers: {
                token
            }
        }).then((res) => { setVal(true); setData(res.data.message); console.log(res.data.message) }).catch(() => { setVal(false); console.log("does not exist") })
    }, [])
    const { firstName, lastName } = data;
    console.log(firstName)
    return (
        <div>
            {val ? <MyPortfolio value={data} /> : <CreatePortfolio />}
        </div>
    )
}

export default Portfolio