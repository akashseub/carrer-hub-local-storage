import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-6xl font-bold mb-4">
        Ooops! you got <span className="text-red-600">error</span>
      </h1>
      <button className="btn btn-primary">
        <NavLink to={"/"}>Home</NavLink>
      </button>
    </div>
  );
};

export default ErrorPage;
