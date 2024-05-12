import axios from "axios"
import { useEffect, useState } from "react"

const ProducsShow = () => {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/findProduct", {withCredentials : true})
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        })
    }, [])
  return (
    <div className="grid grid-cols-3 gap-[25px]">
        {product.slice(0, 6).map((item)=>{
            return  <div key={item._id} className="rounded card p-[15px] border border-gray-400 shadow-lg dark:text-white flex-col gap-[25px] justify-between">
         
            <img className="w-full rounded-lg h-[200px] object-cover" src={item.productImageurl} alt="Product" />
      
            <div className="">
              <div className="font-bold text-xl mb-2">{item.queryTItle}</div>
              <p className=" ">
                Product Name: <span className="font-semibold">{item.productName}</span>
              </p>
              <p className=" ">
                Brand Name: <span className="font-semibold">{item.productBrand}</span>
              </p>
              <p className=" ">
                Alteration Reason: <span className="font-semibold">{item.boycottingDetails}</span>
              </p>
              <p className=" ">
                Date Posted: <span className="font-semibold">{item.userinfotime.currentTime}</span>
              </p>
            </div>
            <div className="mt-[10px]">
              <div className="flex items-center">
                <img className="w-8 h-8 rounded-full mr-4" src={item.userinfotime.Uphoto} alt="User" />
                <div className="text-sm">
                  <p className="leading-none">{item.userinfotime.cName}</p>
                </div>
              </div>
            </div>
          </div>  
        })}
    </div>
  )
}

export default ProducsShow