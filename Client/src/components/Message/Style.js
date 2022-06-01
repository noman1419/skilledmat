import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    messageRoot: {
        maxWidth: "1000px",
        background: "white",
        margin: "auto",
        height: "100vh",
        marginTop: "10px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    }
}))

export default useStyle;