import { Outlet } from "react-router-dom";
import MainNav from "./common/MainNav";
import Mainheader from "./common/Mainheader";
import Footer from "./common/Footer";
const App = () => {
  return (
    <>
      <Mainheader />
      <MainNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
