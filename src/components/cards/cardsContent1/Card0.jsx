import { GoArrowRight } from "react-icons/go";

const Card0 = () => {
    return (
    <>
        <div className="card">

            <div className="circulo">

                <div className="icono">
                    <GoArrowRight  style={ {fontSize:'1.5rem'}} /> 
                </div>
            </div>

            <div className="parrafo">
                <p>Explore our curated list of must-vist destinations around the globe.</p>
            </div>

            <div className="linea"></div>
        
            <div className="palabras-tres">
                
                <div className="letra1"><span>(FIRST)</span></div>
                <div className="letra2"><span>(PRESENT)</span></div>
                <div className="letra3"><span>01</span></div>
                
            </div>
        </div>
    </>
    )

}

export default Card0
