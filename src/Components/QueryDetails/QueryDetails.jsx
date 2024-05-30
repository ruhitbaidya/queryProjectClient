import { useLoaderData } from "react-router-dom";
import DateAtime from "../CurrentDateAndTime/DateAtime";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";

const QueryDetails = () => {
  const [comment, setComment] = useState([]);
  const { data } = useLoaderData();
  const [counts, setCounts] = useState(data?.userinfotime?.recommendationCount);
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

 

    axios.post("https://ruhitproductserver.vercel.app/comment", infos,{withCredentials : true})
    .then((res)=> {
        if(res.data.insertedId){
            toast.success("successfully Create Product")
            form.reset();
            setComment([...comment, infos])
            setCounts(counts + 1)
        }
    })
}

useEffect(()=>{
    axios.get( `https://ruhitproductserver.vercel.app/allcomment/${data._id}`, {withCredentials : true})
    .then((res)=>{
      setComment(res.data)
    })
}, [data._id])
console.log(counts)
  return (
    <div className="my-[50px]">
      <div className="container mx-auto px-[20px]">
        <div>
          <div className="lg:flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="flex-1 flex items-center justify-center">
              <img src={data.productImageurl} alt="" />
            </div>
            <div className="px-6 py-8  flex-1">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.queryTItle}</div>
                <p className="dark:text-gray-700 ">
                  Product Name:{" "}
                  <span className="font-semibold">{data.productName}</span>
                </p>
                <p className="dark:text-gray-700 ">
                  Brand Name:{" "}
                  <span className="font-semibold">{data.productBrand}</span>
                </p>
                <p className="dark:text-gray-700 ">
                  Alteration Reason:{" "}
                  <span className="font-semibold">
                    {data.boycottingDetails}
                  </span>
                </p>
                <p className="dark:text-gray-700 ">
                  Date Posted:{" "}
                  <span className="font-semibold">
                    {data.userinfotime.currentTime}
                  </span>
                </p>
                <p className="dark:text-gray-700 ">
                  Recommendation Count:{" "}
                  <span className="font-semibold">
                    {counts}
                  </span>
                </p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="w-8 h-8 rounded-full mr-4"
                      src={data.userinfotime.Uphoto}
                      alt="data"
                    />
                    <div className="text-sm">
                      <p className="dark:text-gray-900 leading-none">
                        {data.userinfotime.cName}
                      </p>
                    </div>
                  </div>
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
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="recommendproductName"  type="text" placeholder="Recommendation Product Name" />
                            </div>
                            
                            <div className="">
                                <label htmlFor="">Recommendation TItle</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="recomentqueryTItle"  type="text" placeholder="Recommendation TItle" />
                            </div>
              
                            <div>
                                <label htmlFor="">Recommendation product Image-URL</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="recomentproductImageurl"  type="text" placeholder="Recommendation product Image-URL" />
                            </div>
                        </div>
                        
                        <div className="mt-[20px]">
                            <div className="">
                                <label htmlFor="">Recommendation Reason </label>
                                <textarea required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="recomentboycottingDetails" id="" cols="30" rows="5" placeholder="Recommendation Reason"></textarea>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="">
                                <button className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">Add Recommendation</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-[20px] my-[50px]">
          
          {
            comment.length !== 0 ?   comment.map((item)=>{
              return <div key={item._id} className="rounded-lg flex gap-[30px] items-center mt-[10px] p-[20px] block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600">
              <div>
                <img className="w-[80px] h-[80px]" src={item?.reproductImageurl} alt="" />
              </div>
              <div>
                <h2 className="text-[20px] font-[600]">{item.requeryTItle}</h2>
                <p>{item.reboycottingDetails}</p>
                <p>{item.reName}</p>
                <p>{item.currentTime}</p>
              </div>
            </div>
            }) : <>
            <p className="text-3xl text-center font-[600] text-gray-400">No Recommendation In This Query</p>
        </>
          }
          
        </div>
    </div>
  );
};

export default QueryDetails;
