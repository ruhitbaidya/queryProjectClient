import TitleHeader from "../TitleHeader";
import Banner from "./Banner/Banner";
import Fetcher from "./Fetcher/Fetcher";
import ProducsShow from "./ProductShow/ProducsShow";
import Slider from "./Slider/Slider";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
  return (
    <div>
      <div className="container px-[20px] mx-auto my-[30px]">
      <Slider></Slider>
      <Banner></Banner>
      <TitleHeader title="Recent Queries" description="People are interested in nutritious yet flavorful dinner ideas to aid in their weight loss journey, emphasizing low-calorie, high-protein meals with plenty of vegetables." />
      <ProducsShow></ProducsShow>
      <TitleHeader title="Our New Feature" description="Experience the future of information retrieval with SmartSearch! Seamlessly explore vast knowledge realms with precision and speed. Your ultimate tool for discovery awaits!" />
      <Fetcher></Fetcher>
      
      <Testimonial></Testimonial>
      </div>
    </div>
  )
}

export default Home