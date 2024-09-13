import Cardgrand from "../cards/Cardgrand"
import Cardlarge from "../cards/Cardlarge"
import Cardright from "../cards/Cardright"

const Content4 = () => {
  return (
    <div className="container-content4">
      <div className="section1"></div>
      <div className="section2">
        <div className="section2-label">
          <label>Client About</label>
          <label>our work</label>
        </div>
        <div className="section2-text">
          <label>From Concept To</label>
          <label>Completation</label>
        </div>
      </div>
      <div className="section3"></div>
      <div className="section4"><Cardlarge/>  </div>
      <div className="section5"><Cardgrand/></div>
      <div className="section6"><Cardright/></div>

    </div>
  )
}

export default Content4
