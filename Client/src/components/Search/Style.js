import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    searchRoot: {
        padding: "10px",
        maxWidth: "1000px",
        margin: "auto",
        height: "100vh",
        marginTop: "10px",
        background: "white",
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    searchInput: {
        maxWidth: "300px",
        padding: "5px",
        outline: "none",
        borderRadius: "5px",
        margin: "5px",
        border: "none",
        border: "solid gray 1px",
        fontSize: "20px"
    },
    searchInputBtn: {
        padding: "5px",
        outline: "none",
        borderRadius: "5px",
        margin: "5px",
        border: "none",
        background: "blue",
        color: "white",
        width: "200px",
        fontSize: "20px"
    },
    searchBoxRoot: {

    }
}))

export default useStyles;

