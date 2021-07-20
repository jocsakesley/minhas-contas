import TextField from '@material-ui/core/TextField';
import {ThemeProvider} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, FormControlLabel, Select, Switch } from '@material-ui/core';
import { useState } from 'react';
import React from 'react';
import { InputContext, OutputContext } from '../../providers/accounts';

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1194a8',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

const useStyles = makeStyles(theme => ({
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
  
export const Form = ()=> {
    const classes = useStyles();

    let [nameAccount, setNameAccount] = useState('')
    let [type, setType] = useState('')
    let [value, setValue] = useState('')
    let [date, setDate] = useState('')
    let [recurrent, setRecurrent] = useState(false)
    const { input, setInput } = React.useContext(InputContext)
    const { output, setOutput } = React.useContext(OutputContext)
    
    return (
        <form onSubmit={(e)=> {
            e.preventDefault()
            if ( type === "entrada") {
                setInput([...input,{nameAccount, type, value, date, recurrent}])
                console.log(input)
            } else if ( type === "saida") {
                setOutput([...output,{nameAccount, type, value, date, recurrent}])
                console.log(output)
            }
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
                            <MenuItem value={"entrada"}>Entrada</MenuItem>
                            <MenuItem value={"saida"}>Saída</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField 
                    type="number"
                    step="0.01"
                    min="0.01"
                    id="outlined-basic" 
                    label="Valor" 
                    variant="outlined"
                    className={classes.textField}
                    value={value}
                    onChange={(e)=> {
                        setValue(e.target.value)
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
                    <Button type="submit" className={classes.buttonField}>Cadastrar</Button>
        
            </ThemeProvider>
        </form>
    )
}