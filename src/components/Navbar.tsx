import Image from 'next/image'
import React from 'react'
import { GrAnnounce } from 'react-icons/gr'
import { IoSearchSharp } from 'react-icons/io5'
import { LuMessageCircleMore } from 'react-icons/lu'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
        {/* SEARCHBAR */}
        <div className="hidden md:flex justify-center items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <IoSearchSharp size={18}/>
            <input type="text" placeholder='Search...' className='w-50 p-2 bg-transparent outline-none '/>
        </div>

        {/* ICONSAND USER */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <LuMessageCircleMore size={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <GrAnnounce size={20} />
                <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
            </div>
            <div className="flex flex-col">
                <span className='text-xs leading-3 font-medium'>John Doe</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <Image src="/avatar.png" alt='avatar' width={36} height={36} className='rounded-full border-2 border-gray-400' />
        </div>
    </div>
  )
}
