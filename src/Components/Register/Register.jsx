import { useContext } from "react";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { AiFillProduct } from "react-icons/ai";
const Register = () => {
  const {signUpEmailPassword, userUpdate } = useContext(AuthUserContext);
  const navigate = useNavigate()
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const infos = { displayName: name, photoURL:photo }
    signUpEmailPassword(email, password)
    .then(()=>{
      userUpdate(infos)
      .then((result)=>{
        console.log(result)
        toast.success("User Create Successfully");
        navigate("/")
        window.location.reload();
      })
      .catch((err)=>{
        toast.error(err.message.split(":")[1])
      })
    })
    .catch((err)=>{
      toast.error(err.message.split(":")[1])
    })
  }
  return (
    <>
      <section className=" dark:bg-gray-900">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
          <ToastContainer />
            <div className="lg:w-1/2">
            <div className="flex text-[30px] items-center gap-[5px]">
              <AiFillProduct />
              <span>Prod Genius</span>
            </div>
              <h1 className="mt-4  dark:text-gray-300 md:text-lg">
                Welcome back
              </h1>
              <h1 className="mt-4 text-2xl font-medium  capitalize lg:text-3xl dark:text-white">
                Sign up  your account
              </h1>
            </div>
            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form onSubmit={handelSubmit} className="w-full lg:max-w-xl">
                <div className="relative flex items-center mb-4">
                  <input
                    name="name"
                    type="text"
                    className="block w-full py-3  border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Name"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    className="block w-full py-3   border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="password"
                    type="password"
                    className="block w-full px-5 py-3  dark:text-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="photo"
                    type="text"
                    className="block w-full px-5 py-3  border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="mt-[20px]">
                  <button className="bg-blue-500 btn-block text-gray-100 py-[10px] rounded-lg">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
