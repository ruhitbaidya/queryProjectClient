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
            return  <div key={item._id} className="rounded shadow-lg">
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
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={item.userinfotime.Uphoto} alt="User" />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">{item.userinfotime.cName}</p>
                </div>
              </div>
            </div>
          </div>  
        })}
    </div>
  )
}

export default ProducsShow