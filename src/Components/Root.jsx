import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Root() {
  return (
    <div>
      <div className="container mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Root;
