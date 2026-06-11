import { role } from "@/lib/data";
import Link from "next/link";
import { AiOutlineFileText } from "react-icons/ai";
import { CgNotes, CgProfile } from "react-icons/cg";
import { FaFilePrescription, FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { FcNegativeDynamic } from "react-icons/fc";
import { GrAnnounce, GrSchedules } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdAssignment, MdOutlineEventNote } from "react-icons/md";
import { RiLogoutCircleRLine, RiParentLine } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { TiHomeOutline } from "react-icons/ti";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <TiHomeOutline size={22}/> ,
        label: "Home",
        href: "",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaUserGraduate size={22}/> ,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FaUserFriends size={22}/> ,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: <RiParentLine size={22}/> ,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: <GrSchedules />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: <SiGoogleclassroom size={22}/> ,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: <CgNotes size={22}/> ,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: <AiOutlineFileText size={22}/> ,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdAssignment size={22}/> ,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FaFilePrescription />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FcNegativeDynamic size={22}/> ,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <MdOutlineEventNote size={22}/> ,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <LuMessageCircleMore size={22}/> ,
        label: "Messages",
        href: "/list/message",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <GrAnnounce size={22}/> ,
        label: "Announcements",
        href: "/list/announcements  ",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile size={25}/> ,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <IoSettingsOutline size={22}/> ,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <RiLogoutCircleRLine size={22}/> ,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className="mt-4 text-sm">
        {menuItems.map((item) => (
            <div className="flex flex-col gap-2" key={item.title}>
                <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                {item.items.map((ite) => {
                    if (ite.visible.includes(role)) {
                        return (
                            <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lama-sky-light" href={ite.href} key={ite.label}>
                                {ite.icon} 
                                <span className="hidden lg:block ">{ite.label}</span>
                        
                            </Link>
                        )
                    }
                })}
            </div>
        ))}
    </div>
  )
}
