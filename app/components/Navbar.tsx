"use client"
import { BiMenu } from "react-icons/bi"
import Menu from "./Drop-down"
import List from "./List"
import Image from "next/image"
import useListYourPopertyModal from "../Hooks/useListYourProperty"
const Navbar = () => {
    const rentModal=useListYourPopertyModal()


    return (
        <div className="flex flex-row justify-between shadow">
            <div className=" flex flex-row gap-6 items-center p-6">
                <div>
                    <p className="text-3xl text-sky-600 font-bold">Expedia</p>
                </div>
                <div className="hidden lg:block">
                    <Menu />
                </div>
            </div>
            <div>
                <div className="hidden lg:block">
                    <List />
                </div>
                <div className="lg:hidden p-6 cursor-pointer ">
                    <BiMenu onClick={rentModal.onOpen} size={30}/>

                </div>
            </div>

        </div>

    )
}
export default Navbar