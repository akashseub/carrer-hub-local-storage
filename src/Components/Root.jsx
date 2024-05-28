import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Root() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
