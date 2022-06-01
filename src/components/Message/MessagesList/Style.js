import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    messageListHeading: {
        textAlign: "center",
        width: "100%",
        fontSize: "30px",
        color: "#5830e0",
        fontWeight: "bold",
        marginBottom: "20px"
    },
    messageListSingleUnit: {
        background: "#5830e0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "5px",
        borderRadius: "5px",
        color: "white",
        margin: "5px",
        cursor: "pointer",
    },
    messageListUserImage: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
    },
    messageListUserLastMessageDate: {
        marginLeft: "auto"
    },
    messageListUserName: {
        marginRight: "10px",
    }
}))

export default useStyle;