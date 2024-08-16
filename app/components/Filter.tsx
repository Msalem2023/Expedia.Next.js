"use client"
import { BiArrowToTop, BiChevronDown, BiDollar, BiSearch } from "react-icons/bi"
import Input from "./Input"
import { useState } from "react";
import { useAppContext } from "../FilterReducer";
import { Context } from "../Context";

const Filter= () => {
    const { state, dispatch } = useAppContext();
        return (
            <div>
                <div className="border-b-[3px] p-5">
                    <p className="text-2xl font-bold">
                        Search by property name
                    </p>
                    <Input placeholder="Search by property name" onChange={(e) => dispatch({ type: "Name", payload: e.target.value })} type="text" Icon={BiSearch} />
                </div>
                <div className="p-5">
                    <p className="text-2xl font-bold mb-6">
                        Filter by
                    </p>
                    <div>
                        <p className="text-lg font-semibold">Popular filter</p>
                        <div className="flex items-center p-3">
                            <input onChange={() => dispatch({ type: "Breakfast" })} id="Breakfast" type="checkbox" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Breakfast" className="text-md font-semibold">Breakfast included</label>
                        </div>
                        <div className="flex items-center p-3">
                            <input onChange={() => dispatch({ type: "Pool" })} id="Pool" type="checkbox" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Pool" className="text-md font-semibold">Pool</label>
                        </div>
                        <div className="flex items-center p-3">
                            <input onChange={() => dispatch({ type: "Parking" })} id="Parking" type="checkbox" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Parking" className="text-md font-semibold">Parking</label>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Price</p>
                        <div className="relative mb-6 w-full max-w-lg">
                            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                            <input
                                id="labels-range-input"
                                type="range"
                                min={100}
                                max={1000}
                                value={state.Price}
                                onChange={(e) => dispatch({ type: "Price", payload:parseInt( e.target.value) })}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                                style={{
                                    background: `linear-gradient(to right, #3b82f6 ${((state.Price - 100) / (1000 - 100)) * 100}%, #e5e7eb ${((state.Price - 100) / (1000 - 100)) * 100}%)`,
                                }}
                            />
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min (EGP 100)</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max (EGP 1500)</span>
                        </div>
                    </div>
                    <div className="pt-5">
                        <p className="text-lg font-semibold">Policy</p>
                        <div className="flex items-center p-3">
                            <input onChange={() => dispatch({ type: "Policy" })} id="Refundable" type="checkbox" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Refundable" className="text-md font-semibold">Refundable</label>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Payment type</p>
                        <div className="flex items-center p-3">
                            <input onChange={() => dispatch({ type: "Payment" })} id="pay-later" type="checkbox" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="pay-later" className="text-md font-semibold">Pay later</label>
                        </div>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">Guest rating</p>
                        <div className="flex items-center p-3">
                            <input id="Good" onChange={() => dispatch({ type: "Rating", payload: "good" })} type="radio" name="rating" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Good" className="text-lg font-semibold">Good</label>
                        </div>
                        <div className="flex items-center p-3">
                            <input id="Very-Good" onChange={() => dispatch({ type: "Rating", payload: "very-good" })} type="radio" name="rating" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Very-Good" className="text-lg font-semibold">Very Good</label>
                        </div>
                        <div className="flex items-center p-3">
                            <input id="Excellent" onChange={() => dispatch({ type: "Rating", payload: "excellent" })} type="radio" name="rating" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Excellent" className="text-lg font-semibold">Excellent</label>
                        </div>
                        <div className="flex items-center p-3">
                            <input id="Wonderful" onChange={() => dispatch({ type: "Rating", payload: "wonderful" })} type="radio" name="rating" className="w-5 h-5 text-sky-600 mr-2" />
                            <label htmlFor="Wonderful" className="text-lg font-semibold">Wonderful</label>
                        </div>
                    </div>
                </div>
            </div>
       

    )
}

export default Filter
