import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    outeRoot: {
        // background: "white",
        background: "white",
        fontFamily: "'Jost', sans-serif",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        padding: "0 20px",
    },
    navRoot: {
        color: "black",
        display: "flex",
        alignItems: "center",
        margin: "auto",
    },
    downNav: {
        fontFamily: "'Jost', sans-serif",
        [theme.breakpoints.up("lg")]: {
            display: "none",
        }
    },
    naveLogoName: {
        flex: 1,
        // marginLeft: "60px",
        color: "#5830E0",
        textDecoration: "none",

        [theme.breakpoints.down("md")]: {
            padding: "30px 0 30px 0",
        },
    },
    naveManue: {
        display: "flex",
        listStyle: "none",
        flex: 1,

        [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
            display: "none",
        }
    },
    downNavManue: {
        background: "white", listStyle: "none",
    },
    navManueItem: {
        marginRight: "40px",
        borderBottom: "solid transparent 5px",
        padding: "30px 0 25px 0",
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        fontWeight: "400",
        "&:hover": {
            borderBottom: "solid #5830E0 5px",
            transition: ".3s",
        },
        "&:focus": {
            borderBottom: "solid #5830E0 5px",
            color: "#5830E0",

        },
    },
    downNavItemBackground: {
        padding: "10px",
        "&:hover": {
            backgroundColor: "#F8F8F8",
            transition: ".3s",
        },
    },
    downNavManueItem: {
        cursor: "pointer",
        textDecoration: "none",
        color: "black",
        fontWeight: "400",
        "&:focus": {
            color: "#5830E0",
            background: "#F8F8F8",
        },
    },
    logReg: {
        display: "flex",
        // marginRight: "60px",
        fontWeight: "400",

        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },

    logRegItem: {
        marginRight: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            color: "#5830E0",
        }
    },
    accountRoot: {
        display: "flex",
        flexDirection: "column",
        border: "solid gray 0.12em",
        position: "relative",
        marginRight: "30px",
        padding: "5px 15px 5px 15px",
        borderRadius: "20px",
        cursor: "pointer",
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    accountDropdownItems: {
        listStyle: "none",
        position: "absolute",
        width: "100%",
        borderRadius: "5px",
        top: "100%",
        marginTop: "10px",
        textAlign: "center",
        right: "0%",
        background: "white",
        border: "solid gray 0.12em",
    },
    accountDropdownItem: {
        cursor: "pointer",
        padding: "5px",
        "&:hover": {
            background: "#D5D5D5",
        }
    },
    downLogRegItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",
        marginLeft: "10px",
        padding: "10px 0 15px 0",
        "&:hover": {
            color: "#5830E0",
        },
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    navIcon: {
        color: "#5830E0",
        marginRight: "10px",
    },
    navBtn: {
        border: "none",
        background: "#5830E0",
        color: "white",
        padding: "10px 25px 10px 25px",
        fontWeight: "600",
        cursor: "pointer",

        "&:hover": {
            background: "black",
            transition: ".7s",
        },

        [theme.breakpoints.down("md")]: {
            padding: "15px 22px 15px 22px",
        },
        [theme.breakpoints.down("sm")]: {

        },
    },
    navBtnInterview: {
        background: "#5830E0",
        padding: "5px 30px 5px 30px",
        border: "none",
        color: "white",
        marginLeft: "10px",
        cursor: "pointer"

    },
    navBtnProtfolio: {
        background: "orange",
        padding: "5px 30px 5px 30px",
        border: "none",
        color: "white",
        marginLeft: "10px",
        cursor: "pointer"
    },
    navToggle: {
        fontSize: "35px",
        // marginRight: "100px",
        display: "none",
        // flex: 1,
        borderRadius: "50px",
        width: "50px",
        height: "50px",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "block",
            marginTop: "5px",
            marginRight: "30px",
        },
        [theme.breakpoints.down("xs")]: {
            display: "block",
            marginTop: "5px",
            marginRight: "0px",
        },
        "&:after": {
            background: "#D9D9D9",
        },
    }
}))

export default useStyle;