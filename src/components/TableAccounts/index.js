import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import React from "react";
import { InputContext, OutputContext } from "../../providers/accounts"
import { useStyles } from "./styles";


export const TableAccounts = () => {
    const { input } = React.useContext(InputContext)
    const { output } = React.useContext(OutputContext)
    const classes = useStyles()
    let inp = 0
    let out = 0
    return (
        <TableContainer>
         <Table className={classes.table}>
             <TableHead className={classes.tableHeadInput}>
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
                    <TableCell rowSpan={3} />
                     <TableCell rowSpan={2}>Total</TableCell>
                     <TableCell >{inp = input.reduce((accum, input) => {
                         return accum += parseInt(input.value)
                     }, 0)}</TableCell>
                 </TableRow>
                 
                 
             </TableBody>
             <TableHead className={classes.tableHeadOutput}>
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
                    <TableCell rowSpan={3} />
                     <TableCell rowSpan={2}>Total</TableCell>
                     <TableCell >{out = output.reduce((accum, output) => {
                         return accum += parseInt(output.value)
                     }, 0)}</TableCell>
                 </TableRow>
                 
                 
             </TableBody>
             <TableHead>
                 <TableRow>
                 <TableCell rowSpan={2} />
                     <TableCell colSpan={1}>Total Geral</TableCell>
                  
                     <TableCell >{ inp - out }</TableCell>
                 </TableRow>
             </TableHead>
         </Table>       
     </TableContainer>
    )
}