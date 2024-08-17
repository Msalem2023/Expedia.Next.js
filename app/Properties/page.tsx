"use client"
import Filter from "../components/Filter"
import Property from "../components/Property"
import { FilterProvider } from "../FilterReducer"

const Properties = () => {
    return (
            <div className="grid grid-cols-4">
                <div className="hidden lg:block lg:col-span-1 ">
                    <Filter />
                </div>
                <div className="lg:col-span-3 col-span-4">
                    <Property />
                </div>
            </div>
    )
}

export default Properties
