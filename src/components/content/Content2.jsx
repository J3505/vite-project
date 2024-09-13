import { GoArrowRight } from "react-icons/go";
import Card1c2 from "../cards/cardsContent2/Card1";
import Card2flamenco from "../cards/cardsContent2/Card2";


const Content2 = () => {
  return (
    <>
        <div className="content2">

            <div className="item">

                <div className="texto1">
                    <p>our value</p>
                </div>

                <div className="texto2">
                    <p className=".texto">Every journey</p>
                    <p className=".texto">is unique</p>
                </div>


            </div>

            <div className="item">

                <div className="flecha">
                <GoArrowRight  style={{ fontSize: "2rem" }}/>
                </div>
                
            </div>
            
            <div className="item">

            </div>

            <div className="item">
                <Card2flamenco/>
            </div>

            <div className="item">
                <Card1c2/>
            </div>
        </div>
    </>
  )
}

export default Content2
