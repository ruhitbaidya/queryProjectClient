import axios from "axios";
import { useLoaderData } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";


const UpdateQuery = () => {
    const {data} = useLoaderData();
    const {_id,productName, productBrand, productImageurl, queryTItle, boycottingDetails} = data
    const handelAddSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageurl = form.productImageurl.value;
        const queryTItle = form.queryTItle.value;
        const boycottingDetails = form.boycottingDetails.value;
        const infos = {productName, productBrand, productImageurl, queryTItle, boycottingDetails}
        console.log(infos)
        axios.put(`https://crud-server-alternative-product.vercel.app/updateProduct/${_id}`, infos,{withCredentials : true})
        .then((res)=> {
           if(res.data.modifiedCount > 0){
            toast.success("Successfully Update")
           }
        })
    }
  return (
    <div className="my-[50px]">
    <div className="container mx-auto px-[20px]">
        <div>
            <ToastContainer />
            <h2 className="text-4xl font-[600] text-center">Update Query for Better Alternatives</h2>
        </div>
        <div className="mt-[60px]"> 
            <form onSubmit={handelAddSubmit}>
                <div className="grid lg:grid-cols-3 gap-[30px] mt-[20px]">
                    <div className="">
                        <label htmlFor="">Product Name</label>
                        <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productName" defaultValue={productName}  type="text" placeholder="Product Name" />
                    </div>
                    <div>
                        <label htmlFor="">Product Brand</label>
                        <input required defaultValue={productBrand} className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productBrand"  type="text" placeholder="Product Brand" />
                    </div>
                    <div>
                        <label htmlFor="">Product Image-URL</label>
                        <input defaultValue={productImageurl} required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productImageurl"  type="text" placeholder="Product Image-URL" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-1 gap-[30px] mt-[20px]">
                    <div className="">
                        <label htmlFor="">Query TItle</label>
                        <input defaultValue={queryTItle} required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="queryTItle"  type="text" placeholder="Query TItle" />
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="">
                        <label htmlFor="">Boycotting Reason Details</label>
                        <textarea defaultValue={boycottingDetails} required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="boycottingDetails" id="" cols="30" rows="5" placeholder="Boycotting Reason Details"></textarea>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="">
                        <button className="w-full py-[10px] bg-gray-200">Update Query</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default UpdateQuery