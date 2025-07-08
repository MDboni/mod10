import { FaRegAddressBook } from "react-icons/fa";
const JobBox = ({item}) => {
    const {company_logo,category,location,title,jobType,status,responsibilities,salaryRange} = item
  return (
    <div className="mb-4">
        <div className="card mb-9 bg-base-100 shadow-sm">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">Most Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">
                     <img src={company_logo} alt="" />
                  </h2>
                  <div >
                    <h2>{category}</h2>
                    <address className="flex flex-row items-center gap-2 font-semibold text-blue-400"><FaRegAddressBook />{location}</address>
                  </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <div className="flex">
                        <p className="flex items-center gap-2 mt-1"><FaRegAddressBook/>{jobType}</p>
                        <p className="flex items-center gap-2 mt-1"><FaRegAddressBook/>{status}</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, at!</p>
                <p>{responsibilities}</p>
                <div className="flex gap-5 items-center mt-4">
                    <h2 className="text-xl font-bold">{salaryRange.min}/Hour</h2>
                    <button className="btn bg-gray-400">Apply NOW</button>
                </div>
                <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobBox