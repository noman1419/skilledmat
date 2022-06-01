import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    inboxRoot: {
        maxWidth: "1000px",
        background: "white",
        margin: "auto",
        position: "relative",
        marginTop: "10px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    inboxUserImage: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
    },
    inboxHeader: {
        background: "#5830e0",
        padding: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "white",
    },
    inboxUserName: {
        marginLeft: "20px",
        fontSize: "20px",
        fontWeight: "600",
    },
    inboxMessagesRoot: {
        padding: "10px",
        marginBottom: "10px",
    }
}))

export default useStyle;