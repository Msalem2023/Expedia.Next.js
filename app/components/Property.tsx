"use client";

import { useState } from "react";
import Single from "./SingleSlider";
import { BiArrowToLeft, BiArrowToRight, BiStar } from "react-icons/bi";
import { FaSwimmer } from "react-icons/fa";
import { useAppContext } from "../FilterReducer";
import Link from "next/link";
import { properties } from "./Data";
import Image from "next/image";

const Property = () => {
    const { state } = useAppContext();
    const [current, setCurrent] = useState(1);

    const filteredData = properties.filter(element => (
        (!state.Name || element.Name.includes(state.Name)) &&
        (state.Price === undefined || state.Price >= element.Price) &&
        (!state.Policy || element.Policy === "Refundable") &&
        (!state.Payment || element.Payment === "pay later") &&
        (!state.Breakfast || element.Breakfast === "included") &&
        (!state.Parking || element.Parking === "free") &&
        (!state.Rating || element.Rating === state.Rating)
    ));

    const itemsPerPage = 3;
    const lastIndex = current * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const items = filteredData.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(filteredData.length / itemsPerPage);
    const numbers = Array.from({ length: numberOfPages }, (_, i) => i + 1);

    const Previous = () => {
        if (current !== 1) {
            setCurrent(current - 1);
        }
    };

    const Next = () => {
        if (current !== numberOfPages) {
            setCurrent(current + 1);
        }
    };

    const change = (number:number) => {
        setCurrent(number);
    };

    return (
        <>
            {items.map(e => (
                <div key={e.id} className="relative mb-5 p-3 border border-neutral-500 rounded-lg grid grid-cols-1 lg:grid-cols-4 gap-4">
                    <div className="hidden lg:block lg:col-span-1 lg:h-full">
                        <Single image={e.Img} />
                    </div>
                    <div className="lg:hidden col-span-2">
                        <Image className="w-full h-60 rounded-lg" src={e.Img[0]} alt="property" />
                    </div>

                    <Link href={`/property/${e.id}`} className="col-span-2 lg:col-span-3 flex flex-col">
                        <div className="flex flex-col lg:flex-row lg:justify-between">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h3 className="text-2xl text-neutral-700 font-semibold">{e.Name}</h3>
                                <div className="flex flex-row gap-2 mt-2">
                                    {Array.from({ length: e.Stars }, (_, index) => (
                                        <BiStar key={index} size={24} color="gray" />
                                    ))}
                                </div>
                                <p className="text-md font-semibold mt-2">{e.City}</p>
                                {e.HasPool && <FaSwimmer size={24} color="gray" />}
                                <div className="hidden lg:block lg:mt-4">
                                    <p className={`${e.Policy === "Refundable" ? "text-green-500" : "text-rose-500"}`}>
                                        {e.Policy}
                                    </p>
                                    <p className="text-green-500 text-md font-semibold">
                                        {e.Payment === "pay later" ? "Reserve now, pay later" : "Pay now"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="hidden lg:block lg:col-span-1 lg:relative">
                        <div className="absolute bottom-0 right-0 p-3">
                            <div className={`${e.AvailableRooms < 5 ? "bg-rose-500" : "bg-green-700"} rounded-lg w-30 h-10 text-center text-lg font-semibold p-2`}>
                                We have {e.AvailableRooms} left
                            </div>
                            <h3 className="font-bold text-xl text-center mt-2">EGP {e.Price}</h3>
                            <p className="text-center mt-1">
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
            ))}

            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-500 p-3 lg:hidden">
                <div className={`bg-green-700 rounded-lg w-full h-10 text-center text-lg font-semibold p-2 ${items[0]?.AvailableRooms < 5 ? 'bg-rose-500' : ''}`}>
                    We have {items[0]?.AvailableRooms} left
                </div>
                <h3 className="font-bold text-xl text-center mt-2">EGP {items[0]?.Price}</h3>
                <p className="text-center mt-1">
                    {items[0]?.Taxes !== "included taxes and fees"
                        ? `EGP ${items[0]?.Price * 0.1 + items[0]?.Price} Total`
                        : items[0]?.Taxes}
                </p>
                {items[0]?.Taxes !== "included taxes and fees" && (
                    <p className="text-center">
                        EGP {items[0]?.Price * 0.1} Taxes and fees
                    </p>
                )}
            </div>

            <div className="flex justify-between mt-4">
                <button onClick={Previous} disabled={current === 1}>
                    <BiArrowToLeft size={50} className="bg-white rounded-full p-2 hover:bg-neutral-500 border border-sky-500 text-sky-500" />
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
                <button onClick={Next} disabled={current === numberOfPages}>
                    <BiArrowToRight size={50} className="bg-white rounded-full p-2 hover:bg-neutral-500 border border-sky-500 text-sky-500" />
                </button>
            </div>
        </>
    );
};

export default Property;
