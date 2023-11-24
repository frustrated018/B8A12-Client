import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";
import useToastify from "../../Hooks/useToastify";

const NavBar = () => {
  const { logOut, user } = useAuth();
  const {successToast, errorToast} = useToastify();

  const handleLogOut = () => {
    logOut()
      // TODO: Remove broweser alert and add Toast
      .then(successToast("Logout Successfull"))
      .catch(err=>{errorToast(`${err}`)})
  };

  // Nav Links
  const links = [
    { to: "/", label: "Home" },
    { to: "/login", label: "Login" },
    { to: "/contact", label: "Contact" },
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
                  src={user ? user.photoURL : "https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"}                />
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
                  <p>Dashboard</p>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
