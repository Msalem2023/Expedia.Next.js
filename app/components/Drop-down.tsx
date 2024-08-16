import { BiArrowToBottom } from "react-icons/bi"

const Menu = () => {
    return (
        <div className="flex flex-row gap-2 items-center hover:text-blue-500 cursor-pointer">
            <p className="text-lg font-semibold">
                Shop Travel
            </p>
            <div>
                <BiArrowToBottom size={24} />
            </div>
        </div>
    )
}
export default Menu