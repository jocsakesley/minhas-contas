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
    
    let user = async() => {
         user  = await AuthService.tokenIsValid(localStorage.getItem('token'))
         user = await user.data.email
         console.log(user)
         return user
    }
    return (
        <>
            <Header logout={logout} label="Logout" user={() => user()}/>
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