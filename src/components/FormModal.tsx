"use client"

import Image from 'next/image';
import React from 'react'
import { GrEdit } from 'react-icons/gr';

export default function FormModal({table, type,data,id} : {
    table: 
    "teacher" 
    | "student" 
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement"; 
    type: "create" | "update" | "delete";
    data?: any ;
    id? : number;

}) {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-lama-yellow" : type === "update" ? "bg-lama-sky" : "bg-lama-purple";
  return (<>
    <button className={`${size} flex items-center justify-center rounded-full ${bgColor}`}>
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
    </button>
    </>)
}
