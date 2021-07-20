import './Header.css';


export const Header = () => {

    const options = ['Home', 'Categorias' ]
    return (
        <header>
      
            <div className="app-name">
                Minhas Contas
                
            </div>
            <nav className="menu">
                <ul>
                    {options.map(option => <li key={option}>{option}</li>)}
                    
                </ul>
            </nav>
      
        </header>
    )
}


