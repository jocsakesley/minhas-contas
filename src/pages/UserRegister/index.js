import { Header } from "../../components/Header"
import { FormUser} from "../../components/FormUser"
import { Container } from "@material-ui/core"

export const UserRegister = () => {

    return (
        <>
        <Header/>
        <Container maxWidth="sm">
        
        <FormUser/>
       </Container>
       </>

    )
}