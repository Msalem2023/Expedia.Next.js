import { GoLocation } from "react-icons/go"
import { SlCalender } from "react-icons/sl"
import Input from "./Input"

const ThingsToDo = () => {
    return (
        <div className="lg:flex lg:flex-row lg:justify-center p-6  lg:gap-3 ">

            <div className="relative">
                <Input placeholder="Where?" Icon={GoLocation} />
            </div>
            <div className="relative">
                <Input placeholder="when?" Icon={SlCalender} />
            </div>
            <div>
                <button className="p-4 bg-sky-600 rounded-full text-white text-xl font-sembold mt-1">Search</button>
            </div>
        </div>
    )
}
export default ThingsToDo