"use client"
import Input from "./Input"
import { BiArrowToBottom, BiArrowToTop, BiSearch, BiTransfer } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { IoPersonSharp } from "react-icons/io5"
import { GoLocation } from "react-icons/go"
const Flights = () => {

    return (
        <div className="lg:flex lg:flex-row lg:justify-center p-6  lg:gap-3 ">
            <div className="relative">
                <Input placeholder="Leaving from" Icon={GoLocation} />
            </div>
            <div className="hidden lg:block lg:rounded-full lg:p-5 lg:border lg:border-neutral-500">
                <BiTransfer size={30} color="blue" />
            </div>
            <div className="flex flex-row justify-between rounded-full p-5 border border-neutral-500 mt-2 lg:hidden">
                <BiArrowToTop size={30} color="blue" />
                <BiArrowToBottom size={30} color="blue" />
            </div>
            <div className="relative">
                <Input placeholder="Going to" Icon={GoLocation} />
            </div>
            <div className="relative">
                <Input placeholder="Dates" Icon={SlCalender} />
            </div>

            <div className="relative">
                <Input placeholder="travellers" Icon={IoPersonSharp} />
            </div>
            <button className="w-full lg:w-1/6 p-4 bg-sky-600 rounded-full text-white text-xl font-sembold mt-1">Search</button>
        </div>
    )
}

export default Flights