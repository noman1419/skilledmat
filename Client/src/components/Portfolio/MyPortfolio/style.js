import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    myPortflioRoot: {
        maxWidth: "1000px",
        margin: "auto",
        marginTop: "10px",
        background: "white",
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    myPortfolioHeroRoot: {
        height: "80vh",
    },
    myPortfolioHeroImageRoot: {
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
    }
}))

export default useStyles;