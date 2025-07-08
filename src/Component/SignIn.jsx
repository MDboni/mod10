import { useContext, useState } from "react"
import Navbar from "../Layout/Navbar"
import AuthContext from "../Context/AuthContext"
import Lottie from "lottie-react";
import loginLottoieanimation from "../assets/Latto/Animation - 1751800827616 (1).json"
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";


const SignIn = () => {
  const {signIn} = useContext(AuthContext)
  const [success,setSuccess] = useState(false)
  const[errorMessage,setErrorMessage] =useState('')
  const location = useLocation()
  const from = location.state?.from || "/";
  const navigate = useNavigate()
  

    const LoginhandleForm = e=>{
        e.preventDefault()
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        console.log(email,password);    
        
        signIn(email,password)
        .then(result=>{
            console.log(result.user); 
            setSuccess(true)
            e.target.reset()
            navigate(from)
        })
        .catch(error => {
            console.log(error.code, error.message);
            if (error.code === "auth/user-not-found") {
            setErrorMessage("No user found with this email.");
            } else if (error.code === "auth/wrong-password") {
            setErrorMessage("Invalid password. Please try again.");
            } else if (error.code === "auth/invalid-email") {
            setErrorMessage("Invalid email address.");
            } 
            else if (error.code === "auth/invalid-credential") {
            setErrorMessage("Invalid credentials. Please check your email and password.");
           } 
            else {
                setErrorMessage(error.message);
                }
                setSuccess(false);
            });

    }

  return (
    <Navbar>
        <div className="hero bg-base-200 mt-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* left side animation */}
          <div className="text-center md:w-[500px] w-[300px] ml-[60px] lg:text-left ml-5">
            <h1 className="text-5xl font-bold">Login now !</h1>
            <Lottie animationData={loginLottoieanimation} loop={true}/>
          </div>

          {/* right side form */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={LoginhandleForm}>
                <fieldset className="fieldset space-y-2">
                  
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                    required
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                    required
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Login
                  </button>
                  <GoogleLogin/>
                    {
                        success && <h2 className="text-green-600">Register Successfull!..</h2>
                    }
                    {
                        errorMessage && <h2> {errorMessage} </h2>
                    }
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default SignIn