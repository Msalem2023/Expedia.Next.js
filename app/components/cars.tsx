import { GoLocation } from "react-icons/go"
import { SlCalender } from "react-icons/sl"
import Input from "./Input"

const Cars = () => {
    return (
        <div className="lg:flex lg:flex-row lg:justify-center p-6  lg:gap-3 ">
            <div className="relative">
                <Input Icon={GoLocation} placeholder="Pick up" />
            </div>
            <div className="relative">
                <Input Icon={GoLocation} placeholder="Drop Off" />
            </div>
            <div className="relative">
                <Input Icon={SlCalender} placeholder="Dates" />
            </div>
            <div className="relative">
                <Input Icon={SlCalender} placeholder="Pick-up time" />
                <SlCalender size={24} className="absolute top-6 left-3 focus:hidden " color="blue" />

            </div>
            <div className="relative">
                <Input Icon={SlCalender} placeholder="Drop-off time" />
            </div>
            <button className="w-full p-4 bg-sky-600 rounded-full text-white text-xl font-sembold mt-1">Search</button>
        </div>

    )
}
export default Cars