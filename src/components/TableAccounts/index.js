import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core"
import React from "react";
import { DataContext } from "../../providers/accounts"
import { useStyles } from "./styles";
import { BillsService } from "../../services/api";


export const TableAccounts = () => {
    const { data, updateData, setUpdateData } = React.useContext(DataContext)
    const classes = useStyles()
    let input = data.filter((d) => d.type_bill === "E")
    let output = data.filter((d) => d.type_bill === "S")

    const totalIn = input.reduce((accum, input) => {
        return accum += parseFloat(input.value)
    }, 0)
    
    const totalOut = output.reduce((accum, output) => {
        return accum += parseFloat(output.value)
    }, 0)
  
    const handleDate = (date) => {
         return date.split('-')[2] + '/' + date.split('-')[1] + '/' + date.split('-')[0]
    }

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
                         <TableCell style={{color:"#1194a8"}}>{handleDate(i.date)}</TableCell>
                         <TableCell style={{color:"#1194a8"}}>R$ {i.value.toLocaleString('pt-BR', {  minimumFractionDigits: 2, maximumFractionDigits: 2})}
                         <button onClick={async () => {
                             await BillsService.deleteBill(i.id)
                             setUpdateData(!updateData)
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
                     <TableCell style={{color:"#1194a8"}}>R$ {totalIn.toLocaleString('pt-BR', {  minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
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
                         <TableCell style={{color:"#F0584A"}}>{handleDate(o.date)}</TableCell>
                         <TableCell style={{color:"#F0584A"}}>R$ {o.value.toLocaleString('pt-BR', {  minimumFractionDigits: 2, maximumFractionDigits: 2})}
                         <button onClick={async () => {
                             await BillsService.deleteBill(o.id)
                             setUpdateData(!updateData)
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
                     <TableCell style={{color:"#F0584A"}}>R$ {totalOut.toLocaleString('pt-BR', {  minimumFractionDigits: 2, maximumFractionDigits: 2})}</TableCell>
                 </TableRow>
                 
                 
             </TableBody>
             <TableHead>
                 <TableRow>
                 <TableCell rowSpan={2} />
                     <TableCell colSpan={1} className={totalIn - totalOut >= 0? classes.positive:classes.negative}>Total Geral</TableCell>
                  
                     <TableCell className={totalIn - totalOut >= 0? classes.positive:classes.negative}>R$ { (totalIn - totalOut).toLocaleString('pt-BR', {  minimumFractionDigits: 2, maximumFractionDigits: 2}) }</TableCell>
                 </TableRow>
             </TableHead>
         </Table>       
     </TableContainer>
    )
}