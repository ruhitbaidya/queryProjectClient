import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import { AiFillProduct } from "react-icons/ai";
import axios from "axios";
import { IoIosLogOut } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import "./style.css";
import SecureAxis from "../Hooks/SecureAxis";
function Navbar() {
  const [data] = SecureAxis();
  const [modeCh, setModeCh] = useState(true);
  const { user, logouruser } = useContext(AuthUserContext);

  const handelLogout = () => {
    axios
      .get(`https://query-project-server.vercel.app/logutUser`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        location.reload();
      });

    logouruser().then((result) => {
      console.log(result);
    });
  };

  const modeChange = (text) => {
    const tags = document.getElementsByTagName("html")[0];
    console.log(tags);
    if (text === "dark") {
      tags.setAttribute("data-theme", "dark");
      setModeCh(!modeCh);
    } else {
      tags.setAttribute("data-theme", "light");
      setModeCh(!modeCh);
    }
  };

  const navlink = (
    <>
      {user ? (
        <>
          <li className="active:border-b-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allQuery">Queries</NavLink>
          </li>
          <li>
            <NavLink to="/recommendationsForMe">Recommendations For Me</NavLink>
          </li>
          <li>
            <NavLink to="/myQueries">My Queries</NavLink>
          </li>
          <li>
            <NavLink to="/myRecommendations"> My recommendations</NavLink>
          </li>
          <li>
            <NavLink to="/feature">Feature</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allQuery">Queries</NavLink>
          </li>
          <li>
            <NavLink to="/feature">Feature</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="shadow-lg shadow-gray-200/50 fixed top-0 z-10 right-0 left-0">
      <div className="navbar bg-base-100 container mx-auto dark:border-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <div className="flex items-center gap-[5px]">
              <AiFillProduct />
              <span>Prod Genius</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center">
            <div className="text-[22px] flex items-center">
              {modeCh ? (
                <>
                  <button onClick={() => modeChange("dark")}>
                    <FaMoon />{" "}
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button onClick={() => modeChange("light")}>
                    <CiSun />
                  </button>
                </>
              )}
            </div>
            {user ? (
              <>
                <Link to="/cardPage">
                  <button className="btn mx-[10px]">
                    <FaShoppingCart className="text-[20px]" />
                    <div className="badge">{data?.data?.length}</div>
                  </button>
                </Link>

                <button
                  title="Logout"
                  onClick={handelLogout}
                  className="hidden mx-4 text-[22px] dark:text-gray-800 transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                  aria-label="show notifications"
                >
                  <IoIosLogOut />
                </button>
                <button
                  type="button"
                  className="flex items-center focus:outline-none"
                  aria-label="toggle profile dropdown"
                >
                  <div className="ml-[10px] w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                    <img
                      src={user.photoURL}
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  {/* <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                    {user ?.displayName}
                  </h3> */}
                </button>
              </>
            ) : (
              <>
                <button className="hidden mx-4  transition-colors duration-300 transform lg:block  dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none">
                  <Link to="/login">Login</Link>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
