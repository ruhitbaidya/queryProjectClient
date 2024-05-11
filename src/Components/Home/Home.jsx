import Banner from "./Banner/Banner";
import ProducsShow from "./ProductShow/ProducsShow";
import Slider from "./Slider/Slider";



const Home = () => {
  return (
    <div>
      <div className="container px-[20px] mx-auto my-[30px]">
      <Slider></Slider>
      <Banner></Banner>
      <ProducsShow></ProducsShow>
      </div>
    </div>
  )
}

export default Home