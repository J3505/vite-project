import trvvratImg from '../../assets/img/trvvrat.png';
import { FaArrowUp } from "react-icons/fa";
import Gmail from '../cards/Gmail';

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container-footer">
            <div className="footer-top">
                <div className="footer-item-top1">
                  <div>We offer adult clinics that</div>
                  <div>focus on skill improvement</div>
                </div>
                <div className="footer-item-top2">
                <ul>
                  <li>Home</li>
                  <li>Service</li>
                  <li>About</li>
                  <li>Product</li>
                </ul>
                <ul>
                  <li>Home</li>
                  <li>Service</li>
                  <li>About</li>
                </ul>
                </div>
                <div className="footer-item-top3">
                  <div className="icon" >
                  <FaArrowUp />
                  </div>
                </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-item-bottom1">
                <Gmail/>
              </div>
              <div className="footer-item-bottom2">
                <img src={trvvratImg} alt="" />
              </div>
            </div>
        </div>

    </footer>
      
    </>
  )
}

export default Footer
