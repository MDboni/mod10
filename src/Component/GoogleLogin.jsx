import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { useLocation, useNavigate } from "react-router-dom"

const GoogleLogin = () => {
    const { GoogleUser } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from || "/";
    const Navigate = useNavigate()
    const GoogleHandel = ()=>{
        GoogleUser()
        .then(result=>{
            console.log(result.user);
            Navigate(from)
        })
        .catch(error=>{
            console.log(error.message);
            
        })
    }
  return (
    <div>
        <button onClick={GoogleHandel} className="btn">Google</button>
    </div>
  )
}

export default GoogleLogin