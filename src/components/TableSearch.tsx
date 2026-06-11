import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

export default function TableSearch() {
  return (
     <div className="w-full md:w-auto flex justify-center items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <IoSearchSharp size={18}/>
                <input type="text" placeholder='Search...' className='w-50 p-2 bg-transparent outline-none '/>
            </div>
  )
}
