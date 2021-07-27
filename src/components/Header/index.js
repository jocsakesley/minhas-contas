import { Link } from 'react-router-dom';
import './Header.css';


export const Header = (props) => {

    return (
        <header>
      
            <div>
                Minhas Contas
                
            </div>
            <div>
                {props.user}    
            </div>
            
            <Link to='/' onClick={props.logout} style={{textDecoration:"none", color: "aliceblue"}}>{props.label}</Link>
            
      
        </header>
    )
}


