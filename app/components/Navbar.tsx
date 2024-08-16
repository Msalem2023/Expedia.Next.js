"use client"
import { BiMenu } from "react-icons/bi"
import Menu from "./Drop-down"
import List from "./List"
const Navbar = () => {

    return (
        <div className="flex flex-row justify-between shadow">
            <div className=" flex flex-row gap-6 items-center p-6">
                <div>
                    <img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=4406&2&6f9ec7db" alt="Home Page" />
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
                    <BiMenu size={30}/>

                </div>
            </div>

        </div>

    )
}
export default Navbar