import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    postStoryRoot: {
        display: "flex",
        flexDirection: "column",
        border: "solid gray 1px",
        borderRadius: "5px",
        padding: "10px",
    },
    postStoryTextarea: {
        border: "none",
        outline: "none",
        marginBottom: "30px",
        fontSize: "15px"
    },
    postStoryBtn: {
        border: "none",
        color: "white",
        background: "#5830E0",
        cursor: "pointer",
        padding: "10px",
        marginTop: "30px",
        borderRadius: "4px",
        fontSize: "18px"
    },
    uploadPageHeroBtn: {
        backgroundColor: "transparent",
        border: "solid gray 2px",
        color: "gray",
        padding: "15px 27px 15px 27px",
        cursor: "pointer",
        fontSize: "30px",
        marginBottom: "70px",
    }
}))

export default useStyle;