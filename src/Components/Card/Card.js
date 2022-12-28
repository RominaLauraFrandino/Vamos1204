import {useState} from 'react';
import './Cards.css';

export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
        setOcultar(false) //nos ayuda a mostrar el contenedor de info
    }

    const ocularInfo=()=>{
        setOcultar(true) //nos ayuda a ocultarlo el contenedor de info
    }

  return(
    <div className="card col-md-4 m-2 p-2 d-flex flex-row justify-content-between align-items-center">
        
      <div className="d-flex flex-column justify-content-between align-items-center">
        
          <img src={info.image} alt={info.name}/>
          <h2 >{info.name}</h2>
          <button onClick={mostrar} className="btn btn-active align-self-end more">Now More..</button>
        
      </div>
      {ocultar ==false?
      
                <div className='col-md-2 contenido'>
                    <button className="btn btn-active d-flex align-self-end m-2 " onClick={ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item p-3">
                            <div className='fw-bold'>Character Status {info.status}</div>
                        </li>
                        <li className="list-group-item p-3">
                            <div className='ms-2 me-auto'>Species
                                <div className='fw-bold'>{info.species}</div>
                            </div> 
                        </li>
                        <li className="list-group-item p-3">
                            <div className='ms-2 me-auto'>Origin 
                                <div className='fw-bold'>{info.origin.name} </div>
                            </div>
                        </li>
                        <li className="list-group-item p-3">
                            <div className='ms-2 me-auto'>Gender 
                             <div className='fw-bold'> {info.gender}</div>
                            </div>
                        </li>
                    </ul>
                </div>:''
}
      </div>
  )
}
