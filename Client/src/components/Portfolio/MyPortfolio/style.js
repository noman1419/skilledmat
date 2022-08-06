import { makeStyles } from "@material-ui/core";
import dummyImage from './Assets/four.jfif'
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
    },

    previousProjetImgDiv: {
        width: "170px", borderRadius: "5px", height: "170px", margin: "5px", cursor: "pointer", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
    },
    previousProjetImgDivLink: {
        textDecoration: "none",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        visibility: "none",
        justifyContent: "center",
        alignItems: "center",
        color: "transparent",
        transition: "0.5s",
        borderRadius: "5px",
        "&:hover": {
            opacity: "70%",
            background: "#FFA500",
            color: "white"
        }
    }
}))

export default useStyles;