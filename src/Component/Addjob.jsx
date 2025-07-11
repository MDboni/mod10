import Swal from 'sweetalert2'
import Navbar from '../Layout/Navbar'
import { useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/UseAuth'

const Addjob = () => {
    const Navigate = useNavigate()
    const {user} = useAuth()
    const HandelJob = e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const {min,max,currency, ...newJob} = data
        newJob.salaryRange = {min,max,currency}
        newJob.description = newJob.description.split('\n')
        newJob.requerments = newJob.requerments.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')
        console.log(newJob);

        fetch('http://localhost:5000/job',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then( data => {
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
            Navigate('/mypostedjobs')
            e.target.reset()
        })
    }
  return (
    <Navbar>
      <div className='py-10'>
        <div className="card bg-base-100 max-w-xl mx-auto shadow-2xl">
            {/* Form start */}
          <form onSubmit={HandelJob} className="card-body w-full">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">title</span>
              </label>
              <input type="text" name='title'  className="input input-bordered w-full" placeholder="title" />
            </div>
        {/* job location */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">job location</span>
              </label>
              <input type="text" name='joblocation' className="input input-bordered w-full" placeholder="Job location" />
            </div>
        {/* job type */}
            <div className="form-control w-full mt-4">
                <label className="label">
                    <span className="label-text">job Type</span>
                </label>
                <select defaultValue="job Type" name='jobtype' className="select input input-bordered w-full">
                    <option disabled={true}>Pick a Job</option>
                    <option>Full time</option>
                    <option>Part Time</option>
                    <option>Intern</option>
                </select>          
             </div>
        {/* job Dield */}
            <div className="form-control w-full mt-4">
                <label className="label">
                    <span className="label-text">job Field</span>
                </label>
                <select defaultValue="Pick a color" name='jobfield' className="select input input-bordered w-full">
                    <option disabled={true}>which job u want</option>
                    <option>engineer</option>
                    <option>maneger</option>
                    <option>desiginer</option>
                </select>          
             </div>

             {/* salary Range  */}

             <div className='grid  grid-cols-3 w-full items-end  gap-2 '>
                <div className="form-control   mt-4">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                   <input type="text" name='min' className="input input-bordered " placeholder="min" />
                </div>
                <div className="form-control  mt-4">
                   <input type="text" name='max' className="input input-bordered " placeholder="max" />
                </div>
                <div className="form-control w-full mt-4">
                        <select defaultValue="Pick a color" name='currency' className="select input input-bordered w-full">
                            <option disabled={true}>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EURO</option>
                        </select>          
                 </div>
             </div>
              {/* Description */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea w-full" name='description' placeholder="Description"></textarea>
            </div>
             {/* company name */}
             <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Company</span>
              </label>
              <input type="text" name='companyname' className="input input-bordered w-full" placeholder="Company NAme" />
            </div>
 {/* Description */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Requerments</span>
              </label>
              <textarea className="textarea w-full" name='requerments' placeholder="Requerments"></textarea>
            </div>
 {/* responsibilities */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">responsibilities</span>
              </label>
              <textarea className="textarea w-full" name='responsibilities' placeholder="responsibilities ..... Work with developers"></textarea>
            </div>
  {/* HR NAME */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">HR NAME</span>
              </label>
              <input type="text" name='hrname' className="input input-bordered w-full" placeholder="HR NAME" />
            </div>
  {/* Application DeadLine */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Application DeadLine</span>
              </label>
              <input type="date"  name='applicationDeadline' className="input input-bordered w-full" placeholder="Application DeadLine" />
            </div>
  {/* HR Email */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Hr Email</span>
              </label>
              <input type='email' defaultValue={user?.email} name='hr_email' className="input input-bordered w-full" placeholder="Job HR Email" />
            </div>
  {/* Company Logo  */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text">Company Logo</span>
              </label>
              <input type="url" name='companylogo' className="input input-bordered w-full" placeholder="Company Logo" />
            </div>

            <button className="btn btn-neutral mt-6 w-full">Submit</button>

             <div className="mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </Navbar>
  )
}

export default Addjob;
