import { Button, Card, Container, TextField, ThemeProvider, Typography } from "@material-ui/core"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { theme } from "../../assets/Theme"
import { Header } from "../../components/Header"
import { AuthService } from "../../services/auth"
import { useStyles } from "./styles"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const history = useHistory()
    const classes = useStyles()
    return(
        <>
        <Header/>
        <Container maxWidth='sm'>
            
            <Card style={{padding: "1rem", marginTop: "20%"}}>
                <Typography variant="h3" align="center">Login</Typography>
                <form method='POST' onSubmit={(e) => {
                    e.preventDefault()
                }}>
                <ThemeProvider theme={theme}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error?true:false}

                    />
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
                        onChange={(e) => setPassword(e.target.value)}
                        error={error?true:false}
                        helperText={error?"Email ou senha incorretos":""}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={async() => {
                            try {
                                let login = await AuthService.getToken(email, password)
                                localStorage.setItem('token', login.data.access )
                                localStorage.setItem('refresh', login.data.refresh )
                                let user = await AuthService.tokenIsValid(localStorage.getItem('token'))
                                localStorage.setItem('user', user.data.email )
                                history.push('/home')
                                setError(false)
                            } catch(err) {
                              
                                setError(true)
                            }
        
                            
                        }}
                       
                    >
                        Entrar
                    </Button>
                    <div className={classes.linksContainer}>
                        <Link className={classes.link} to="/register">Registrar-se</Link>
                        <Link className={classes.link} to="/">Esqueci a senha</Link>
                    </div>
                    </ThemeProvider>
                </form>
            </Card>
        </Container>
    </>
    )
}