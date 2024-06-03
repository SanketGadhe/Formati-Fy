import React from 'react'

const Update = () => {
  return (
    <div className='flex gap-9 flex-wrap px-10 py-5 justify-center'>
      <div className="text-white w-[40vw] max-md:w-full">
        <div className="headtext font-extrabold text-3xl leading-tight ">
        Stay Updated With <br />
Our Latest Conference
        </div>
        <div className="bastext text-xl font-medium mt-6">
        Stay updated with new conference, as you can submit your well structured paper instantly, and get benefited. Register yourself to get notification on daily basis.  
        </div>
      </div>
      <div className="flex  px-6 py-3 rounded-2xl  bg-gradient-to-r text-black from-white to-50% to-blue-300 ">

        <form className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label className="">First Name</label>
              <input type="text" className="p-2 rounded border" />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="">Last Name</label>
              <input type="text" className="p-2 rounded border" />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="">Email ID</label>
            <input type="email" className="p-2 rounded border" />
          </div>
          <div className="flex flex-col">
            <label className="">Area Of Interest</label>
            <input type="text" className="p-2 rounded border" />
          </div>
          <button type="submit" className="p-2 rounded bg-[#364C86] text-white hover:bg-blue-800 w-fit">
            Register
          </button>
        </form>
   
    </div>
    </div>
  )
}

export default Update
