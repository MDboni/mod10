import { Link } from "react-router-dom"
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";


const Navbar = ({children}) => {
    const {user ,SingOutUser} = useContext(AuthContext)
    
    const SingOut = ()=>{
        SingOutUser()
         .then(result=>{
            console.log(result.user);          
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
  return (
    <div className="">
        <div className="navbar bg-base-100 header  max-w-6xl mx-auto sticky-bar">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                     <li>
                    <details>
                    <summary>Home</summary>
                    <ul className="p-2">
                        <li><a>Home 1</a></li>
                        <li><a>Home 2</a></li>
                        <li><a>Home 3</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Blog</summary>
                    <ul className="p-2">
                        <li><a>Home 1</a></li>
                        <li><a>Home 2</a></li>
                        <li><a>Home 3</a></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Find a Job</summary>
                    <ul className="p-2">
                        <li><a>Home 1</a></li>
                        <li><a>Home 2</a></li>
                        <li><a>Home 3</a></li>
                    </ul>
                    </details>
                </li>
                <li className="ml-3">
                    <details>
                    <summary className="border border-dashed border-b hover:border-blue-500 cursor-pointer ">Dashboard</summary>
                    <ul className="p-2">
                        <li><a>Home 1</a></li>
                        <li><a>Home 2</a></li>
                        <li><a>Home 3</a></li>
                    </ul>
                    </details>
                </li>
                
                </ul>
                </div>
                {/* navbar logo  */}
                <a className="cursor-pointer text-xl">
                  <img src="https://jobbox-html-frontend.vercel.app/assets/imgs/template/jobhub-logo.svg" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
             <ul className="menu menu-horizontal font-semibold px-1">
                <li className="relative group">
                    <Link to={`/`} className="cursor-pointer  border-b hover:border-blue-500 px-4 py-2 rounded">
                    Home
                    </Link>
                    <ul className="absolute hidden group-hover:block bg-base-100 p-2 rounded shadow w-40 z-10 top-full left-0">
                    <li><a>Home 1</a></li>
                    <li><a>Home 2</a></li>
                    <li><a>Home 3</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a className="cursor-pointer px-4 py-2 rounded">Blog</a>
                    <ul className="absolute hidden group-hover:block bg-base-100 p-2 rounded shadow w-40 z-10 top-full left-0">
                    <li><a>Blog 1</a></li>
                    <li><a>Blog 2</a></li>
                    <li><a>Blog 3</a></li>
                    </ul>
                </li>
                <li className="relative group">
                    <a className="cursor-pointer px-4 py-2 rounded">Find a Job</a>
                    <ul className="absolute hidden group-hover:block bg-base-100 p-2 rounded shadow w-40 z-10 top-full left-0">
                    <li><a>Job 1</a></li>
                    <li><a>Job 2</a></li>
                    <li><a>Job 3</a></li>
                    </ul>
                </li>
                <li className="relative group ml-3">
                    <a className="cursor-pointer border border-dashed border-b hover:border-blue-500 px-4 py-2 rounded">Dashboard</a>
                    <ul className="absolute hidden group-hover:block bg-base-100 p-2 rounded shadow w-40 z-10 top-full left-0">
                    <li><a>Dash 1</a></li>
                    <li><a>Dash 2</a></li>
                    <li><a>Dash 3</a></li>
                    </ul>
                </li>
                </ul>


            </div>
            <div className="navbar-end">
                {
                    user ?
                     <>
                       <p className="mr-3 border border-dashed p-1">{user.email}</p>
                       <button onClick={SingOut} className="mr-4 btn bg-[#3b63f5] text-white border-b-1 font-semibold transition transform hover:translate-y-1">Sing Out</button>
                     </> 
                     : 
                     <>
                       <Link to={`/signUp`} className="mr-4 border-b-1 font-semibold transition transform hover:translate-y-1">Register</Link>
                       <Link to={`/signIn`} className="btn bg-[#3b63f5] text-white  transition transform hover:-translate-y-1" >Sign in</Link>
                     </>
                }
                
            </div>
        </div>
        {children}
    </div>
  )
}

export default Navbar