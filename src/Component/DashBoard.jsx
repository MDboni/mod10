import { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";
import Footer from "../Layout/Footer";
import Navbar from "../Layout/Navbar";
import Swal from "sweetalert2";

const DashBoard = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobApplicent?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  const DeletHandel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobApplicent/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Job application has been deleted.", "success");
              setJobs(prevJobs => prevJobs.filter(job => job._id !== id));
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <Navbar>
      <div className="overflow-x-auto">
        <table className="table max-w-6xl mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Job Info</th>
              <th>Company</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <input type="checkbox" className="checkbox" />
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="logo" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.Applicent_email}</div>
                    </div>
                  </div>
                </td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs text-red-500"
                    onClick={() => DeletHandel(job._id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </Navbar>
  );
};

export default DashBoard;
