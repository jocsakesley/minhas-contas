import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import React from "react";
import { DataContext } from "../../providers/accounts"
import { useStyles } from "./styles";
import { BillsService } from "../../services/api";


export const TableAccounts = () => {
    const { data } = React.useContext(DataContext)
    const classes = useStyles()
    let input = data.filter((d) => d.type_bill === "E")
    let output = data.filter((d) => d.type_bill === "S")
   
  
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
                     <TableRow key={i.id}>
                     
                         <TableCell style={{color:"#1194a8"}}>{i.name}</TableCell>
                         <TableCell style={{color:"#1194a8"}}>{i.date.split('-')[2] + '/' + i.date.split('-')[1] + '/' + i.date.split('-')[0]}</TableCell>
                         <TableCell style={{color:"#1194a8"}}>R$ {i.value}
                         <button onClick={async () => {
                             await BillsService.deleteBill(i.id)
                             }
                             } style={{backgroundColor: "#F0584A", color: "white", float: "right"}}>
                                 x
                        </button>
                        </TableCell>
                    
                     </TableRow>
                 )})}
                 <TableRow>
                    <TableCell rowSpan={3} />
                     <TableCell rowSpan={2} style={{color:"#1194a8"}}>Total</TableCell>
                     <TableCell style={{color:"#1194a8"}}>R$ {input = input.reduce((accum, input) => {
                         return accum += parseFloat(input.value)
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
                     <TableRow key={o.id}>
                     
                         <TableCell style={{color:"#F0584A"}}>{o.name}</TableCell>
                         <TableCell style={{color:"#F0584A"}}>{o.date.split('-')[2] + '/' + o.date.split('-')[1] + '/' + o.date.split('-')[0]}</TableCell>
                         <TableCell style={{color:"#F0584A"}}>R$ {o.value}
                         <button onClick={async () => {
                             await BillsService.deleteBill(o.id)
                             }
                             } style={{backgroundColor: "#F0584A", color: "white", float: "right"}}>
                                 x
                        </button>
                         </TableCell>
                    
                     </TableRow>
                 )})}
                 <TableRow>
                    <TableCell rowSpan={3} />
                     <TableCell rowSpan={2} style={{color:"#F0584A"}}>Total</TableCell>
                     <TableCell style={{color:"#F0584A"}}>R$ {output = output.reduce((accum, output) => {
                         return accum += parseFloat(output.value)
                     }, 0)}</TableCell>
                 </TableRow>
                 
                 
             </TableBody>
             <TableHead>
                 <TableRow>
                 <TableCell rowSpan={2} />
                     <TableCell colSpan={1} className={input - output >= 0? classes.positive:classes.negative}>Total Geral</TableCell>
                  
                     <TableCell className={input - output >= 0? classes.positive:classes.negative}>R$ { input - output }</TableCell>
                 </TableRow>
             </TableHead>
         </Table>       
     </TableContainer>
    )
}