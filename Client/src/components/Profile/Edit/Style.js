import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(thene => ({
    EditUserFormRoot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    editUserInput: {
        maxWidth: "400px",
        minWidth: "80%",
        padding: "5px",
        marginTop: "10px",
    }
}))

export default useStyles;