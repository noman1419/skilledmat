import React, { useEffect, useState } from 'react'
import CreatePortfolio from './CreatePortfolio/CreatePortfolio'
import MyPortfolio from './MyPortfolio/MyPortfolio'
import { useCookies } from 'react-cookie'
import axios from 'axios'
const Portfolio = () => {
    const [val, setVal] = useState()
    const [cookies] = useCookies();
    const token = cookies.JWT
    useEffect(() => {
        axios.get('http://localhost:5000/myportfolio', {
            headers: {
                token
            }
        }).then(() => { setVal(true) }).catch(() => { setVal(false) })
    }, [])

    return (
        <div>
            {val ? <MyPortfolio /> : <CreatePortfolio />}
        </div>
    )
}

export default Portfolio