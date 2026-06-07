import Link from "next/link";
import { AiOutlineFileText } from "react-icons/ai";
import { CgNotes, CgProfile } from "react-icons/cg";
import { FaUserFriends, FaUserGraduate } from "react-icons/fa";
import { FcNegativeDynamic } from "react-icons/fc";
import { GrAnnounce } from "react-icons/gr";
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
                href: "/"
            },
            {
                icon: <FaUserGraduate size={22}/> ,
                label: "Teachers",
                href: "/teachers"
            },
            {
                icon: <FaUserFriends size={22}/> ,
                label: "Students",
                href: "/students"
            },
            {
                icon: <RiParentLine size={22}/> ,
                label: "Parents",
                href: "/parents"
            },
            {
                icon: <SiGoogleclassroom size={22}/> ,
                label: "Classes",
                href: "/classes"
            },
            {
                icon: <CgNotes size={22}/> ,
                label: "Lessons",
                href: "/lessons"
            },
            {
                icon: <AiOutlineFileText size={22}/> ,
                label: "Exams",
                href: "/exams"
            },
            {
                icon: <MdAssignment size={22}/> ,
                label: "Assignments",
                href: "/assignments"
            },
            {
                icon: <FcNegativeDynamic size={22}/> ,
                label: "Attendance",
                href: "/attendance"
            },
            {
                icon: <MdOutlineEventNote size={22}/> ,
                label: "Events",
                href: "/events"
            },
            {
                icon: <LuMessageCircleMore size={22}/> ,
                label: "Messages",
                href: "/messages"
            },
            {
                icon: <GrAnnounce size={22}/> ,
                label: "Announcements",
                href: "/announcements"
            },
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: <CgProfile size={25}/> ,
                label: "Profile",
                href: "/profile"
            },
            {
                icon: <IoSettingsOutline size={22}/> ,
                label: "Settings",
                href: "/settings"
            },
            {
                icon: <RiLogoutCircleRLine size={22}/> ,
                label: "Logout",
                href: "/logout"
            }
        ]
    }
];


export default function Menu() {
  return (
    <div className="mt-4 text-sm">
        {menuItems.map((item) => (
            <div className="flex flex-col gap-2" key={item.title}>
                <span className="hidden lg:block text-gray-400 font-light my-4">{item.title}</span>
                {item.items.map((ite) => (
                    <Link className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2" href={ite.href} key={ite.label}>
                        {ite.icon} 
                        <span className="hidden lg:block ">{ite.label}</span>
                        
                    </Link>
                ))}
            </div>
        ))}
    </div>
  )
}
