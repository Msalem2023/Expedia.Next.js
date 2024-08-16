import { BiWifi } from "react-icons/bi"
import Single from "./SingleSlider"
import { IoArrowForwardOutline, IoPeopleSharp } from "react-icons/io5"
import { FaBed } from "react-icons/fa"
import { useAppContext } from "../FilterReducer"
import { Context } from "../Context"
import { format } from "date-fns"
import Link from "next/link"


interface Room {
    Img: [],
    type: string,
    Rating: string,
    review: number,
    Cancellation: Record<string, any>,
    NumberOfBeds: number,
    capacity: number,
    Wifi: boolean,
    originalPrice: number,
    Discount: number,
    Extras: Record<string, any>,
    id:string
}

interface RoomsProps {
    Rooms: Room,
    PropertyId:string
}

const Rooms: React.FC<RoomsProps> = ({ Rooms,PropertyId }) => {
   
    return (
        <>
            <div className="border border-neutral-500 w-full rounded-lg flex flex-col overflow-hidden" key={Rooms.type}>
                <div className="w-full h-48 md:h-56 lg:h-64">
                    <Single Image={Rooms.Img} className="w-full h-full object-cover" />
                </div>
                <h3 className="p-3 text-xl font-bold mt-10">{Rooms.type}</h3>
                <div className="p-2 flex flex-wrap gap-2 mt-4">
                    <p className="bg-green-500 text-center rounded-lg text-white px-3 py-1">{Rooms.review}</p>
                    <p className="font-bold text-xl py-1">{Rooms.Rating?.toUpperCase()}</p>
                </div>
                {Rooms.Wifi && <p className="p-3 flex items-center gap-2 text-semibold text-lg"><BiWifi size={24} /> Free Wifi</p>}
                <p className="p-3 flex item-center gap-2 text-semibold text-lg"><IoPeopleSharp size={24} /> {Rooms.capacity}</p>
                <p className="p-3 flex items-center gap-2 text-semibold text-lg"><FaBed size={24} /> {Rooms.type}</p>
                <a href="#" className="p-4 my-5 text-sky-600 hover:underline flex items-center gap-3">More details <IoArrowForwardOutline size={20} /></a>
                <div className="p-4 border-t-[2px]">
                    <h3 className="text-xl font-semibold my-3">Cancellation</h3>
                    <a href="#" className="my-2 hover:underline flex items-center gap-3">More details <IoArrowForwardOutline size={20} /></a>
                    {Rooms.Cancellation.map((item, index) => (
                        <div key={index} className="mb-4">
                            {Object.entries(item).map(([key, value]) => (
                                <div key={key} className="flex items-center p-2 relative">
                                    <input id={key} type="radio" name="Cancellation" className="w-5 h-5 text-sky-600 mr-2" />
                                    <label htmlFor={key} className="text-lg font-semibold">{key}</label>
                                    <span className="absolute right-0 text-xl font-semibold">+ EGP {value}</span>
                                </div>
                            ))}
                            <div className="border-t-[2px] mt-3 pt-3">
                                <h3 className="text-xl font-semibold my-3">Extras</h3>
                                {Object.entries(Rooms.Extras[0]).map(([key, value]) => (
                                    <div key={key} className="flex items-center p-2 relative">
                                        <input id={key} type="radio" name="Extras" className="w-5 h-5 text-sky-600 mr-2" />
                                        <label htmlFor={key} className="text-lg font-semibold">{key}</label>
                                        <span className="absolute right-0 text-xl font-semibold">+ EGP {value}</span>
                                    </div>
                                ))}
                                <p className="bg-green-500 text-center rounded-lg text-white px-3 py-1 text-lg w-full sm:w-2/6">{Rooms.Discount}% off</p>
                                <p>EGP {Rooms.originalPrice}</p>
                                <p>Total to be Paid : EGP {Rooms.originalPrice * (1 - Rooms.Discount / 100)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end p-4">
                    <Link href={`/property/${PropertyId}/${Rooms.id}`} className="rounded-full bg-sky-700 text-white text-semibold text-lg px-4 py-2">
                        Reserve
                    </Link>
                </div>
            </div>
        </>

    )
}
export default Rooms