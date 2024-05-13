import { useContext, useEffect, useState } from "react";
import bgimge from "../../assets/addpng.png";
import "./style.css";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
const MyQueries = () => {
  const [myData, setMyData] = useState([]);
  const { user } = useContext(AuthUserContext);
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getProductByEmail?email=${email}`, {
        withCredentials: true,
      })
      .then((res) => {
        const finddata = res.data.sort((a, b) => b.createAt - a.createAt);
        setMyData(finddata);
      });
  }, [email]);
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            const finial = myData.filter((ids) => ids._id !== id);
            setMyData(finial);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(myData);
  return (
    <div className="my-[50px]">
      <div className="findMoreImage ">
        <div className="container mx-auto px-[20px]">
          <div className="bg-colors-ne rounded-lg">
            <div className="flex  items-center relative">
              <img className="h-[300px]" src={bgimge} alt="" />
              <div className=" w-[100%] absolute text-center">
                <h2 className="text-white text-5xl font-[600] mb-[20px]">
                  Seek Better Alternatives
                </h2>
                <button className="btn btn-outline hover:outline-none text-white hover:bg-gray-200 hover:text-gray-700 border border-white">
                  <Link to="/addQuery">Add Query </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[20px] my-[50px]">
        {myData.length !== 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[25px]">
              {myData.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex-col justify-between gap-[15px] card p-[15px] border border-gray-400 rounded shadow-lg"
                  >
                    <img
                      className="w-full h-[200px]"
                      src={item.productImageurl}
                      alt="Product"
                    />
                    <div className="">
                      <div className="font-bold text-xl mb-2">
                        {item.queryTItle}
                      </div>
                      <p className="text-gray-700 ">
                        Product Name:{" "}
                        <span className="font-semibold">
                          {item.productName}
                        </span>
                      </p>
                      <p className="text-gray-700 ">
                        Brand Name:{" "}
                        <span className="font-semibold">
                          {item.productBrand}
                        </span>
                      </p>
                      <p className="text-gray-700 ">
                        Alteration Reason:{" "}
                        <span className="font-semibold">
                          {item.boycottingDetails}
                        </span>
                      </p>
                      <p className="text-gray-700 ">
                        Date Posted:{" "}
                        <span className="font-semibold">
                          {item.userinfotime.currentTime}
                        </span>
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-[5px] items-center">
                      <Link to={`/queryDetails/${item._id}`}>
                        <button className="w-full bg-green-400 py-[7px] rounded-lg text-white">
                          View Details
                        </button>
                      </Link>

                      <Link to={`/queryUpdate/${item._id}`}>
                        <button className="w-full bg-yellow-400 py-[7px] rounded-lg text-white">
                          Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handelDelete(item._id)}
                        className="w-full bg-red-500 py-[7px] rounded-lg text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <h3 className="text-gray-400 text-3xl text-center my-[50px]">
              You Have No Product Add Click Top Up button Then You Can Add Your
              Product
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default MyQueries;
