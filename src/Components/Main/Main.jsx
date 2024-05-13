import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"


const Main = () => {
  return (
    <>
      <div className="mb-[100px]">
        <Navbar></Navbar>
      </div>

      <div className="min-h-[48vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Main