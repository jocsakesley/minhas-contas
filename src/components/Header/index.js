import { Link } from 'react-router-dom';
import './Header.css';


export const Header = (props) => {

    const options = ['Home', 'Categorias' ]
    return (
        <header>
      
            <div>
                Minhas Contas
                
            </div>
            <nav>
                <ul>
                    {options.map(option => <li key={option}>{option}</li>)}
                    
                </ul>
            </nav>
            <Link to='/' onClick={props.logout}>Logout</Link>
            
      
        </header>
    )
}


