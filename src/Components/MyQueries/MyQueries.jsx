import { useContext, useEffect, useState } from "react";
import bgimge from "../../assets/addpng.png"
import "./style.css"
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
const MyQueries = () => {
  const [myData, setMyData] = useState([])
  const {user} = useContext(AuthUserContext);
  const email = user.email;
  useEffect(()=>{
    axios.get(`http://localhost:5000/getProductByEmail?email=${email}`, {withCredentials: true})
    .then((res)=>{
      const finddata = res.data.sort((a, b) => b.createAt - a.createAt);
      setMyData(finddata)
    })
  }, [email])
  const handelDelete = (id)=>{
    toast.confirm(toast(id))
  }
  console.log(myData)
  return (
    <div className="my-[50px]">
      <ToastContainer />
      <div className="findMoreImage ">
        <div className="container mx-auto px-[20px]">
          <div className="bg-colors-ne rounded-lg">
            <div className="flex  items-center relative">
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

      <div className="container mx-auto px-[20px] my-[50px]">
        <div className="grid grid-cols-3 gap-[25px]">
            {
              myData ? <>
              {
                myData.map((item)=>{
                  return <div key={item._id} className="rounded shadow-lg">
                  <img className="w-full h-[250px]" src={item.productImageurl} alt="Product" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.queryTItle}</div>
                    <p className="text-gray-700 ">
                      Product Name: <span className="font-semibold">{item.productName}</span>
                    </p>
                    <p className="text-gray-700 ">
                      Brand Name: <span className="font-semibold">{item.productBrand}</span>
                    </p>
                    <p className="text-gray-700 ">
                      Alteration Reason: <span className="font-semibold">{item.boycottingDetails}</span>
                    </p>
                    <p className="text-gray-700 ">
                      Date Posted: <span className="font-semibold">{item.userinfotime.currentTime}</span>
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <button className="w-full bg-green-400 py-[7px] rounded-lg text-white">View Details</button>
                    <button className="w-full bg-yellow-400 py-[7px] rounded-lg text-white mt-[10px]">Update</button>
                    <button onClick={()=> handelDelete(item._id)} className="w-full bg-red-500 py-[7px] rounded-lg text-white mt-[10px]">Delete</button>
                  </div>
                </div> 
                })
              }
              </> : <>
                <h3 className="text-gray-400 text-3xl">You Have No Product Add Click Top Up button Then You Can Add Your Product</h3>
              </>
            }
        </div>
      </div>
    </div>
  )
}

export default MyQueries