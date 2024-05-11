import { Link } from "react-router-dom";
import images from "../../../assets/productspro.jpg";
import "../Slider/style.css";
const Banner = () => {
  return (
    <div className="my-[35px] h-[250px]">
      <div className="relative">
        <img className="h-[250px] w-full rounded-lg" src={images} alt="" />
        <div className="h-full w-full absolute colors-slider2  top-0 rounded-lg">
          <div className="h-full w-full">
            <div className=" text-white text-center h-full flex w-full items-center justify-center">
              <div className="">
                <h2 className="text-xl lg:text-3xl">
                  Fuel Your Quest: Explore All Queries Now!
                </h2>

                <Link to="/allQuery">
                  <button className="px-[35px] py-[10px] mt-[10px] border border-white hover:bg-white hover:text-black">
                    All Query
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
