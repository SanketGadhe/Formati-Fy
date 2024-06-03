import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className='dropdown absolute rounded-lg mt-2 w-full top-6 bg-[#363636] shadow-lg font-normal text-sm'>
  <ul className='list-none  text-white'>
    <li className='px-1 py-1 border-b border-[#151515] rounded-t-lg hover:bg-[#364C86] hover:text-white transition-colors'>
    <NavLink>Create Project</NavLink>  
    </li>
    <li className='px-1 py-1 border-b border-[#151515] hover:bg-[#364C86] hover:text-white transition-colors'>
      
      <NavLink>Existing Projects</NavLink>
    </li>
    <li className='px-1 py-1 border-b border-[#151515] hover:bg-[#364C86] rounded-b-lg hover:text-white transition-colors'>
       <NavLink>
       Shared Projects
      </NavLink>
    </li>
  </ul>
</div>

  )
}

export default Dropdown
