import { useContext } from "react";
import { AuthUserContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router";
import {useLocation} from "react-router-dom"

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthUserContext);
    const pathNameUrl = useLocation()
    if(loading){
        return <div className="h-[70vh] flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={pathNameUrl.pathname} />
}

export default PrivateRouter
