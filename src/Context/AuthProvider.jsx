import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../Fairebase/Fairebase.init"

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const CreateUser = (email,password) => {
       setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>{
            if(currentUser){
                console.log("user logged in",currentUser);
                setUser(currentUser)
            }else{
                console.log("No user logged in");
                setUser(null)
            }
            setLoading(false)
         });
         return () =>{
            unsubscribe() ;
         }
    },[])

    const SingOutUser = () =>{
        setLoading(false)
        return signOut(auth)
    }

    const AuthInfo = {
       user,
       loading,
       CreateUser ,
       signIn ,
       SingOutUser
    }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider