import Lottie from "lottie-react";
import Navbar from "../Layout/Navbar";
import LattoImg from "../assets/Latto/Animation - 1751708350904 (1).json";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {

  const { CreateUser } = useContext(AuthContext)
  const[success,setSuccess] = useState(false) 
  const[errorMessage,setErrorMessage] =useState('')

   // reseat ayer jonnw 
//   setSuccess(false)



  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    const result = { name, email, password };
    console.log(result);

   

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least 1 uppercase, 1 lowercase letter, and be minimum 6 characters long.");
    return;
    }

    if (!terms) {
            alert("Please accept the terms and conditions.");
            return;
        }

    // faireBase auth 
    CreateUser(email,password)
    .then(result=>{
        console.log(result.user);
        setSuccess(true)
        e.target.reset()
    })
    .catch(error=>{
        console.log(error.message);
        setErrorMessage(error.message)
    })
  };

  return (
    <Navbar>
      <div className="hero bg-base-200 mt-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* left side animation */}
          <div className="text-center md:w-[500px] w-[300px] ml-9 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <Lottie animationData={LattoImg} loop={true} />
          </div>

          {/* right side form */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleForm}>
                <fieldset className="fieldset space-y-2">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    required
                  />
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
                  <label className="label">
                        <input type="checkbox" name="terms" defaultChecked className="checkbox" />
                        Accept All & termsCondition
                   </label>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Register
                  </button>
                   {
                        success && <h2 className="text-green-600">Register Successfull!..</h2>
                    }
                    {
                        errorMessage && <h2> {errorMessage} </h2>
                    }
                  <p>Already have an account? <Link to={`/signIn`} className="hover:text-blue-500 text-primary">Sign in</Link></p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Register;
