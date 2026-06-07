"use client"
import { MdMoreHoriz } from 'react-icons/md';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thu',
    present: 90,
    absent: 75,
  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  },

];


export default function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <MdMoreHoriz />
        </div>


        <BarChart
      style={{ width: '100%', height: "90%", maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
     barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
      <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
      <YAxis  axisLine={false}/>
      <Tooltip contentStyle={{borderRadius: "10px" , borderColor: "lightgray"}}/>
      <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}} />
      <Bar dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} legendType='circle'/>
      <Bar dataKey="absent" fill="#C3EBFA"  radius={[10, 10, 0, 0]} legendType='circle'/>
      {/* <RechartsDevtools /> */}
    </BarChart>
    </div>
  )
}
