import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import {GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../Fairebase/Fairebase.init"
import axios from "axios";
const provider = new GoogleAuthProvider();

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

    const GoogleUser = () =>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth ,(currentUser)=>{
            if(currentUser){
                console.log("user logged in",currentUser?.email);

                if(currentUser.email){
                    const user = { email : currentUser.email}
                    axios.post('http://localhost:5000/jwt',user ,{  withCredentials:true})
                    .then(res => {
                        console.log(res.data) ;
                        setLoading(false)  
                    })
                }else{
                    axios.post('http://localhost:5000/logout', {} , {withCredentials:true})
                    .then(res=> {
                        console.log('logOut',res.data);
                        setLoading(false)
                    })
                    
                }

                setUser(currentUser)
            }else{
                console.log("No user logged in");
                setUser(null)
            }
            
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
       SingOutUser,
       GoogleUser
    }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider