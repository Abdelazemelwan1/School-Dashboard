import React from 'react'
import { MdMoreHoriz } from 'react-icons/md'

export default function UserCard({type}:{type:string}) {
  return (
    <div className='rounded-2xl odd:bg-lama-purple even:bg-lama-yellow p-4 flex-1 min-w-[130px]'>
        <div className="flex justify-between items-center">
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600'>2026/25</span>
            <MdMoreHoriz />
        </div>
        <h1 className='text-2xl font-semibold  my-4'>2,234</h1>
        <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
    </div>
  )
}
