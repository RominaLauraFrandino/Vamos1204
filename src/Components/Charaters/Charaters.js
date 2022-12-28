import Navegacion from "../Navegacion/Navegacion"
import Filters from "../Filters/Filters"
import SectionCards from "../SectionCards/SectionCards"
import{useState,useEffect} from 'react';
import { Fragment } from 'react';
import '../Charaters/Charaters.css';

export default function Characters() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const MostrarValor =(event)=>{

        // se fija si esta o no checked,tildado
        if(event.target.checked){
                let datoFiltro=event.target.value;
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado= datos.filter((ch)=> ch.status === datoFiltro)//nuevo array con solo los elementos que cumplen la condicion
                    setDatos(resultado)
                }
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "unknown"){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)
                } 
                
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

      //saco la funcion por fuera para que lo pueda utilizar en mi funcion del evento
    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }
    //Se ejecuta cuando se renderiza la pagina
     useEffect(()=>{
        mostarInfo() 
     },[])
    return(
        <Fragment className="container">
        <Navegacion/>
        <section className="row section-filters py-5 forma">
        <h2>Filters</h2>
        <div className="filters d-flex justify-content-between flex-wrap">
                <div className="form-check form-switch px-5 py-2">
                    <Filters nombreFiltro="Charater Alive" datoFiltro="Alive" muestraValor={MostrarValor}/>
                </div>
                <div className="form-check form-switch px-5 py-2">
                    <Filters nombreFiltro="Charater Dead" muestraValor={MostrarValor}/>
                </div>
                <div className="form-check form-switch px-5 py-2">
                    <Filters nombreFiltro="Femate" muestraValor={MostrarValor}/>
                </div>
                <div className="form-check form-switch px-5 py-2">
                    <Filters nombreFiltro="Male" muestraValor={MostrarValor}/>
                </div>
                <div className="form-check form-switch px-5 py-2">
                    <Filters nombreFiltro="Origin Unknow"datoFiltro="unknow" muestraValor={MostrarValor}/>
                </div>
        </div>
        </section>
        <SectionCards datos={datos}/>
        </Fragment>
    )
}