import React from 'react'

const Dropdown = () => {
  return (
    <div className='dropdown absolute rounded-lg mt-2  w-full top-6 bg-[#363636] shadow-lg'>
  <ul className='list-none text-sm text-gray-300'>
    <li className='px-3 py-2 border-b border-[#151515] rounded-t-lg hover:bg-gray-700 hover:text-white transition-colors'>
      Create Project
    </li>
    <li className='px-3 py-2 border-b border-gray-700 hover:bg-gray-700 hover:text-white transition-colors'>
      Existing Projects
    </li>
    <li className='px-3 py-2 hover:bg-gray-700 rounded-b-lg hover:text-white transition-colors'>
      Shared Projects
    </li>
  </ul>
</div>

  )
}

export default Dropdown
