// AllQuery

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsGrid } from "react-icons/bs";
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegSquare } from "react-icons/fa";
const AllQuery = () => {
  const [product, setProduct] = useState([]);
  const [grid, setGrid] = useState("3")
  useEffect(() => {
    axios
      .get("http://localhost:5000/findProduct", { withCredentials: true })
      .then((res) => {
        const finddata = res.data.sort((a, b) => b.createAt - a.createAt);
        setProduct(finddata);
      });
  }, []);
  const handelGridChange = (text)=>{
      if(text === "1"){
          setGrid(1)
      }
      if(text === "2"){
        setGrid(2)
      }
      if(text === "3"){
        setGrid(3)
      }
  }
  
  const handelSearch = (e)=>{
      e.preventDefault();
      const text = e.target.searchText.value;
      axios
      .get(`http://localhost:5000/searchproduct/${text}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
  }
  return (
    <div className="container mx-auto px-[20px] my-[50px]">
      <div className="my-[70px] grid grid-cols-2 gap-[30px]">
        <div >
          <form onSubmit={handelSearch}>
          <label className="input input-bordered flex items-center gap-2">
            <input name="searchText" type="text" className="grow" placeholder="Search" />
            <button className="bg-blue-600 text-white px-[20px] py-[7px] rounded-lg">
              search
            </button>
          </label>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <button onClick={()=> handelGridChange("1")} className="bg-blue-500 dark:bg-gray-100 text-white px-[30px] py-[12px] mr-[5px]"><FaRegSquare /></button>
          <button onClick={()=> handelGridChange("2")} className="bg-blue-500 dark:bg-gray-100 text-white px-[30px] py-[12px] mr-[5px]"><BsGrid /></button>
          <button onClick={()=> handelGridChange("3")} className="bg-blue-500 dark:bg-gray-100 text-white px-[30px] py-[12px] mr-[5px]"><BsGrid3X3 /></button>
        </div>
      </div>
      <div className={`grid grid-cols-${grid} gap-[25px]`}>
        {product.map((item) => {
          return (
            <div key={item._id} className="rounded card  shadow-lg p-[15px] border border-gray-400 flex-col justify-between gap-[25px]">
         
              <img
                className="w-full h-[200px] rounded-lg object-cover"
                src={item.productImageurl}
                alt="Product"
              />
          
              <div className="">
                <div className="font-bold text-xl mb-2">{item.queryTItle}</div>
                <p className=" ">
                  Product Name:{" "}
                  <span className="font-semibold">{item.productName}</span>
                </p>
                <p className=" ">
                  Brand Name:{" "}
                  <span className="font-semibold">{item.productBrand}</span>
                </p>
                <p className=" ">
                  Alteration Reason:{" "}
                  <span className="font-semibold">
                    {item.boycottingDetails}
                  </span>
                </p>
                <p className=" ">
                  Date Posted:{" "}
                  <span className="font-semibold">
                    {item?.userinfotime?.currentTime}
                  </span>
                </p>
                <p className=" ">
                  Recommendation Count:{" "}
                  <span className="font-semibold">
                    {item?.userinfotime?.recommendationCount}
                  </span>
                </p>
              </div>
              <div className="">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-4"
                    src={item?.userinfotime?.Uphoto}
                    alt="User"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">
                      {item?.userinfotime?.cName}
                    </p>
                  </div>
                </div>
              </div>
              <Link to={`/queryDetails/${item._id}`}>
                <button className="w-full border dark:border-gray-200 dark:bg-gray-800 dark:text-gray-800 py-[10px]">
                  Recommend
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllQuery;
