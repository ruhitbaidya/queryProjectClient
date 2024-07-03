import axios from "axios";
import SecureAxis from "../Hooks/SecureAxis";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import { useEffect } from "react";

const Cardpage = () => {
  const [data, refetch] = SecureAxis();
  const {setMoney } = useContext(AuthUserContext)
  const totalPrice = data.data.reduce((a, b)=> a + parseInt(b.price) , 0);
 
  useEffect(()=>{
    setMoney(totalPrice)
  }, [setMoney, totalPrice])
  const handeCardDelete = (id)=>{
    axios.delete(`http://localhost:5000/deleteCardProduct/${id}`,{withCredentials : true})
    .then((res)=> {
        console.log(res)
        if(res.data.deletedCount > 0){
            refetch()
        }
    })
  }
  return (
    <div className="container mx-auto">
      <div className="w-[60%] mx-auto">
        <div className="flex justify-between items-center mb-[20px]">
            <div className="text-[20px] font-[600]">
                Total Price : ${totalPrice}
            </div>
            <div>
                <Link to="/checkOut">
                <button className="btn">Pay Now</button>
                 </Link>
                
            </div>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                 {
                    data?.data.map((item)=>{
                        return  <tr key={item._id}>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{item.name}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge badge-ghost badge-sm">
                            ${item.price}
                          </span>
                        </td>
                        <th>
                          <button onClick={()=> handeCardDelete(item._id)} className="btn btn-ghost btn-xs">Delete</button>
                        </th>
                      </tr>
                    })
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardpage;
