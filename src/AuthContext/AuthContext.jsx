import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthUserContext = createContext(null)
const AuthContext = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlesignIn = ()=>{
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
      unsubscribe();
    }
  }, [])
  const infos = {user, loading, setLoading, googlesignIn}
  return (
      <AuthUserContext.Provider value={infos}>
        {children}
      </AuthUserContext.Provider>
  )
}

export default AuthContext