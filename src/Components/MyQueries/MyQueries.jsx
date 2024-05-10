import bgimge from "../../assets/addpng.png"
import "./style.css"
import { Link } from "react-router-dom";
const MyQueries = () => {
  return (
    <div className="my-[50px]">
      <div className="findMoreImage ">
        <div className="container mx-auto px-[20px]">
          <div className="bg-colors-ne rounded-lg">
            <div className="flex justify-center items-center relative">
              <img className="h-[300px]" src={bgimge} alt="" />
              <div className=" w-[100%] absolute text-center">
                <h2 className="text-white text-5xl font-[600] mb-[20px]">Seek Better Alternatives</h2>
                <button className="btn btn-outline hover:outline-none text-white hover:bg-gray-200 hover:text-gray-700 border border-white">
                <Link to="/addQuery">Add Query </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyQueries