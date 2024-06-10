import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({isLoggedIn , setIsLoggedIn}) => {
  return (
    <div className="flex justify-between items-center w-10/12 max-w-[1000px] mx-auto py-4 ">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="flex text-richblack-100 gap-5 gap-x-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        { !isLoggedIn &&
            <Link to="/login">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
            </Link>
        }
        { !isLoggedIn &&
            <Link to="/signup">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/">
                <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out")
                }}>Logout</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to="/dashboard">
                <button className="bg-richblack-800 text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
