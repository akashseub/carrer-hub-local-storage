import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  const intId = parseInt(id);

  const job = jobs.find((job) => job.id === intId);

  //console.log(job, intId);

  return (
    <div>
      <h1>Job Details of: {id}</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 border border-gray-400 space-y-4 p-2">
          <p>
            <span className="font-semibold">Job Description:</span>{" "}
            {job.job_description}
          </p>
          <p>
            <span className="font-semibold">Job Description:</span>{" "}
            {job.job_responsibility}
          </p>
          <div>
            <h2 className="font-semibold">Educational Requirements:</h2>
            <p>{job.educational_requirements}</p>
          </div>
          <div>
            <h2 className="font-semibold">Experience:</h2>
            <p>{job.experiences}</p>
          </div>
        </div>

        <div className="border border-gray-400"></div>
      </div>
    </div>
  );
};

export default JobDetails;
