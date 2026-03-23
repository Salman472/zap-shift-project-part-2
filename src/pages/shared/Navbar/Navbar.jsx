import React from "react";
import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";

import Arrow from "../../../components/buttons/Arrow";
import SignIn from "../../../components/buttons/SignIn";
import SignUp from "../../../components/buttons/SignUp";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const {user, logOut}=useAuth()
  // log out function
  const hangleLogOut=()=>{
    logOut().then(result=>{
      console.log(result);
    }).catch(error=>{
      console.log(error);
    })
  }
  const NavLinks = (
    <>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li>
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className='navbar container mx-auto px-2 sm:px-4 md:px-6 lg:px-8'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {NavLinks}
            </ul>
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-3">{NavLinks}</ul>
        </div>
        <div className="navbar-end gap-3">
          {
            user? <button onClick={hangleLogOut} className="btns">Log Out</button> : <>
            <Link to={'/login'}><SignIn /></Link>
            <Link to={'/register'}><SignUp /></Link>
            </>
          }
          
          
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
