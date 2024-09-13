import { GoArrowRight } from "react-icons/go";

const Card1 = () => {
    return (
        <>
            <div className="Card1C3">

                    <div className="btns">

                        <div className="botones">
                            <div className="btns-1">Sport</div>
                            <div className="btns-2">Music</div>
                            <div className="btns-3">Cinema</div>
                        </div>

                        <div className="flecha">
                            <GoArrowRight  style={{ fontSize: "2rem" }}/>
                            {/* <img src="img/fleDerecha.svg" alt="aun"> */}
                        </div>

                    </div>


                    <div className="imgen">
                        <div className="img"></div>
                    </div>

                    <div className="final-card">
                        <div className="palabras-1">
                            <div className="pla1">(FIRST)</div>
                            <div className="pla2">(PRESENT)</div>
                        </div>
                        <div className="palabras-2">
                            <div className="pla3">01</div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card1
