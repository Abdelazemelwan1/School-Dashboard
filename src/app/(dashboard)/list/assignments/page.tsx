import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {   assignmentsData, examsData, lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";


type Assignment = {

  id: number;
  subject:string;
  class:string;
  teacher:string;
  dueDate:string;
}

const columns =[
  {
    header: "Subject Name" ,
     accessor: "name"
  },
  {
    header: "Class" ,
    accessor: "class",
  },
  {
    header: "Teacher" ,
    accessor: "teacher",
    className: "hidden md:table-cell"
  },
  {
    header: "Due Date" ,
    accessor: "duedate",
    className: "hidden md:table-cell"
  },
  {
    header: "Actions" ,
    accessor: "action",
  },
]

export default function AssignmentListPage() {

  const renderRow = (item:Assignment) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lama-purple-light">
      <td className="flex items-center gap-4 p-4 ">{item.subject}</td>
      <td className="">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lama-sky">
              <GrView width={16} height={16}/>
            </button>
          </Link> */}
          {/* <Link href={`/list/teachers/${item.id}`}> */}
            {role === "admin" && (
               <>
              <FormModal type="update" table="assignment" data={item}/>
              <FormModal type="delete" table="assignment" id={item.id}/>
            
            </>
            //    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lama-purple">
            //   <RiDeleteBin5Line width={16} height={16}/>
            // </button>
          )}
          {/* </Link> */}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4  w-full md:w-auto">
          <TableSearch/>
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lama-yellow">
              <Image src={"/filter.png"} alt="filter" width={14} height={14}/>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lama-yellow">
              <Image src={"/sort.png"} alt="filter" width={14} height={14}/>
            </button>
            {role === "admin" && (
                // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lama-yellow">
                //     <Image src={"/plus.png"} alt="filter" width={14} height={14}/>
                // </button>
                 <FormModal type="create" table="assignment" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
      {/* PAGINAIION */}
        <Pagination/>
    </div>
  )
}
