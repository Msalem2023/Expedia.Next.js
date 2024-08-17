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
            {/* Property Cards */}
            <div className="container mx-auto px-4">
                {items.map(e => (
                    <div key={e.id} className="mb-10 p-6 border border-neutral-300 rounded-lg shadow-lg flex flex-col lg:flex-row lg:items-start bg-white">
                        {/* Image Section */}
                        <div className="w-full lg:w-1/3 lg:pr-4">
                            <div className="relative">
                                <div className="hidden lg:block">
                                    <Single image={e.Img} />
                                </div>
                                <div className="lg:hidden">
                                    <Image className="w-full h-60 rounded-lg object-cover" src={e.Img[0]} alt="property" />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <Link href={`/property/${e.id}`} className="w-full lg:w-2/3 flex flex-col">
                            <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-6">
                                <div className="w-full lg:w-2/3">
                                    <h3 className="text-3xl text-neutral-800 font-bold mb-2">{e.Name}</h3>
                                    <div className="flex flex-row gap-2 mb-2">
                                        {Array.from({ length: e.Stars }, (_, index) => (
                                            <BiStar key={index} size={24} color="gray" />
                                        ))}
                                    </div>
                                    <p className="text-md font-medium text-neutral-600">{e.City}</p>
                                    {e.HasPool && <FaSwimmer size={24} color="gray" className="mt-2" />}
                                    <div className="hidden lg:block mt-4">
                                        <p className={`text-md ${e.Policy === "Refundable" ? "text-green-500" : "text-red-500"}`}>
                                            {e.Policy}
                                        </p>
                                        <p className="text-green-500 text-md font-medium">
                                            {e.Payment === "pay later" ? "Reserve now, pay later" : "Pay now"}
                                        </p>
                                    </div>
                                </div>

                                {/* Review Section for Large Screens */}
                                <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:mt-4">
                                    <div className={`bg-${e.Review ? "green-700" : "gray-300"} rounded-lg w-24 h-10 text-center text-white font-semibold p-2`}>
                                        {e.Review || "No Review"}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Wonderful</p>
                                        <p>{e.NumberOfReviews} reviews</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Price and Availability Section */}
                        <div className="lg:w-1/3 lg:ml-4 lg:mt-4 lg:flex lg:flex-col lg:items-end lg:justify-between">
                            <div className={`bg-${e.AvailableRooms < 5 ? "rose-500" : "green-700"} rounded-lg w-full h-12 text-center text-white font-semibold p-2 mb-4`}>
                                We have {e.AvailableRooms} left
                            </div>
                            <div className="text-right">
                                <h3 className="font-bold text-2xl mb-1">EGP {e.Price}</h3>
                                <p className="text-md mb-1">
                                    {e.Taxes !== "included taxes and fees"
                                        ? `EGP ${e.Price * 0.1 + e.Price} Total`
                                        : e.Taxes}
                                </p>
                                {e.Taxes !== "included taxes and fees" && (
                                    <p className="text-md">
                                        EGP {e.Price * 0.1} Taxes and fees
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Price Section for Small Screens */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-300 p-3 lg:hidden">
                {items.length > 0 && (
                    <>
                        <div className={`bg-${items[0].AvailableRooms < 5 ? "rose-500" : "green-700"} rounded-lg w-full h-10 text-center text-lg font-semibold p-2`}>
                            We have {items[0].AvailableRooms} left
                        </div>
                        <h3 className="font-bold text-xl text-center mt-2">EGP {items[0].Price}</h3>
                        <p className="text-center mt-1">
                            {items[0].Taxes !== "included taxes and fees"
                                ? `EGP ${items[0].Price * 0.1 + items[0].Price} Total`
                                : items[0].Taxes}
                        </p>
                        {items[0].Taxes !== "included taxes and fees" && (
                            <p className="text-center">
                                EGP {items[0].Price * 0.1} Taxes and fees
                            </p>
                        )}
                    </>
                )}
            </div>

            {/* Pagination Controls */}
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
