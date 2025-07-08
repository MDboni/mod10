import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

const GoogleLogin = () => {
    const { GoogleUser } = useContext(AuthContext)
    const Navigate = useNavigate()
    const GoogleHandel = ()=>{
        GoogleUser()
        .then(result=>{
            console.log(result.user);
            Navigate('/')
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