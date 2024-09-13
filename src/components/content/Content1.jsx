
import { GoArrowUpRight } from "react-icons/go";
import Card0 from   "../cards/cardsContent1/Card0"
import  Circle from   "../cards/cardsContent1/Circle"


const Content1 = () => {
  return (
    <>

      <div className="container-content1">
                    {/* 1 */}
        <div className="item">

          <div className="titulo">
            <p>Lorem ipsum</p>
          </div>

        </div>
                    {/* 2 */}
        <div  className="item">

          <div className="texto">
              {/* <!-- <p>Explro the Wordl with us </p> --> */}
              <div className="palabra">
                <label >Explore the</label> 
              </div>
              <div className="palabra">
                <label >Wordl with us</label>
              </div>
            </div>
        </div>
 
                    {/* 3 */}
        <div  className="item" >

            <div className="boton">
              <div className="textoLoren">Lorean more</div>
              <div className="espacio"></div>
              <div className="flechadiagonal">
                  <GoArrowUpRight style={{color:"#fff"}} />
                
                {/* <img src={bg}  alt="aun" width={45}/> */}
                
              </div>
            </div>
        </div>

                    {/* 4 */}
        <div className="item">
            <Circle/>
        </div>
                    {/* 5 */}
        <div className="item">
            <Card0/>
        </div>


    </div >
      
    </>
    );
}

export default Content1
