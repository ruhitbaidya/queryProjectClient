import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import axios from "axios";


const Recommendations = () => {
  const [mycomment, setMyComment] = useState([]);
  const {user} = useContext(AuthUserContext)
  useEffect(()=>{
      axios.get(`http://localhost:5000/getOtherComment/${user.email}`, {withCredentials:true})
      .then((res)=>{
        setMyComment(res.data)
      })
  }, [user.email])
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
              <th>Email</th>
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
                    {item.reEmail}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Recommendations