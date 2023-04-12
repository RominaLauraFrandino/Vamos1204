import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../Home/Home/Home';

import Login from '../login/login';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
               
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}