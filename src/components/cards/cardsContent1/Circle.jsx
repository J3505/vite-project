import { GoArrowDown } from "react-icons/go";
const Circle = () => {
    return (
    <>
        <div className="circulos">

            <div className="capa-2">
                <div className="flecha">
                    <p>contact</p>
                </div>
            </div>

            <div className="capa-3">

                <div className="flecha">
                    <GoArrowDown style={{ fontSize: "2rem", color:"white" }} />
                
                </div>

            </div>

        </div>
    </>

    );
};

export default Circle;
