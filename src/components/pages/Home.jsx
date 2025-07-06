import MenoCardImage1 from "../../assets/images/meno-image-1.png";
import MenoCardImage2 from "../../assets/images/meno-image-2.png";
import MenoCardImage3 from "../../assets/images/meno-image-3.png";
import MenoCardImage4 from "../../assets/images/meno-image-4.png";


import { Link } from "react-router-dom";
import Slider from "../Slider";
import MenoCard from "../MenoCard";

function Home() {
  const cardValue = [
    {
      btnText:"نوشیدنی",
      image: MenoCardImage4
    },
    {
      btnText:"نوشیدنی",
      image: MenoCardImage3
    },{
      btnText:"نوشیدنی",
      image: MenoCardImage2
    },{
      btnText:"نوشیدنی",
      image: MenoCardImage1
    }
  ]

  return (
    <div>
      <Slider />
      <div className="menoSection w-full  flex flex-col items-center px-27.25 py-12 gap-40 ">
        <h2 className="font-[vazir-bold] text-2xl">منوی رستوران</h2>

        <div className="w-full flex justify-between flex-nowrap">
          {cardValue.map((card)=><MenoCard buttonText={card.btnText} imageUrl={card.image} />)}
        </div>
      </div>
      <Link to={`/TestPage`}>go to test page</Link>
    </div>
  );
}

export default Home;
