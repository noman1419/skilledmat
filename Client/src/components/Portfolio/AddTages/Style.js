import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    addTageRoot: {
        marginTop: "40px"
    },
    addTageRootInput: {
        border: "solid black 1px",
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        width: "85%",
        margin: "auto",
        borderRadius: "5px",
    },
    theRealInput: {
        border: "none",
        outline: "none",
    }
}))

export default useStyles