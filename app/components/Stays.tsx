import { useCallback, useMemo, useState } from "react"
import Input from "./Input"
import Button from "./Button"
import { BiCalendar, BiCalendarCheck, BiCurrentLocation, BiLocationPlus, BiSearch } from "react-icons/bi"
import { useAppContext } from "../FilterReducer"
import { GoLocation } from "react-icons/go"
import { PiPerson } from "react-icons/pi"
import { FaCalendarAlt, FaCalendarDay } from "react-icons/fa"
import { IoPersonSharp } from "react-icons/io5"
import { useRouter } from "next/navigation"
import { Context } from "../Context"
import useOption from "../Hooks/useOption"
import useDate from "../Hooks/useDate"
import { format } from "date-fns"
import useDestination from "../Hooks/useDestination"

const Stays = () => {

    const option = useOption()
    const date = useDate()
    const destination = useDestination()

    const router = useRouter()
    const { state, dispatch } = Context();
    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); 
        router.push("/Properties"); 
    };
    const formattedStartDate = state?.date[0]?.startDate ? format(state?.date[0]?.startDate, "eeee, MMM d") : format(new Date(), "eeee, MMM d");
    const formattedEndDate = state?.date[0]?.endDate ? format(state?.date[0]?.endDate, "eeee, MMM d") : format(new Date(), "eeee, MMM d");
    console.log(state)



    return (
        <div className="flex items-center justify-center p-4">
            <div className="container grid grid-cols-4 gap-4 ">
                <div className="col-span-4 lg:col-span-1 relative">
                    <input placeholder={state.destination.label?state.destination.label:"Where to go"} onClick={destination.onOpen}
                        className="pl-[calc(2.75rem-1px)] text-start border-[2px] border-neutral-500 border-solid focus:border-none focus:ring-2 focus:ring-sky-500 p-4 w-full mt-2 rounded-full outline-none" />
                    <GoLocation size={24} className="absolute top-6 left-3 focus:hidden " color="blue" />
                </div>
                <div className="col-span-4 lg:col-span-1 relative">
                    <Input
                        onClick={date.onOpen}
                        Icon={FaCalendarAlt}
                        placeholder={`${formattedStartDate} - ${formattedEndDate}`}

                    />
                </div>
                <div className="col-span-4 lg:col-span-1 relative">
                    <Input Icon={IoPersonSharp} onClick={option.onOpen} placeholder={`${state.option.adult} adult. ${state.option.children} children.${state.option.room} room `} value={`${state.option.adult} adult. ${state.option.children} children.${state.option.room} room `} />

                </div>
                <div className="col-span-4 lg:col-span-1">
                    <button onClick={handleNavigation} className="p-4 bg-sky-600 rounded-full text-white text-xl font-sembold mt-1">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Stays