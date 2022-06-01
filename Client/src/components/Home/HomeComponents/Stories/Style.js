import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({
    storyRoot: {

    },
    singleStory: {
        boxShadow: "#EAEAEA 0px 0px 0px 3px",
        marginTop: "15px",
        borderRadius: "7px",
        padding: "10px"
    },
    profileImage: {
        height: "50%",
        width: "50px",
        borderRadius: "50%",
    },
    storyHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "solid #EAEAEA 1px",
        paddingBottom: "10px",
    },
    storyUser: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "10px"
    },
    storyDescription: {
        marginTop: "10px",
    }
}))
export default useStyle;