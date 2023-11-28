import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineNoteAdd } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaUsersCog } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";

const Dashboard = () => {
  // TODO: Check admin from DB
  //   TODO: Make a modarator route as well
  const isAdmin = true;
  //   const isModarator = false;
  return (
    <>
      <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-secondary">
          <ul className="menu p-4 text-white space-y-1">
            {isAdmin ? (
              <>
                <li className="bg-primary rounded-lg">
                  <NavLink to="/dashboard/userProfile">
                    <ImStatsDots />
                    Site Stats
                  </NavLink>
                </li>
                <li className="bg-primary rounded-lg">
                  <NavLink to="/dashboard/manageusers">
                    <FaUsersCog />
                    Manage Users
                  </NavLink>
                </li>
                <li className="bg-primary rounded-lg">
                  <NavLink to="/dashboard/myproducts">
                    <AiFillGift />
                    Manage Cupon
                  </NavLink>
                </li>
              </>
            ) : (
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
            )}

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
        </div>
      </div>
    </>
  );
};

export default Dashboard;
