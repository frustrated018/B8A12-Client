import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const MainLayout = () => {
  return (
    <>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default MainLayout;
