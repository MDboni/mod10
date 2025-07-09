import { useEffect, useState } from "react"
import useAuth from "../Hooks/UseAuth"
import Footer from "../Layout/Footer"
import Navbar from "../Layout/Navbar"

const DashBoard = () => {
    const {user}=useAuth()
    const [jobs,setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/jobApplicent?email=${user.email}`)
        .then(res => res.json())
        .then(date => {
            setJobs(date)
        })
    },[user.email])

  return (
    <Navbar>
         <div className="overflow-x-auto">
  <table className="table max-w-6xl mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        jobs.map(job => (
            <tr key={job._id}>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src={`job.company_logo`} />
                        
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{job.title}</div>
                    <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                </div>
                </td>
                <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                <button className="btn btn-ghost btn-xs">x</button>
                </th>
            </tr>
        ))
     }
    
    </tbody>
  </table>
</div>
        <Footer/>
    </Navbar>
    
  )
}

export default DashBoard