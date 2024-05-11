import { useLoaderData } from "react-router-dom";

const QueryDetails = () => {
  const { data } = useLoaderData();
  console.log(data);
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
                      alt="User"
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
                    <form >
                        <div className="grid lg:grid-cols-3 gap-[30px] mt-[20px]">
                            <div className="">
                                <label htmlFor="">Recommendation Product Name</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productName"  type="text" placeholder="Recommendation Product Name" />
                            </div>
                            
                            <div className="">
                                <label htmlFor="">Recommendation TItle</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="queryTItle"  type="text" placeholder="Recommendation TItle" />
                            </div>
              
                            <div>
                                <label htmlFor="">Recommendation product Image-URL</label>
                                <input required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="productImageurl"  type="text" placeholder="Recommendation product Image-URL" />
                            </div>
                        </div>
                        
                        <div className="mt-[20px]">
                            <div className="">
                                <label htmlFor="">Recommendation Reason </label>
                                <textarea required className="w-full focus:outline-none px-[10px] py-[10px] bg-gray-200" name="boycottingDetails" id="" cols="30" rows="5" placeholder="Recommendation Reason"></textarea>
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
