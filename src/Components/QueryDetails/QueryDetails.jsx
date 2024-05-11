import { useLoaderData } from "react-router-dom";
import DateAtime from "../CurrentDateAndTime/DateAtime";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";

const QueryDetails = () => {
  const [comment, setComment] = useState([]);
 
  const { data } = useLoaderData();
  const {user} = useContext(AuthUserContext)
  const handelAddSubmit = (e)=>{
    e.preventDefault();
    const form = e.target;
    const reproductName = form.recommendproductName.value;
    const reproductImageurl = form.recomentproductImageurl.value;
    const requeryTItle = form.recomentqueryTItle.value;
    const reboycottingDetails = form.recomentboycottingDetails.value;
    const createAt = Date.now();
    const currentTime = DateAtime();
    const queryId = data._id;
    const ReProduct = data.productName;
    const  WEmail = data.userinfotime.userEmail
    const  WName = data.userinfotime.cName
    const reEmail = user.email 
    const  reName = user.displayName
    const infos = {ReProduct, queryId, reproductName, reproductImageurl, requeryTItle, reboycottingDetails, reEmail, reName, createAt, currentTime, WEmail, WName}

 

    axios.post("http://localhost:5000/comment", infos,{withCredentials : true})
    .then((res)=> {
        if(res.data.insertedId){
            toast.success("successfully Create Product")
            form.reset();
            data.userinfotime.recommendationCount = data.userinfotime.recommendationCount+ 1
        }
    })
}

useEffect(()=>{
    axios.get( `http://localhost:5000/allcomment/${data._id}`, {withCredentials : true})
    .then((res)=>{
      console.log(res)
    })
}, [data._id])
console.log(typeof data.userinfotime.recommendationCount)
  return (
    <div className="my-[50px]">
      <div className="container mx-auto px-[20px]">
        <div>
          <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="flex-1">
              <img src={data.productImageurl} alt="" />
            </div>
            <div className="px-6 py-8  flex-1">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.queryTItle}</div>
                <p className="text-gray-700 ">
                  Product Name:{" "}
                  <span className="font-semibold">{data.productName}</span>
                </p>
                <p className="text-gray-700 ">
                  Brand Name:{" "}
                  <span className="font-semibold">{data.productBrand}</span>
                </p>
                <p className="text-gray-700 ">
                  Alteration Reason:{" "}
                  <span className="font-semibold">
                    {data.boycottingDetails}
                  </span>
                </p>
                <p className="text-gray-700 ">
                  Date Posted:{" "}
                  <span className="font-semibold">
                    {data.userinfotime.currentTime}
                  </span>
                </p>
                <p className="text-gray-700 ">
                  Recommendation Count:{" "}
                  <span className="font-semibold">
                    {data.userinfotime.recommendationCount}
                  </span>
                </p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div>
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={data.userinfotime.Uphoto}
                      alt="data"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {data.userinfotime.cName}
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[50px]">
            <div className="container mx-auto px-[20px]">
                <div>

                    <h2 className="text-4xl font-[600] text-center">Add Query for Better Alternatives</h2>
                </div>
                <div className="mt-[60px]"> 
                    <form onSubmit={handelAddSubmit}>
                        <div className="grid lg:grid-cols-3 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Recommendation Product Name</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="recommendproductName"  type="text" placeholder="Recommendation Product Name" />
                            </div>
                            
                            <div className="">
                                <label htmlFor="">Recommendation TItle</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="recomentqueryTItle"  type="text" placeholder="Recommendation TItle" />
                            </div>
              
                            <div>
                                <label htmlFor="">Recommendation product Image-URL</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="recomentproductImageurl"  type="text" placeholder="Recommendation product Image-URL" />
                            </div>
                        </div>
                        
                        <div className="mt-[20px]">
                            <div className="">
                                <label htmlFor="">Recommendation Reason </label>
                                <textarea required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="recomentboycottingDetails" id="" cols="30" rows="5" placeholder="Recommendation Reason"></textarea>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="">
                                <button className="w-full py-[10px] bg-gray-200">Add Recommendation</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default QueryDetails;
