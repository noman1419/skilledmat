import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    portfolioRoot: {
        maxWidth: "1000px",
        background: "white",
        margin: "auto",
        height: "100vh",
        marginTop: "10px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    portfolioHeading: {
        fontSize: "20px",
        textAlign: "center",
    },
    portfolioInputsDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
    },
    portfolioInputs: {
        width: "40%",
        padding: "10px",
        borderRadius: "5px",
        margin: "0 10px",
        outline: "none"
    },
    createPortfolioBtn: {
        width: "80%",
        padding: "10px",
        borderRadius: "5px",
        margin: "0 10px",
        cursor: "pointer",
    }
}))

export default useStyles;