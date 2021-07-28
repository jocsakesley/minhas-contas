import { makeStyles } from "@material-ui/core";



export const useStyles = makeStyles(theme => ({
    linksContainer: {
        display: "flex",
        justifyContent: "space-between" ,
        alignItems: "center",
        marginTop: "5%",
        padding: "2%"

    },
    link: {
        textDecoration:"none",
        fontStyle: "bolder",
        color: "#1194a8",
        "&:hover": {
            color: "#0e6e7d"
        }

    } 

}))