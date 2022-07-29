import { makeStyles } from "@material-ui/core";
import dummyImage from './Assets/dummy-person-01.png'
const useStyle = makeStyles(theme => ({
    profileRoot: {
        maxWidth: "1000px",
        background: "white",
        margin: "auto",
        height: "100vh",
        marginTop: "10px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    profilePictureDiv: {
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "0.3s",
        border: "solid gray 1px",
        "&:hover": {
            backgroundImage: `linear-gradient(to right, rgba(50, 70, 80, 0.7), rgba(30, 20, 150, 0.7)),url(${dummyImage})`,
        }
    },
    profileImg: {
        cursor: "pointer",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        fontWeight: "bold",
        color: "transparent",
        borderRadius: "50%",
        transition: "0.3s",
        "&:hover": {
            "&:hover": {
                backgroundImage: `linear-gradient(to right, rgba(50, 70, 80, 0.7), rgba(30, 20, 150, 0.7)),url(http://localhost:5000/uploads/${dummyImage})`,
            },
            color: "#D3D3D3",
        }
    },
    profileHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid gray 1px",
        paddingBottom: "10px",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        },
    },
    nameUsernameRoot: {
        display: "flex",
        flexDirection: "column",
        lineHeight: "190%",
        marginLeft: "30px"
    },
    profileUserName: {
        fontSize: "35px",
        fontWeight: "bold",
    },
    profileMessageBtn: {
        background: "#5830E0",
        padding: "5px 35px 5px 35px",
        border: "none",
        color: "white",
        cursor: "pointer"
    },
    profileFollowBtn: {
        background: "#5830E0",
        padding: "5px 35px 5px 35px",
        border: "none",
        color: "white",
        cursor: "pointer",
        marginLeft: "10px",
    },
    profileHeaderBtnRoot: {
        marginTop: "20px"
    },
    editPopupModulComponentRoot: {
        padding: "20px", borderRadius: "10px", width: "90%", background: "white", position: "absolute", display: "flex", justifyContent: "center", border: "solid gray 1px", margin: "center"
    }
}))
export default useStyle;