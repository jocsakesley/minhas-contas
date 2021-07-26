import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(10),
        borderColor: theme.palette.primary
    },
    tableHeadInput: {
        borderBottom:"5px solid #1194a8", 
        color:"#1194a8"
    },
    tableHeadOutput: {
        borderBottom:"5px solid #F0584A", 
        color:"#F0584A"
    },
    positive: {
        color:"#1194a8",
        fontStyle: "bolder",
        fontSize: "1rem"
    },
    negative: {
        color:"#F0584A",
        fontStyle: "bolder",
        fontSize: "1rem"
    }

}))