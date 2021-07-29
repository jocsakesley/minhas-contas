import { Link } from 'react-router-dom';
import './Header.css';


export const Header = (props) => {
    
        
    return (
        <header>
      
            <div>
                Minhas Contas
                
            </div>
            <div className="menu">
                <span className="user">
                    {props.user}
                </span>
                
                <Link to='/' onClick={props.logout} className="exit">{props.label}</Link>
            </div>
      
        </header>
    )
}


