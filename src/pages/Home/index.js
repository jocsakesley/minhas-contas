import { Container, Divider } from "@material-ui/core"
import { Form } from "../../components/Form"
import { Header } from "../../components/Header"
import { TableAccounts } from "../../components/TableAccounts"
import { DataProvider } from "../../providers/accounts"



export const Home = () => {

    const logout = () => {
        localStorage.removeItem('token')
    }
    
    return (
        <>
            <Header logout={logout}/>
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