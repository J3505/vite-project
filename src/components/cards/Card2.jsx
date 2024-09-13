import { FaArrowRight } from "react-icons/fa";
function Card2(props) {
    return (
        <>
        <div className="card2">
            <div className="card2-item1">
                <div className="card2-icon" >
                    <FaArrowRight />
                </div>
            </div>
            <div className="card2-item2">
                <h2>{props.description}</h2>
            </div>
            <div className="card2-item3">
                <div className="card2-button">
                    <div>(FIRST)</div>
                    <>(PRESENT)</>
                    
                </div>
            </div>
        </div>
        </>
    );
}
export default Card2