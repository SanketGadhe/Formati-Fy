import React from 'react'
import { NavLink } from 'react-router-dom'

const Fotter = () => {
  return (
    <div className='w-full flex text-white flex-wrap items-center bg-gradient-to-t from-[#364C86] to-black'>
    <div className="img">
<img src="src\Static\logo.png" width={'450px'}  alt="" />
</div>
   <div className="text mt-10 w-[60%]">
       <p className="text-2xl underline font-bold m-3">Contact Us</p>
       <p className="text-lg underline font-bold m-3"> <NavLink>
For any further assistance or inquiries, please feel free to contact our customer support team:
</NavLink></p>
       <p className="text-lg underline font-bold m-3">Phone:<NavLink>1-800-123-4567
</NavLink></p>
       <p className="text-lg underline font-bold m-3"> Email:<NavLink> support@example.com</NavLink></p>
<div className="social flex  justify-end">
<img src="src\Static\social2.png" alt="" />
<img src="src\Static\social5.png" alt="" />
<img src="src\Static\social6.png" alt="" />
<img src="src\Static\social7.png" alt="" />
</div>
   </div>
 
</div>
  )
}

export default Fotter
