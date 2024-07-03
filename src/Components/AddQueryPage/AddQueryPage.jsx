import { useContext } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import DateAtime from "../CurrentDateAndTime/DateAtime";
import { ToastContainer, toast } from 'react-toastify';
const AddQueryPage = () => {
    const {user} = useContext(AuthUserContext)
    const handelAddSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productBrand = form.productBrand.value;
        const productImageurl = form.productImageurl.value;
        const queryTItle = form.queryTItle.value;
        const boycottingDetails = form.boycottingDetails.value;
        const createAt = Date.now();
        const userinfotime = {userEmail : user.email, cName : user.displayName, Uphoto : user.photoURL, recommendationCount : 0, currentTime : DateAtime()}
        const infos = {productName, productBrand, productImageurl, queryTItle, boycottingDetails, userinfotime, createAt}

        axios.post("https://query-project-server.vercel.app/createProductAlternative", infos, {withCredentials : true})
        .then((res)=> {
            if(res.data.insertedId){
                toast.success("successfully Create Product")
                form.reset()
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="my-[50px]">
            <div className="container mx-auto px-[20px]">
                <div>
                    <ToastContainer />
                    <h2 className="text-4xl font-[600] text-center">Add Query for Better Alternatives</h2>
                </div>
                <div className="mt-[60px] dark:bg-gray-800"> 
                    <form onSubmit={handelAddSubmit}>
                        <div className="grid lg:grid-cols-3 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Product Name</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="productName"  type="text" placeholder="Product Name" />
                            </div>
                            <div>
                                <label htmlFor="">Product Brand</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="productBrand"  type="text" placeholder="Product Brand" />
                            </div>
                            <div>
                                <label htmlFor="">Product Image-URL</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="productImageurl"  type="text" placeholder="Product Image-URL" />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-1 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Query TItle</label>
                                <input required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="queryTItle"  type="text" placeholder="Query TItle" />
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="">
                                <label htmlFor="">Boycotting Reason Details</label>
                                <textarea required className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="boycottingDetails" id="" cols="30" rows="5" placeholder="Boycotting Reason Details"></textarea>
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="">
                                <button className="w-full py-[10px] bg-gray-200">Add Query</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddQueryPage
