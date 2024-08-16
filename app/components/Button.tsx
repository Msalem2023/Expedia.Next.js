import { IconType } from "react-icons"

interface ButtonProps{
    disabled:boolean,
    onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void
    label:string
    Icon?:IconType
    small:boolean
}
const Button:React.FC<ButtonProps>=({
    disabled,
    onClick,
    Icon,
    label,
    small,
})=>{
    return(
        <button onClick={onClick} disabled={disabled} className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-full hover:opacity-80 transition w-full mt-2 p-3 lg:mt-none bg-sky-500 border-sky-500 text-white ${small?"py-1 text-sm  font-light border-[1px] w-2/6 ":"py-3 text-md font-semibold border-[3px]"}`} >
            {Icon&&(<Icon size={24} className="mx-auto"/>)}
            {label}
        </button>


    )
}
export default Button