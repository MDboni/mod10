import { useNavigate, useParams } from "react-router-dom"
import useAuth from "../Hooks/UseAuth"
import Navbar from "../Layout/Navbar"
import Swal from "sweetalert2"

const JobApply = () => {
    const {id} = useParams()
    const {user} = useAuth()
    const Navigate = useNavigate()
    console.log(user);
    
    const ApplyHandel = e=>{
        e.preventDefault()
        const github = e.target.github.value
        const linkdin = e.target.linkdin.value
        const facebook = e.target.facebook.value
        
        const jobApplicent = {
            job_id:id,
            Applicent_email:user.email,
            github,linkdin,facebook
        }

        fetch("http://localhost:5000/jobApplicent",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplicent)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
                });
            }
            Navigate('/deshboard')
            e.target.reset()
        })

        
    }
  return (
    <Navbar>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Apply Job!</h1>
                
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={ApplyHandel}>
                        <fieldset className="fieldset">
                            <div>
                                <label className="label">GitHub Url</label>
                                <input type="url" name="github" className="input" placeholder="Url link" />
                            </div>                   
                            <div>
                                <label className="label">Llink din</label>
                                <input type="url" name="linkdin" className="input" placeholder="Email" />
                            </div>                   
                            <div>
                                <label className="label">Email</label>
                                <input type="url" name="facebook" className="input" placeholder="Email" />
                            </div>                   
                            <button className="btn btn-neutral mt-4">Submit</button>
                        </fieldset>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </Navbar>
  )
}

export default JobApply