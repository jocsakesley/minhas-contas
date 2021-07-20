import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@material-ui/core"
import React from "react";
import { InputContext, OutputContext } from "../../providers/accounts"


const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(10),
        borderColor: theme.palette.primary
    },
    tableHead: {
        borderBottom:"5px solid #1194a8", 
        color:"#1194a8"
    }

}))

export const TableAccounts = () => {
    const { input } = React.useContext(InputContext)
    const { output } = React.useContext(OutputContext)
    const classes = useStyles()

    return (
        <>
        <TableContainer>
            <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                    <TableRow >
                        <TableCell style={{color:"#1194a8"}}>Entradas</TableCell>
                        <TableCell style={{color:"#1194a8"}}>Data</TableCell>
                        <TableCell style={{color:"#1194a8"}}>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {input.map(i => {
                        return (
                        <TableRow>
                        
                            <TableCell style={{color:"#1194a8"}}>{i.nameAccount}</TableCell>
                            <TableCell style={{color:"#1194a8"}}>{i.date}</TableCell>
                            <TableCell style={{color:"#1194a8"}}>{i.value}</TableCell>
                       
                        </TableRow>
                    )})}
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell >{input.reduce((accum, v) => {
                        
                        return accum += parseInt(v.value)
                        
                    }, 0)}</TableCell>
                    </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>
         <TableContainer>
         <Table margin="normal">
             <TableHead style={{borderBottom:"5px solid #F0584A", color:"#F0584A"}}>
                 <TableRow >
                     <TableCell style={{color:"#F0584A"}}>Saídas</TableCell>
                     <TableCell style={{color:"#F0584A"}}>Data</TableCell>
                     <TableCell style={{color:"#F0584A"}}>Valor</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>

                 {output.map(o => {
                     return (
                     <TableRow>
                     
                         <TableCell style={{color:"#F0584A"}}>{o.nameAccount}</TableCell>
                         <TableCell style={{color:"#F0584A"}}>{o.date}</TableCell>
                         <TableCell style={{color:"#F0584A"}}>{o.value}</TableCell>
                    
                     </TableRow>
                 )})}
                 <TableRow>
                     <TableCell colSpan={2}>Total</TableCell>
                     <TableCell >{output.reduce((accum, output) => {
                        
                         return accum += parseInt(output.value)
                     }, 0)}</TableCell>
                 </TableRow>
                 
             </TableBody>
         </Table>
     </TableContainer>
     </>

    )
}