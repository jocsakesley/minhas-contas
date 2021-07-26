import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles(theme => ({
    textField: {
        marginTop: theme.spacing(4),
        width: "100%"
    },
    buttonField: {
        marginTop: theme.spacing(1),
        width: "100%",
        height: "50px",
        backgroundColor: '#1194a8',
        color: "aliceblue",
        "&:hover": {
            backgroundColor: '#0e6e7d'
        }
    }
    
}));