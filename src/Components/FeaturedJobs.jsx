import { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  //console.log(jobs);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Featured Jobs: {jobs.length}</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            Show all jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
