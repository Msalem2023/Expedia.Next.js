import { IconType } from "react-icons"

interface ButtonProps{
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
    label:string|null|undefined
    Icon?:IconType
}
const Button:React.FC<ButtonProps>=({
    onClick,
    Icon,
    label,
})=>{
    return(
        <button onClick={onClick} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-full mt-2 p-3 lg:mt-none bg-sky-500 border-sky-500 text-white "py-3 text-md font-semibold border-[3px]"}`} >
            {Icon&&(<Icon size={24} className="mx-auto"/>)}
            {label}
        </button>


    )
}
export default Button