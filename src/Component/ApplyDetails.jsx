import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import { useEffect, useState } from "react";

const ApplyDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/job/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-xl font-semibold">Loading...</p>;
  }

  return (
    <Navbar>
      <div className="max-w-xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white">
        <img src={job.company_logo} alt="Company Logo" className="w-24 mb-4" />
        <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
        <p className="text-gray-600 mb-2">Category: {job.category}</p>
        <p className="text-gray-600 mb-2">Location: {job.location}</p>
        <p className="text-gray-600 mb-2">Job Type: {job.jobType}</p>
        <p className="text-gray-600 mb-2">Status: {job.status}</p>
        <p className="text-gray-800 mt-4">{job.responsibilities}</p>
        <p className="text-xl font-semibold mt-4">Salary: {job.salaryRange?.min} / Hour</p>

        <div className="card-actions justify-end mt-6">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </Navbar>
  );
};

export default ApplyDetails;
