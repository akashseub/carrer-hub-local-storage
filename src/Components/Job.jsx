import { VscLocation } from "react-icons/vsc";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  //console.log(job);

  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  //console.log(logo);

  return (
    <div className="border border-gray-500 p-8 space-y-4">
      <img className="w-32" src={logo} alt="" />
      <h1 className="text-2xl font-semibold">{job_title}</h1>
      <p>{company_name}</p>
      <div className="flex space-x-4">
        <h6 className="border border-blue-400 p-2 rounded-lg">
          {remote_or_onsite}
        </h6>
        <h6 className="border border-blue-400 p-2 rounded-lg">{job_type}</h6>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center">
          <VscLocation className="text-2xl"></VscLocation>
          <p>{location}</p>
        </div>
        <div className="flex items-center">
          <CiDollar className="text-2xl"></CiDollar>
          <p>Salary : {salary}</p>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
