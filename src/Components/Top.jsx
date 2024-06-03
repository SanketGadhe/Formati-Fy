import React from "react";
import { NavLink } from "react-router-dom";

const Top = () => {
  return (
    <div className="bg-gradient-to-b  w-full from-black from-[35%] to-[#24488E] text-center max-md:h-fit pb-5 text-white flex justify-center items-center">
      <div className="whole">
        <div className="center flex justify-center">
          <div className="intro text-4xl font-bold w-[80vw] text-center mt-32">
            Introducing Formatify: Streamlining <br />
            Research Paper Formatting for Conference
          </div>
        </div>
        <div className="center flex justify-center mt-12">
          <div className="intro text-xl font-semibold w-[55vw] text-center">
            Formatify is a powerful tool that simplifies the process of
            restructuring your research paper to adhere with conference
            guidelines.
          </div>
        </div>
        <div className="center flex justify-center mt-12">
         <NavLink className={'px-4 py-3 text-lg font-bold text-[#112466] rounded-xl bg-white'}>
Format My Paper
         </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Top;
