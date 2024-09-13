
import Card1 from '../cards/Card1';
import Card2 from '../cards/Card2';
import Card3 from '../cards/Card3';

const description1 = "Travel with peace of mind knowing we're always here";
const description2 = "Explore our curated of must-visit destinations around the globe";
const description3 = "Whether it's the pristine beaches of Bali, the historic streets";
const Content5 = () => {
  return (
    <div className="container-content5">
      <div className="content5-item1">
        <label>our benefit</label>
      </div>
      <div className="content5-item2"><Card3/></div>
      <div className="content5-item3"><Card1 description = {description1}/></div>
      <div className="content5-item4"><Card2 description = {description2}/></div>
      <div className="content5-item5"></div>
      <div className="content5-item6"><Card2 description = {description3}/></div>
      <div className="content5-item7"></div> 
    </div>
  )
}
export default Content5
