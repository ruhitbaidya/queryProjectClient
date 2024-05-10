import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthUserContext = createContext(null)
const AuthContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlesignIn = ()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  const infos = {user, loading, setLoading, googlesignIn}
  return (
      <AuthUserContext.Provider value={infos}>
        {children}
      </AuthUserContext.Provider>
  )
}

export default AuthContext