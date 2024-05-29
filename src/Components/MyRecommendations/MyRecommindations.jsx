import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const MyRecommindations = () => {
  const { user } = useContext(AuthUserContext);
  const [mycomment, setMycomment] = useState([]);
  console.log(user.email);
  useEffect(() => {
    axios
      .get(`https://crud-server-alternative-product.vercel.app/mycomment/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMycomment(res.data);
      });
  }, [user?.email]);
  const handeldelete = (id, pid) => {
    const ids = {id : pid}
    console.log(pid)
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
        axios
          .post(`https://crud-server-alternative-product.vercel.app/deleteProduct/${id}`, ids, {withCredentials:true})
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const finial = mycomment.filter((ind)=> ind._id !== id);
              setMycomment(finial)
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
 if( mycomment.length === 0){
  return <p className="text-4xl text-center mt-[80px] text-gray-400">Not Found Any Data</p>
 }
  return (
    <div className="container mx-auto px-[20px] my-[50px]">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Title</th>
              <th>Create At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mycomment.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      className="w-[40px] h-[40px]"
                      src={item.reproductImageurl}
                      alt=""
                    />
                  </td>
                  <td>{item.ReProduct}</td>
                  <td>{item.requeryTItle}</td>
                  <td>{item.currentTime}</td>
                  <td>
                    <button
                      className="bg-red-400 px-[20px] py-[8px] text-white"
                      onClick={() => handeldelete(item._id, item.queryId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommindations;
