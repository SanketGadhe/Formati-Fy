import React from "react";

const Work = () => {
  const steps = [
    { label: "Create Project", iconSrc: "src/Static/6.png" },
    { label: "Select Your Template", iconSrc: "src/Static/5.png" },
    { label: "Write Or Paste Content", iconSrc: "src/Static/4.png" },
    { label: "Review Your Paper", iconSrc: "src/Static/7.png" },
    { label: "Download Paper", iconSrc: "src/Static/8.png" },
  ];

  return (
    <div className="text-white py-12 px-5 bg-black">
      <div className="flex justify-center">
        <p className="font-bold text-3xl">How Formatify Works</p>
      </div>
      <div className="process mt-16 relative">
        {/* Horizontal Line */}
        <div className="hidden md:block absolute top-5   left-16 right-16 h-[1px] bg-white rounded-2xl "></div>
        {/* Vertical Line for Mobile */}
        <div className="block md:hidden absolute top-0 bottom-10 left-1/2 w-[1px] bg-white rounded-2xl "></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-5 ">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center mb-8 md:mb-0">
              {/* Step Circles */}
              <div className="circle w-10 h-10 bg-blue-300 rounded-full mb-4 md:mb-0 flex justify-center items-center text-black font-bold">{index+1}</div>
              {/* Step Content */}
              <div className="box flex flex-col items-center justify-center text-center mt-5">
              <p className="text-center font-medium mb-5">{step.label}</p>
                <div className="circle w-32 h-32 rounded-full bg-white flex justify-center items-center mb-2">
                  <img src={step.iconSrc} alt={`${step.label} icon`} className="h-28 w-28"/>
                </div>
                
              </div>
              {/* Connecting Line Segments */}
              {/* {index < steps.length - 1 && (
                <>
                  <div className="hidden md:block absolute left-full top-1/2 w-[100px] h-[1px] bg-white rounded-2xl"></div>
                  <div className="block md:hidden absolute left-1/2 bottom-0 w-[1px] h-[100px] bg-white rounded-2xl"></div>
                </>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
