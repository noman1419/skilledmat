import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    portfolioRoot: {
        maxWidth: "1000px",
        marginTop: "10px",
        background: "white",
        margin: "auto",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        paddingBottom: "200px"
    },
    portfolioHeading: {
        fontSize: "20px",
        textAlign: "center",
        marginBottom: "80px",
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
        outline: "none",
        border: "none",
        border: "solid black 1px",

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