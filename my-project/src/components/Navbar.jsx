import { NavLink } from "react-router-dom";
import logo from "../assets/images/react_logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) => (isActive ? "bg-black" : "text-white");
  return (
    <nav className=" bg-indigo-800 border-indigo-300">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs logo" />
              <span className="hidden md:block  text-white text-2xl font-bold">
                React jobs
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
