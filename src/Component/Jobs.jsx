import { useEffect, useState } from "react"
import JobBox from "./JobBox"

const Jobs = () => {
    const [jobitem,setJobitem] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/job')
        .then(res => res.json())
        .then( data => setJobitem(data))
    },[])
  return (
    <div>
        <div className="max-w-6xl grid md:grid-cols-4 grid-cols-1 gap-3 mx-auto">
            {
            jobitem.map(item => <JobBox key={item._id} item={item}/>)
          }
        </div>
    </div>
  )
}

export default Jobs