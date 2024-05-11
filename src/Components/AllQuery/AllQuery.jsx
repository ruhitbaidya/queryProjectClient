// AllQuery 

import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AllQuery = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/findProduct", {withCredentials : true})
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        })
    }, [])
  return (
   <div className="container mx-auto px-[20px] my-[50px]">
     <div className="grid grid-cols-3 gap-[25px]">
        {product.map((item)=>{
            return  <div key={item._id} className="rounded shadow-lg p-[10px]">
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
                Date Posted: <span className="font-semibold">{item?.userinfotime?.currentTime}</span>
              </p>
              <p className="text-gray-700 ">
                  Recommendation Count:{" "}
                  <span className="font-semibold">
                    {item?.userinfotime?.recommendationCount}
                  </span>
                </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={item?.userinfotime?.Uphoto} alt="User" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{item?.userinfotime?.cName}</p>
                </div>
              </div>
            </div>
            <Link to={`/queryDetails/${item._id}`}>
            <button className="w-full bg-gray-400 py-[10px]">Recommend</button>
            </Link>
          </div>  
        })}
    </div>
   </div>
  )
}

export default AllQuery
