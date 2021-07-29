import { Container, Divider } from "@material-ui/core"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { TableAccounts } from "../../components/TableAccounts"
import { DataProvider } from "../../providers/accounts"
import { AuthService } from "../../services/auth"


export const Home = () => {

    const logout = () => {
        localStorage.removeItem('token')
    }
    
    const user = localStorage.getItem('user')

    setInterval(async() => {
        
        try {
            let is_valid = await AuthService.tokenIsValid(localStorage.getItem('token'))
            console.log(is_valid.data)
        } catch {
            localStorage.removeItem('token')
            let refreshedToken = await AuthService.getRefresh(localStorage.getItem('refresh'))
            localStorage.setItem('token', refreshedToken.data.access)
        }

    },1620000000)
    return (
        <>
            <Header logout={logout} label="Sair" user={user}/>
            <Container maxWidth='sm'>
            <DataProvider>
                <Form/>
                <Divider component="hr" variant="middle" />
                <TableAccounts />
            </DataProvider>
            </Container>
        </>
    )
}