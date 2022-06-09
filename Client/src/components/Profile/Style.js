import { makeStyles } from "@material-ui/core";

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
    profilePicture: {
        maxWidth: "300px",
        maxHeight: "300px",
        borderRadius: "50%",
    },
    profileHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid gray 1px",

        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        }
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
    }
}))
export default useStyle;