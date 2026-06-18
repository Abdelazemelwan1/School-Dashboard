import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { GrEdit, GrView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";


type Parent = {

  id: number;
  name:string;
  email?:string;
  students:string[];
  phone:string;
  address:string;
}

const columns =[
  {
    header: "Info" ,
     accessor: "info"
  },
  {
    header: "Student Names" ,
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone" ,
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address" ,
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions" ,
    accessor: "action",
  },
]

export default function ParentListPage() {

  const renderRow = (item:Parent) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lama-purple-light">
      <td className="flex items-center gap-4 p-4 ">
     
        {/* <Image src={item.Photo} alt="Photo" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" /> */}
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lama-sky">
            <GrEdit width={16} height={16}/>
            </button>
            </Link> */}
          {/* <Link href={`/list/teachers/${item.id}`}> */}
            {role === "admin" && ( <>
              <FormModal type="update" table="parent" data={item}/>
              <FormModal type="delete" table="parent" id={item.id}/>
            </>
            //   <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lama-purple">
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
        <h1 className="text-lg font-semibold hidden md:block">All Parents</h1>
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
                <FormModal type="create" table="parent" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      {/* PAGINAIION */}
        <Pagination/>
    </div>
  )
}
