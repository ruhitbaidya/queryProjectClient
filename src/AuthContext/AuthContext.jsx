import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import auth from "../firebase/firebase";

export const AuthUserContext = createContext(null)
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(auth)
  const googlesignIn = () => {
    setLoading(true)
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }
  const logouruser = () => {
    return signOut(auth)
  }
  const signUpEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginwithEmailPass = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userUpdate = (info)=>{
    return updateProfile(auth.currentUser, info)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (users) => {
      setUser(users);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])
  const infos = { user, loading, setLoading, googlesignIn, logouruser, signUpEmailPassword,loginwithEmailPass, userUpdate }
  return (
    <AuthUserContext.Provider value={infos}>
      {children}
    </AuthUserContext.Provider>
  )
}

export default AuthContext