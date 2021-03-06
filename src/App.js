import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { isAuthenticated } from './services/auth';
import { UserRegister } from './pages/UserRegister';



export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => isAuthenticated() ? (
        <Component {...props} />
      
      ) : (
        <Redirect to={{pathname: "/", state: {from: props.location}}}
        />
      )}
  />
)

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/register' exact component={UserRegister}/>
        <PrivateRoute path='/home' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
