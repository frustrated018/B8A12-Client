import { Link, NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import useToastify from "../../Hooks/useToastify";

const NavBar = () => {
  const { logOut, user } = useAuth();
  const { successToast, errorToast } = useToastify();

  const handleLogOut = () => {
    logOut()
      .then(successToast("Logout Successful"))
      .catch((err) => {
        errorToast(`${err}`);
      });
  };

  // Nav Links
  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
  ];

  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMdMenu size={25}></IoMdMenu>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
            >
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-center font-semibold  ${
                      isActive ? "bg-primary" : "bg-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </div>
          {/* Logo and Company name */}
          <div className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-10 w-10" />
            <NavLink to="/" className="btn btn-ghost text-xl">
              Tech Trends
            </NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md text-center font-semibold text-white ${
                      isActive ? "bg-primary" : "bg-accent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* User Profile */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile Image"
                  src={
                    user
                      ? user.photoURL
                      : "https://i.ibb.co/HG1zZkj/Screenshot-2023-10-09-160806.png"
                  }
                />
              </div>
            </label>
            {user && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <Link to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            )}
          </div>
          {!user && (
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-md text-center font-semibold text-white bg-accent"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
