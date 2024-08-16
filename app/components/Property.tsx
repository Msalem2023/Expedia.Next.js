"use client"
import { useEffect, useState } from "react"
import Single from "./SingleSlider"
import { BiArrowToLeft, BiArrowToRight, BiStar } from "react-icons/bi"
import { FaSwimmer, FaSwimmingPool } from "react-icons/fa"
import { useAppContext } from "../FilterReducer"
import Link from "next/link"
import { properties } from "./Data"



const Property = () => {
    const { state } = useAppContext();
    const [current, setCurrent] = useState(1)
    let filteredData = properties.filter(element => {
        return (
            (!state.Name || element.Name.includes(state.Name)) &&
            (state.Price === undefined || state.Price >= element.Price) &&
            (!state.Policy || element.Policy === "Refundable") &&
            (!state.Payment || element.Payment === "pay later") &&
            (!state.Breakfast || element.Breakfast === "included") &&
            (!state.Parking || element.Parking === "free") &&
            (!state.Rating || element.Rating === state.Rating)
        );
    });

    const itemperpage = 3
    const lastIndex = current * itemperpage
    const firstIndex = lastIndex - itemperpage
    const item = filteredData.slice(firstIndex, lastIndex)
    const numberOfPage = Math.ceil(filteredData.length / itemperpage)
    const numbers:number[] = Array.from({ length: numberOfPage }, (_, i) => i + 1);
    function Previous() {
        if (current !== 1) {
            setCurrent(current - 1)
        }
    }
    function Next() {
        if (current !== numberOfPage) {
            setCurrent(current + 1)
        }
    }
    function change(number: number) {
        setCurrent(number)
    }


    return (
        <>
            {item.map((e) => (
                <div key={e.id} className="grid grid-cols-4 gap-4 rounded-lg border border-neutral-500 m-5 p-3">
                    <div className="h-full">
                        <Single image={e.Img} />
                    </div>
                    <Link href={`/property/${e.id}`} className="col-span-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <h3 className="text-2xl text-neutral-700 font-semibold">{e.Name}</h3>
                                <div className="flex flex-row gap-2">
                                    {Array.from({ length: e.Stars }, (_, index) => (
                                        <BiStar key={index} size={24} color="gray" />
                                    ))}
                                </div>
                                <p className="text-md font-semibold">{e.City}</p>
                                {e.HasPool && <FaSwimmer size={24} color="gray" />}
                                <div className="mt-6">
                                    <p className={`${e.Policy === "Refundable" ? "text-green-500" : "text-rose-500"}`}>
                                        {e.Policy}
                                    </p>
                                    <p className="text-green-500 text-md font-semibold">
                                        {e.Payment === "pay later" ? "Reserve now, pay later" : "Pay now"}
                                    </p>
                                </div>
                                <div className="flex flex-row gap-3 mt-2">
                                    <div className="bg-green-700 rounded-lg w-24 h-10 text-center p-2">
                                        {e.Review}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Wonderful</p>
                                        <p>{e.NumberOfReviews} reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1 relative">
                                <div className="absolute bottom-0 right-0">
                                    <div
                                        className={`${e.AvailableRooms < 5 ? "bg-rose-500" : "bg-green-700"} rounded-lg w-30 h-10 text-center text-lg font-semibold p-2`}
                                    >
                                        We have {e.AvailableRooms} left
                                    </div>
                                    <h3 className="font-bold text-xl text-center">EGP {e.Price}</h3>
                                    <p className="text-center">
                                        {e.Taxes !== "included taxes and fees"
                                            ? `EGP ${e.Price * 0.1 + e.Price} Total`
                                            : e.Taxes}
                                    </p>
                                    {e.Taxes !== "included taxes and fees" && (
                                        <p className="text-center">
                                            EGP {e.Price * 0.1} Taxes and fees
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}

            <div className="flex justify-between mt-4">
                <button onClick={Previous} disabled={current === 1}>
                    <BiArrowToLeft size={50} className="bg-white rounded-full p-2 hover:bg-neutral-500 border border-sky-500 text-sky-500 " />
                </button>
                <div>
                    {numbers.map(num => (
                        <button
                            key={num}
                            onClick={() => change(num)}
                            className={`mx-1 ${num === current ? 'font-bold text-slate-500' : ''} rounded-full text-xl p-3 text-sky-500`}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <button onClick={Next} disabled={current === numberOfPage}>
                    <BiArrowToRight size={50} className="bg-white rounded-full p-2 hover:bg-neutral-500 border border-sky-500 text-sky-500 " />
                </button>
            </div>
        </>



    )
}

export default Property