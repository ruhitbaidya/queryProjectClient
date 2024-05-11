import Banner from "./Banner/Banner";
import Slider from "./Slider/Slider";



const Home = () => {
  return (
    <div>
      <div className="container px-[20px] mx-auto my-[30px]">
      <Slider></Slider>
      <Banner></Banner>
      </div>
    </div>
  )
}

export default Home