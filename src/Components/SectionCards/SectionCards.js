import Card from "../Card/Card";
import './SectionCards.css'




export default function SectionCards({datos}) {

    
    return(
        <div className="container">

            <div className="row">
                {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/>})}
            </div>
                
        </div>
    )
}