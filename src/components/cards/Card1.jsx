import { FaArrowRight } from "react-icons/fa";

function Card1(props) {
    return (
        <>
        <div className="card1">
            <div className="card1-item1">
                <div className="card1-icon" >
                    <FaArrowRight />
                </div>
            </div>
            <div className="card1-item2">
                <h2>{props.description}</h2>
            </div>
            <div className="card1-item3">
                <div className="card1-button">
                    <div>(FIRST)</div>
                    <>(PRESENT)</>
                    
                </div>
            </div>
        </div>
        </>
    );
}
export default Card1
