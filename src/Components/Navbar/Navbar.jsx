import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { AuthUserContext } from "../../AuthContext/AuthContext";
import axios from "axios";
import "./style.css"
function Navbar() {
  const { user, logouruser } = useContext(AuthUserContext);
  console.log(user);

  const handelLogout = () => {
    axios
      .post(
        `http://localhost:5000/logutUser`,
        { email: "ruhitbaidya01@gmail.com" },
        { withCredentials: true }
      )
      .then((res) => console.log(res));

    logouruser().then((result) => {
      console.log(result);
    });
  };

  const navlink = (
    <>
      {user ? (
        <>
          <li>
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
        </>
      ) : (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allQuery">Queries</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 container mx-auto border border-b-2">
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
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <div className="flex items-center gap-[5px]">
            <AiFillProduct />
            <span>Prod Genius</span>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center mt-4 lg:mt-0">
          {user ? (
            <>
              <button
                onClick={handelLogout}
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                Logout
              </button>
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src={user.photoURL}
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                  {user?.displayName}
                </h3>
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
  );
}

export default Navbar;
