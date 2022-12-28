import Navegation from '../Navegacion/Navegacion'
import './Contact.css'
import {useState} from 'react';

export default function Contact(){

    let [inputNombre,setInputNombre]= useState('')

    const registerData =(event)=>{
        setInputNombre(event.target.value)
        
    }
    const mostrar=()=>{

        console.log(inputNombre)

        if(inputNombre.length <5){
            console.log("El nombre es muy corto")
        }
    }

    return(
        <div>
         
            <Navegation />
            
            <main  className='container-fluid main-contact'>
                <div className=" main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75">
                    <h2 className='row colorBLue'>Contact</h2>
                    <h3 className='row colorBLue'>Leave us your information so we can contact you</h3>
                        <form className="row colorBLue g-3 p-4" action=''>
                            <div className="col-md-6">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control p-2" 
                                    id="nombre" 
                                    value={inputNombre} 
                                    onChange={registerData}
                                    onBlur={mostrar}
                                />

                            </div>
                            <div className="col-md-6">
                                <label htmlFor="correo" className="form-label">Email</label>
                                <input type="email" className="form-control p-2" id="correo" />
                            </div>  
                            <div className="col-12">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea id="mensaje" className="form-control"></textarea>
                            </div>
                            
                            <div className="col-12">
                            <button type="submit" className="btn botones colorW">Sign in</button>
                            </div>
                    </form>
                </div>
          </main>
          </div>
       
    
        
    )
} 