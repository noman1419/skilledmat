import React from 'react'
import useStyles from './style'
import { Grid } from '@material-ui/core'
import PortfolioHeroImage from '../Assets/profile.png';
import { ArrowForward } from '@material-ui/icons';
import PrevProject1 from './Assets/one.jfif'
import PrevProject2 from './Assets/two.jfif'
import PrevProject3 from './Assets/three.jfif'
import PrevProject4 from './Assets/four.jfif'
import { Link } from 'react-router-dom';
import { Person } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { Email } from '@material-ui/icons';
import { Public } from '@material-ui/icons';
import { LocationCity } from '@material-ui/icons';
import { Flag } from '@material-ui/icons';
import PersnalInfoHero from '../persnalInfoImage.jpg'
import SkillsHero from './Assets/SkillsHero.png';
import { Code } from '@material-ui/icons';
const MyPortfolio = (props) => {
    const firstName = props.value.firstName;
    const lastName = props.value.lastName;
    const classes = useStyles()
    return (<div className={classes.myPortflioRoot}>
        <Grid container xs={12} className={classes.myPortfolioHeroRoot} style={{ border: "solid blue 3px" }}>
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
                <span style={{ color: "white", background: "#5830E0", textAlign: "center", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "Center", marginTop: "20px" }}><span style={{ textTransform: "capitalize" }}>More About {props.value.firstName}</span><ArrowForward style={{ marginLeft: "10px" }} /></span>
            </Grid>
        </Grid>
        <Grid container style={{ marginTop: "100px", border: "solid blue 3px" }}>
            <Grid container item xs={6} style={{ padding: "20px" }} spacing={2}>
                <Grid item xs={12} style={{ borderBottom: "solid blue 3px" }}>
                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>Persnal Information</span>
                </Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Person style={{ color: "blue", marginRight: "10px" }} /> <span>Full Name:</span></Grid>
                <Grid item xs={6} >{firstName + " " + lastName}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Person style={{ color: "blue", marginRight: "10px" }} /><span> Father Name:</span></Grid>
                <Grid item xs={6}>{props.value.fatherName}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Phone style={{ color: "blue", marginRight: "10px" }} /><span> Phone:</span></Grid>
                <Grid item xs={6}>{props.value.phoneNumber}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Email style={{ color: "blue", marginRight: "10px" }} /><span> Email Address:</span></Grid>
                <Grid item xs={6}>{props.value.email}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Flag style={{ color: "blue", marginRight: "10px" }} /><span> Country:</span></Grid>
                <Grid item xs={6}>{props.value.country}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Public style={{ color: "blue", marginRight: "10px" }} /><span> State:</span></Grid>
                <Grid item xs={6}>{props.value.state}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><LocationCity style={{ color: "blue", marginRight: "10px" }} /><span> City:</span></Grid>
                <Grid item xs={6}>{props.value.city}</Grid>
                <Grid item xs={6} style={{ fontWeight: "600", display: "flex", flexDirection: "row", alignItems: "center" }}><Code style={{ color: "blue", marginRight: "10px" }} /><span> Postal Code:</span></Grid>
                <Grid item xs={6}>{props.value.postalCode}</Grid>
            </Grid>
            <Grid item xs={6} style={{ border: "solid green 1px", backgroundImage: `url(${PersnalInfoHero})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            </Grid>
        </Grid>
        <div className={classes.previousProjectRootDiv} style={{ border: "solid blue 3px", marginTop: "100px" }}>
            <Grid container style={{}}>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", padding: "60px", }}>
                    <span style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "10px" }}>Previous Projects</span>
                    <span>
                        You are free to judge me on what I have done previously, My previous projects show my compitance and provides you the reason to trust me or not.
                    </span>
                    <span style={{ color: "white", background: "#FFA500", textAlign: "center", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "Center", marginTop: "20px" }}><span style={{ textTransform: "capitalize" }}>My Projects</span><ArrowForward style={{ marginLeft: "10px" }} /></span>

                </Grid>
                <Grid container item xs={12} sm={6} style={{ display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", padding: "30px", }}>
                    <div className={classes.previousProjetImgDiv} style={{ backgroundImage: `url(${PrevProject1})`, }}>
                        <Link className={classes.previousProjetImgDivLink} to="/skilledMat" style={{
                        }}>SkilledMat.com</Link>
                    </div>
                    <div className={classes.previousProjetImgDiv} style={{ backgroundImage: `url(${PrevProject2})`, }}>
                        <Link className={classes.previousProjetImgDivLink} to="/skilledMat" style={{
                        }}>example.com</Link>
                    </div>
                    <div className={classes.previousProjetImgDiv} style={{ backgroundImage: `url(${PrevProject3})`, }}>
                        <Link className={classes.previousProjetImgDivLink} to="/skilledMat" style={{
                        }}>myPortFolio.com</Link>
                    </div>
                    <div className={classes.previousProjetImgDiv} style={{ backgroundImage: `url(${PrevProject4})`, }}>
                        <Link className={classes.previousProjetImgDivLink} to="/skilledMat" style={{
                        }}>projectsHubOfmine.com</Link>
                    </div>
                </Grid>

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