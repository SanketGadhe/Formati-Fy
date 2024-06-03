import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [login, setlogin] = useState(false);
  const [dropdown, setdropdown] = useState(false);
  return login ? (
    <div className="nav w-full bg-black text-white px-5 fixed  pt-7 pb-2 z-50 ">
      <div className="navbar flex justify-between">
        <div className="logo flex">
          <img
            src="src\Static\logo.png"
            width={"100px"}
            height={"50px"}
            alt=""
          />
        </div>
        <div className="right">
          <ul className="flex list-none gap-8 text-white font-bold items-center text-lg">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li className="relative inline-block">
              <NavLink
                className={
                  "px-4 bg-white  rounded-xl text-black flex items-center"
                }
                onClick={() => {
                  setdropdown(!dropdown);
                }}
              >
                Project <IoMdArrowDropdown />
              </NavLink>
             {
              dropdown?<Dropdown/>:''
             }
            </li>
            <li>
              <NavLink>Templates</NavLink>
            </li>
            <li>
              <NavLink>Conferences</NavLink>
            </li>
            <li>
              <NavLink
                className={
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-300  hover:bg-gradient-to-l transition-transform "
                }
              >
                Premium
              </NavLink>
            </li>
            <li>
              <button className="px-3 py-2 text-lg font-semibold rounded-lg">
                <CgProfile size={"1.2em"} />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center  ">
        <div className="h-[2px] rounded-xl  w-[95%] bg-white"></div>
      </div>
    </div>
  ) : (
    <div className="nav w-full z-50 bg-black text-white px-5 fixed  pt-7 pb-2 ">
      <div className="navbar flex justify-between">
        <div className="logo flex ">
          <img
            src="/src/Static/logo.png"
            width={"100px"}
            height={"50px"}
            alt=""
          />
        </div>
        <div className="right">
          <ul className="flex list-none gap-8 text-white font-bold items-center text-lg">
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Conferences</NavLink>
            </li>
            <li>
              <NavLink>Premium</NavLink>
            </li>
          <li>
            <NavLink
              className="border-[#8c00ffbf] hover:shadow-lg  hover:shadow-[#8c00ffbf] border-2 px-3  text-lg font-semibold rounded-lg"
              onClick={() => setlogin(true)}
            >
              SignIn
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink className=" text-[#8c00ff] px-3  text-lg font-semibold rounded-lg">
              SignUp
            </NavLink>
          </li>
          </ul>
        </div>
      </div>
          <div className="w-full flex justify-center  ">
        <div className="h-[2px] rounded-xl  w-[95%] bg-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
