
import {Link} from "react-router-dom";

export default function Home(){
    return(
            
        <header className="principal-search container-fluid d-flex flex-column justify-content-center align-items-center">
        <div className="container-header  d-flex flex-column justify-content-center">

   
            <h1 className="row justify-content-center">Proyecto - Rick &amp; Morty</h1>
    
            <nav className="row navbar align-items-center">
                <ul className="nav nav-pills  justify-content-center">
                    <li className="nav-item">
                    <Link to="/characters"className="nav-link active m-2 p-3 botones " >Charaters</Link>  
                    
                    </li>
                    <li className="nav-item">
                    <Link to="/contact"className="nav-link active m-2 p-3 botones " >Contact</Link>  
                        
                    </li>
                </ul>
            </nav>            
        </div>

    </header>
    

               
    )
}