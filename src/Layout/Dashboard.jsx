import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineNoteAdd } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
// import { ImStatsDots } from "react-icons/im";
import { FaUsersCog } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserRole from "../Hooks/useUserRole";
const Dashboard = () => {
  // TODO: Check admin from DB
  const { userRole } = useUserRole();

  // Admin links
  // TODO: Activate site links when you make the pages
  const adminLinks = (
    <>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/userProfile">
          <FaUser></FaUser>
          Admin Profile
        </NavLink>
      </li>
      {/* <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/userProfile">
          <ImStatsDots />
          Site Stats
        </NavLink>
      </li> */}
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/manageusers">
          <FaUsersCog />
          Manage Users
        </NavLink>
      </li>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/managecupons">
          <AiFillGift />
          Manage Coupon
        </NavLink>
      </li>
    </>
  );

  // Moderator links
  const moderatorLinks = (
    <>
      {/* TODO: If you have the time add a All products page that will show all products status */}
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/productreviewqueue">
          <FaBook></FaBook>
          Product Review Queue
        </NavLink>
      </li>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/reportedproducts">
          <FaBook></FaBook>
          Reported Products
        </NavLink>
      </li>
    </>
  );

  // Common user links
  const commonUserLinks = (
    <>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/userProfile">
          <FaUser></FaUser>
          My Profile
        </NavLink>
      </li>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/addproduct">
          <MdOutlineNoteAdd />
          Add Product
        </NavLink>
      </li>
      <li className="bg-primary rounded-lg">
        <NavLink to="/dashboard/myproducts">
          <BsCollectionFill />
          My Products
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-secondary">
          <ul className="menu p-4 text-white space-y-1">
            {userRole === "admin" && adminLinks}
            {userRole === "moderator" && moderatorLinks}
            {userRole === "user" && commonUserLinks}

            {/* shared nav links */}
            <div className="divider"></div>
            <li className="bg-primary rounded-lg">
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li className="bg-primary rounded-lg">
              <NavLink to="/products">
                <FaBook></FaBook>
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
