import React, { useState, useEffect } from 'react'
import useStyles from './Style';
import axios from 'axios'
import { useCookies } from 'react-cookie'
import AddTages from './AddTages/AddTages';
const Portfolio = () => {
    const classes = useStyles();
    const [cookies] = useCookies();
    const [skills, setSkills] = useState([])

    console.log(skills);
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        phoneNumber: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        field: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const callback = (tags) => {
        setSkills(tags)
        alert(tags);
    }
    const Data = {
        data: values,
        token: cookies.JWT,
        skills
    }
    const submitData = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/portfolio', Data).then(() => { console.log("request is successfull") }).catch(() => { console.log("request not successfull"); })
    }

    return (
        <div className={classes.portfolioRoot}>
            <h1 className={classes.portfolioHeading}>Crate Portfolio</h1>
            <form onSubmit={submitData}>
                <div>
                    <span>Persnal Information</span>
                    <div className={classes.portfolioInputsDiv}>
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='firstName'
                            placeholder="First Name"
                            onChange={handleChange}
                            value={values.firstName}
                        />
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='lastName'
                            placeholder="Last Name"
                            onChange={handleChange}
                            value={values.lastName}
                        />
                    </div>
                    <div className={classes.portfolioInputsDiv}>
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='fatherName'
                            placeholder="Father Name"
                            onChange={handleChange}
                            value={values.fatherName}
                        />
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='phoneNumber'
                            placeholder="Phone Number"
                            onChange={handleChange}
                            value={values.phoneNumber}
                        />
                    </div>
                    <div className={classes.portfolioInputsDiv}>
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='email'
                            placeholder="email"
                            onChange={handleChange}
                            value={values.email}
                        />
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='field'
                            placeholder="field of profession"
                            onChange={handleChange}
                            value={values.field}
                        />
                    </div>
                    <div className={classes.portfolioInputsDiv}>
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='country'
                            placeholder="Country"
                            onChange={handleChange}
                            value={values.country}
                        />
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name="state"
                            placeholder="State"
                            onChange={handleChange}
                            value={values.state}
                        />
                    </div>
                    <div className={classes.portfolioInputsDiv}>
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='city'
                            placeholder="city"
                            onChange={handleChange}
                            value={values.city}
                        />
                        <input
                            type="text"
                            className={classes.portfolioInputs}
                            name='postalCode'
                            placeholder="Postel Code"
                            onChange={handleChange}
                            value={values.postalCode}
                        />
                    </div>
                </div>
                <AddTages parentCallBack={callback} />
                <div className={classes.portfolioInputsDiv}>
                    <button className={classes.createPortfolioBtn}>Create portfolio</button>
                </div>
            </form>
        </div>
    )
}

export default Portfolio;