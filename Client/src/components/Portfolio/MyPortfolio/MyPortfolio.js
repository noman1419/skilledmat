import React from 'react'
import useStyles from './style'
import { Grid } from '@material-ui/core'
import PortfolioHeroImage from '../Assets/profile.png';
import { ArrowForward } from '@material-ui/icons';
const MyPortfolio = (props) => {
    const firstName = props.value.firstName;
    const lastName = props.value.lastName;
    const classes = useStyles()
    return (<div className={classes.myPortflioRoot}>
        <Grid container xs={12} className={classes.myPortfolioHeroRoot}>
            <Grid item xs={6} className={classes.myPortfolioHeroImageRoot}
                style={{ background: `url(${PortfolioHeroImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
            ></Grid>
            <Grid item xs={6} style={{ display: "flex", flexDirection: "column", padding: "20px", justifyContent: "center", alignItems: "flex-start" }}>
                <span style={{ fontSize: "25px", fontWeight: "bold" }}>HI THERE</span>
                <span style={{ fontSize: "30px", fontWeight: "bold" }}>I'M <span style={{ color: "#5830E0", textTransform: "uppercase", }}>{firstName + " " + lastName}</span></span>
                <span style={{ fontSize: "12px", background: "#FFA500", color: "white", padding: " 0 5px", textTransform: "uppercase", }}>{props.value.field}</span>
                <p style={{}}>
                    Hi, I am a University Graduated Software Engineer and a professionally trained Freelancer.
                    I am working from Past 2 Years as a freelancer on different platforms like fiverr.com,
                    freelancer.com and upwork.com
                </p>
                <span style={{ color: "white", background: "#5830E0", textAlign: "center", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "Center", marginTop: "20px" }}><span style={{ textTransform: "capitalize" }}>Contact {props.value.firstName}</span><ArrowForward style={{ marginLeft: "10px" }} /></span>
            </Grid>
        </Grid>
        <div>
            <Grid container style={{ border: "solid green 1px", height: "80vh" }}>
                <Grid item xs={6} style={{ border: "solid green 1px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "30px", textAlign: "center" }}>
                    <span style={{ fontSize: "25px", fontWeight: "bold", }}>Previous Projects</span>
                    <span>
                        You are free to judge me on what I have done previously, My previous projects showa my compitance and provides you the reason to trust me.
                    </span>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
        </div>



        {/* <h1>{props.value.firstName + " " + props.value.lastName}</h1>
        <h2>{props.value.fatherName}</h2>
        <h2>{props.value.userName}</h2>
        <h2>{props.value.email}</h2>
        <h2>{props.value.city}</h2> */}
    </div>
    )
}

export default MyPortfolio