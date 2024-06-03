import React, { useState } from "react";

const Review = () => {
    const [reviews, setreviews] = useState([
        {name:'John D',abbrevation:'Phd',username:'@John23',said:'Formatify saved me hours of tedious work! The automated formatting is spot-on, and I love how easy it is to use. Highly recommended for any researcher.',src:'src/Static/15.png'},
        {name:'Emily S',abbrevation:'Researcher',username:'@Emily23',said:'Using Formatify was a game-changer for my conference submissions. The templates are comprehensive, and the process is incredibly efficient. I couldnt be happier!',src:'src/Static/12.png'},
        {name:'Raj Patel',abbrevation:'Prof.',username:'@Raj23',said:'Formatify made formatting my research papers a breeze. The intuitive interface and accurate formatting options make it an essential tool for academics.',src:'src/Static/13.png'}
    ])
  return (
    <div className="bg-gradient-to-b pb-10 w-full from-[#24488E] to-[90%] to-black  text-white flex justify-center items-start">
      <div className="whole">
        <div className="center flex justify-center">
          <div className="intro text-4xl font-bold w-[80vw] text-center mt-12">
            Loved By the Bests
          </div>
        </div>
        <div className="center flex justify-center mt-10">
          <div className="intro text-xl  w-[40vw] max-md:w-full text-center">
            Feedback from Happy customers: What people are saying about this
            amazing tool.
          </div>
        </div>
        <div className="center flex gap-12 flex-wrap justify-center mt-12 px-16 ">
            {
                reviews.map((elm,index)=>{
return (
          <div key={index} className="review1  bg-gradient-to-r from-blue-400 to-white rounded-xl px-6 w-80 gap-9 py-5 text-black h-92">
            <div className="profname flex gap-2 mb-4">
              {" "}
              <div className="img w-16 h-16 rounded-full bg-white">
                <img src={elm.src} alt="" />
              </div>
              <div className="detail">
                <p className="name font-bold text-xl">{elm.name}, {elm.abbrevation}</p>
                <p className="username text-blue-800 font-medium">{elm.username}</p>
              </div>
            </div>
            <div className="said">
              {elm.said}
            </div>
            <div className="flex reaction gap-2 mt-5">
              <button className="w-12 rounded-full h-12">
                <img src="src/Static/9.png" alt="" />
              </button>
              <button className="w-12 rounded-full h-12">
                <img src="src/Static/10.png" alt="" />
              </button>
              <button className="w-12 rounded-full h-12">
                <img src="src/Static/11.png" alt="" />
              </button>
            </div>
          </div>)
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Review;
