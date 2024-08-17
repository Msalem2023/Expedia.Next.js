"use client"
import {  properties } from "@/app/components/Data";
import HotelInfo from "@/app/components/HotelInfo";
import Review from "@/app/components/Reviews";
import Rooms from "@/app/components/Rooms";
import Single from "@/app/components/SingleSlider"
import Swipper from "@/app/components/swipper";
import { Context } from "@/app/Context";
import { format } from "date-fns";
import Image from "next/image";
import {BiHeart } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
interface DateRange {
    startDate?: Date;
    endDate?: Date;
}
interface Option {
    adult: number;
    children: number;
    room: number;
}

interface State {
    date: DateRange[];
    option: Option
}

const defaultState: State = {
    date: [{} as DateRange],
    option: { adult: 1, children: 0, room: 1 }
};

interface Params {
    PropertyId: number;
}
const style = "flex items-center gap-3 text-lg text-dark-900 py-2"
const Selected: React.FC<{ params: Params }> = ({ params }) => {
    const data = properties.filter(e => e.id == params.PropertyId)
    const { state = defaultState } = Context()
    const formattedStartDate = state.date[0]?.startDate
        ? format(state.date[0].startDate, 'eeee, MMM d')
        : format(new Date(), 'eeee, MMM d');
    const formattedEndDate = state.date[0]?.endDate
        ? format(state.date[0].endDate, 'eeee, MMM d')
        : format(new Date(), 'eeee, MMM d');

    console.log(state)
    return (
        <div id="overview" className="container mx-auto grid grid-cols-4 gap-4 p-6">
            <div className="lg:hidden col-start-1 col-end-7">
                <Single image={data[0].Img} />
            </div>
            <div className="hidden lg:block col-span-2">
                <Image className="w-full h-80 rounded-lg" src={data[0].Img[0]} alt={data[0].Name} />
            </div>
            <div className="hidden lg:block col-span-1">
                <Image className="w-full h-40 rounded-lg p-1" src={data[0].Img[1]} alt={data[0].Name} />
                <Image className="w-full h-40 rounded-lg p-1" src={data[0].Img[2]} alt={data[0].Name} />

            </div>
            <div className="hidden lg:block col-span-1">
                <Image className="w-full h-40 rounded-lg p-1" src={data[0].Img[3]} alt={data[0].Name} />
                <Image className="w-full h-40 rounded-lg p-1" src={data[0].Img[4]} alt={data[0].Name} />
            </div>
            <div className="hidden lg:block  lg:col-span-2 lg:border-b-[2px] lg:sticky lg:top-0 lg:shadow lg:bg-white lg:z-50 lg:p-2 lg:rounded">
                <div className="flex flex-row justify-between">
                    <a href="#overview" className="cursor-pointer font-semibold text-xl focus:text-sky-600 focus:border-b-[3px] focus:border-b-sky-600 " >Overview</a>
                    <a href="#amenities" className="cursor-pointer font-semibold text-xl focus:text-sky-600 focus:border-b-[3px] focus:border-b-sky-600">Amenities</a>
                    <a href="#rooms" className="cursor-pointer font-semibold text-xl focus:text-sky-600 focus:border-b-[3px] focus:border-b-sky-600">Rooms</a>
                    <a href="#accessibility" className="cursor-pointer font-semibold text-xl focus:text-sky-600 focus:border-b-[3px] focus:border-b-sky-600">Accessability</a>
                    <a href="#policies" className="cursor-pointer font-semibold text-xl focus:text-sky-600 focus:border-b-[3px] focus:border-b-sky-600">Polcies</a>
                </div>
            </div>
            <div className="lg:col-span-1 " />
            <div className="hidden lg:block lg:col-span-1 ">
                <div className="flex flex-row justify-center gap-3">
                    <button className="flex flex-row items-center gap-2 rounded-full border border-slate-500 p-3 text-lg text-neutral-800 font-md">
                        <BiHeart size={24} color="red" />Save
                    </button>
                    <button className="text-white text-lg font-semibold text-center bg-sky-600 rounded-full p-3">Select your room</button>
                </div>
            </div>
            <div className="col-start-1 col-end-7 lg:col-span-2">
                <HotelInfo Name={data[0].Name} Review={data[0].Review} Rating={data[0].Rating} NumberOfReviews={data[0].NumberOfReviews} describtion={data[0].describtion} />
            </div>
            <div className="hidden lg:block lg:col-span-2">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold my-3">Explore the area </h3>
                    <p className={`${style}`} ><ImLocation size={24} /> Checkpoint Charlie <span>9 min walk</span></p>
                    <p className={`${style}`} ><ImLocation size={24} /> Brandenburg Gate <span>18 min walk</span> </p>
                    <p className={`${style}`} ><ImLocation size={24} /> Alexanderplatz <span>18 min walk</span></p>
                </div>
            </div>
            <div className="col-start-1 col-end-7 lg:hidden">
                <h3 className="text-xl font-bold my-3">Choose your room </h3>
                <a className="pb-5 text-xl text-sky-600 hover:underline">{state.option.room} room.{state.option.adult} travelers</a>
                <div className="flex flex-row justify-around items-center pt-5">
                    <div >
                        <div className="flex items-center ">
                            <MdArrowBackIosNew className="" size={24} color="black" />
                            <a className="text-sky-600 hover:underline text-lg font-semibold px-5 text-xl cursor-pointer">{formattedStartDate}</a>
                            <MdArrowForwardIos className="" size={24} color="black" />
                        </div>
                    </div>
                    <div >
                        <div className="flex items-center">
                            <MdArrowBackIosNew size={24} color="black" />
                            <a className="text-sky-600 hover:underline text-lg font-semibold px-5 text-xl cursor-pointer">{formattedEndDate}</a>
                            <MdArrowForwardIos size={24} color="black" />

                        </div>
                    </div>
                </div>
            </div>
            <div id="rooms" className="col-start-1 col-end-7 lg:col-span-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data[0].Rooms?.map((e) => (
                        <Rooms key={e.id} Rooms={e} PropertyId={params.PropertyId} />
                    ))}
                </div>
            </div>
            <div className="col-start-1 col-end-7 lg:col-span-4">
                <Swipper image={data[0].Img} />
            </div>
            <div className="col-start-1 col-end-7 lg:col-span-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {data[0].Reviews?.slice(0, 3).map((review, index) => (
                        <Review key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Selected