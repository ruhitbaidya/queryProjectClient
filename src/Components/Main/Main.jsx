import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


const Main = () => {
  return (
    <>
        <Navbar></Navbar>
        <div className="min-h-[48vh]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Main