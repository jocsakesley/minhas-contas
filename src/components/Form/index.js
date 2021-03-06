import TextField from '@material-ui/core/TextField';
import {ThemeProvider} from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, FormControlLabel, Select, Switch } from '@material-ui/core';
import { useState } from 'react';
import React from 'react';
import { theme } from '../../assets/Theme';
import { BillsService } from '../../services/api';
import { useStyles } from './styles';
import { DataContext } from '../../providers/accounts';

  
export const Form = ()=> {
    const classes = useStyles();

    let [nameAccount, setNameAccount] = useState('')
    let [type, setType] = useState('')
    let [value, setValue] = useState('')
    let [date, setDate] = useState('')
    let [recurrent, setRecurrent] = useState(false)
    const [valueMasked, setValueMasked] = useState('')
    const { updateData, setUpdateData} = React.useContext(DataContext)

  
    return (
        <form onSubmit={(e)=> {
            e.preventDefault()     
            }
        }>
            <ThemeProvider theme={theme}>
                
                    <TextField 
                    id="outlined-basic" 
                    label="Nome da conta" 
                    variant="outlined"
                    className={classes.textField}
                    value={nameAccount}
                    onChange={(e) => setNameAccount(e.target.value)}
                    />
                    <FormControl variant="outlined" className={classes.textField}>
                        <InputLabel id="type">Tipo</InputLabel>
                        <Select
                        labelId="type"
                        id="outlined-basic"
                        label="Tipo"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value={"E"}>Entrada</MenuItem>
                            <MenuItem value={"S"}>Saída</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField 
                    type="text"
                    id="value" 
                    label="Valor" 
                    variant="outlined"
                    className={classes.textField}
                    value={valueMasked}
                    onChange={(e)=> {
                        var valor = e.target.value;
                        valor = valor + '';
                        valor = parseInt(valor.replace(/[\D]+/g, ''));
                        valor = valor + '';
                        valor = valor.replace(/([0-9]{2})$/g, ",$1");

                        if (valor.length > 6) {
                            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                        }

                        setValueMasked(valor);
                        if(valor === 'NaN') setValueMasked('');
        
                        setValue(parseFloat(valor.replace('.', '').replace(',', '.')))
                    }}
                    />
                    <TextField
                        id="date"
                        label="Data"
                        type="date"
                        variant="outlined"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                    />
                    <FormControl margin="normal">
                        <FormControlLabel
                                control={<Switch name="checked" checked={recurrent} onChange={(e)=> setRecurrent(e.target.checked)} color="primary" />}
                                label="Tornar recorrente"
                            />
                    </FormControl>
                    <Button type="submit" onClick={async () => {
                        await BillsService.postBills({"name":nameAccount, "type_bill":type, "value": parseFloat(value), "date": date, "is_recurrent":recurrent})
                        setUpdateData(!updateData)
                    }} className={classes.buttonField}>Cadastrar</Button>
        
            </ThemeProvider>
        </form>
    )
}