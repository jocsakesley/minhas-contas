import TextField from '@material-ui/core/TextField';
import {ThemeProvider} from '@material-ui/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, FormControl, Select } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';
import React from 'react';
import { theme } from '../../assets/Theme';
import { useStyles } from './styles';
import { UserService } from '../../services/api';
import { useHistory } from 'react-router';

  
export const FormUser = ()=> {
    const classes = useStyles();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState(false)
    const [feedback, setFeedback] = useState({display:"none", type:"success", msg:""})
    const history = useHistory()

    const handleRegister = async () => {
        if (password === password2 && password.length > 4) {
            await UserService.postUser({name, email, birthday, gender, password})
            setError(false)
            setFeedback({display:"block", type:"success", msg:"Usuário cadastrado com sucesso"})
            setTimeout(() => setFeedback({display:"none"}), 5000)
            setTimeout(() =>  history.push('/'), 5000)
           
        } else {
            console.log("error")
            setError(true)
            setFeedback({display:"block", type:"error", msg:"Erro ao cadastrar usuário"})
            setTimeout(() => setFeedback({display:"none"}), 5000)
            
        }
        
        
    }

    return (
        <form onSubmit={(e)=> {
            e.preventDefault()     
            }
        }>
            <ThemeProvider theme={theme}>
                
                    <TextField 
                    id="name" 
                    label="Nome" 
                    variant="outlined"
                    className={classes.textField}
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    />
                    <TextField 
                    id="email" 
                    type="email"
                    label="E-mail" 
                    required
                    variant="outlined"
                    className={classes.textField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="birthday"
                        label="Data de Nascimento"
                        type="date"
                        variant="outlined"
                        required
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        value={birthday}
                        onChange={(e)=> setBirthday(e.target.value)}
                    />
                    <FormControl variant="outlined" className={classes.textField}>
                        <InputLabel id="gender">Gênero</InputLabel>
                        <Select
                        labelId="gender"
                        id="outlined-basic"
                        required
                        label="Gênero"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        >
                            <MenuItem value={"M"}>Masculino</MenuItem>
                            <MenuItem value={"F"}>Feminino</MenuItem>
                            <MenuItem value={"O"}>Outro</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError(false)
                        }}
                        error={error}
                       
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password2"
                        label="Confirmar Senha"
                        type="password"
                        id="password2"
                        autoComplete="current-password"
                        value={password2}
                        onChange={(e) => {
                            setPassword2(e.target.value)
                            setError(false)
                        }}
                        error={error}
                        helperText={error?"Senha inválida":""}
                    />
                    
                    <Button type="submit" onClick={handleRegister} className={classes.buttonField}>Cadastrar</Button>
                    
                    <Alert style={{display: feedback.display}} severity={feedback.type}>{feedback.msg}</Alert>
        
            </ThemeProvider>
        </form>
    )
}