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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px] mt-[50px]">
        {product.slice(0, 6).map((item)=>{
            return  <div key={item.id} className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img
              className="object-cover w-full h-64"
              src={item.productImageurl}
            />
            <div className="p-6">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  {item.productBrand}
                </span>
                <a
                  href="#"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabIndex={0}
                  role="link"
                >
                  {item.queryTItle}
                </a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.productName}</p>
                <p className="mt-2 text-sm  text-center text-gray-200 dark:text-gray-400 bg-red-400">
                  {item.boycottingDetails}
                </p>
              </div>
              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-10 w-10 rounded-full"
                      src={item.userinfotime.Uphoto}
                    />
                    <a
                      href="#"
                      className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                      tabIndex={0}
                      role="link"
                    >
                      {item.userinfotime.cName}
                    </a>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    {item.userinfotime.currentTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        })}
    </div>
  )
}

export default ProducsShow



{/* <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
  <img
    className="object-cover w-full h-64"
    src={item.productImageurl}
  />
  <div className="p-6">
    <div>
      <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
        {item.productBrand}
      </span>
      <a
        href="#"
        className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
        tabIndex={0}
        role="link"
      >
        {item.queryTItle}
      </a>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {item.boycottingDetails}
      </p>
    </div>
    <div className="mt-4">
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            className="object-cover h-10 rounded-full"
            src={item.userinfotime.Uphoto}
          />
          <a
            href="#"
            className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
            tabIndex={0}
            role="link"
          >
            {item.userinfotime.cName}
          </a>
        </div>
        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
          {item.userinfotime.currentTime}
        </span>
      </div>
    </div>
  </div>
</div> */}




{/* <div key={item._id} className="rounded card p-[15px] border border-gray-400 shadow-lg dark:text-white flex-col gap-[25px] justify-between">
         
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
       </div>   */}