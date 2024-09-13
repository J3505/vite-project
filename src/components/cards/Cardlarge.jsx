import { FaArrowLeft } from "react-icons/fa";

const Cardlarge = () => {
  return (
    <div className="card-container">
      <div className="section-top">
        <div className="section-top-arrow">
            <FaArrowLeft />
        </div>
      </div>
      <div className="section-center">
        <div className="section-center-top">
            <div className="img">
                <img src="https://i.pinimg.com/564x/0c/35/59/0c355930293c3083e5ef7515fe6c63cf.jpg" alt="" />
            </div>
            <div className="text">
                <label>(FIRST)</label>
            </div>
        </div>
        <div className="section-center-bottom">
            <label className="title">-JOSEPH STALIN</label>
            <label className="subtitle">Creative Director</label>
        </div>
      </div>
      <div className="section-bottom"></div>
    </div>
  )
}

export default Cardlarge
