

const AddQueryPage = () => {
    return (
        <div className="my-[50px]">
            <div className="container mx-auto px-[20px]">
                <div>
                    <h2 className="text-4xl font-[600] text-center">Add Query for Better Alternatives</h2>
                </div>
                <div className="mt-[60px]"> 
                    <form>
                        <div className="grid lg:grid-cols-3 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Product Name</label>
                                <input className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productName"  type="text" placeholder="Product Name" />
                            </div>
                            <div>
                                <label htmlFor="">Product Brand</label>
                                <input className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productBrand"  type="text" placeholder="Product Brand" />
                            </div>
                            <div>
                                <label htmlFor="">Product Image-URL</label>
                                <input className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productImageurl"  type="text" placeholder="Product Image-URL" />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-1 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Query TItle</label>
                                <input className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="queryTItle"  type="text" placeholder="Query TItle" />
                            </div>
                        </div>
                        <div className="mt-[20px]">
                            <div className="">
                                <label htmlFor="">Boycotting Reason Details</label>
                                <textarea className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="boycottingDetails" id="" cols="30" rows="5" placeholder="Boycotting Reason Details"></textarea>
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
