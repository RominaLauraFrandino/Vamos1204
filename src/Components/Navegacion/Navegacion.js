import {Link} from"react-router-dom";
import './Navegacion.css';
export default function Navegacion() {
    return(
        <header className="style">
            <nav className='navbar navbar-expand-lg  w-100 bg-blue'>
                <div className='container-fluid'>
  
                    <Link to="/"className='nav-link tamano' aria-current="page" >Rick & Morty</Link> 
                    <ul className='navbar-nav nav-pills'>
                        <li className='nav-item'>
                            
                            <Link to="/"className='nav-link boton' aria-current="page" >Home</Link> 
                        </li>
                        <li className='nav-item'>
                            
                            <Link to="/characters"className='nav-link boton' aria-current="page" >Characters</Link> 
                        </li>
                        <li className='nav-item'>
                        
                        <Link to="/Contact"className='nav-link boton' aria-current="page" >Contact</Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            )
}