import { useEffect, useState } from "react"
import Navbar from "../Layout/Navbar"
import useAuth from "../Hooks/UseAuth"
import axios from "axios"

const MyPostedJobs = () => {
    const [addjobs,setAddjobs] = useState([])
    const {user} = useAuth()

    useEffect(()=>{
        // fetch(`http://localhost:5000/job?email=${user.email}`)
        // .then(res => res.json())
        // .then( data => {
        //     setAddjobs(data)
        // })
        axios.get(`http://localhost:5000/job?email=${user.email}`,{withCredentials:true})
        .then(res => setAddjobs(res.data))
        
    },[user?.email])

    const handleDelete = (id) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this job?");
      if (confirmDelete) {
        fetch(`http://localhost:5000/job/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              alert("Job deleted successfully");
              setAddjobs(prev => prev.filter(job => job._id !== id));
            }
          });
        }
     };

  return (
    <Navbar>
        <h2>asdas:{addjobs.length}</h2>
        <div className="overflow-x-auto max-w-4xl mx-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>jobtype</th>
                      <th>hr_email</th>
                      <th>applicationDeadline</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                      addjobs.map((item,i) => (
                        <tr key={i}>
                          <th>{i+1}</th>
                          <td>{item.title}</td>
                          <td>{item.jobtype}</td>
                          <td>{item.hr_email}</td>
                          <td>{item.applicationDeadline}</td>
                          <td><button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"> ❌</button></td>
                       </tr>
                   
                      ))
                    }
                  </tbody>
          </table>
</div>
    </Navbar>
  )
}

export default MyPostedJobs