import './App.css';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TableAccounts } from './components/TableAccounts'
import { InputProvider, OutputProvider } from './providers/accounts';


function App() {

  return (
    <div>
        <Header />
          <Container maxWidth='sm'>
            <InputProvider>
            <OutputProvider>
              <Form/>
              <Divider component="hr" variant="middle" />
              <TableAccounts />
              </OutputProvider>
            </InputProvider>
          </Container>
    </div>
  );
}


export default App;
