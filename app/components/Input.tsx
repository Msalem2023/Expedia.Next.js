import { IconType } from "react-icons"

interface InputProps {
    type?: string,
    value?: string,
    placeholder: string
    Icon?: IconType,
    onClick?: () => void,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input: React.FC<InputProps> = ({
    type,
    onClick,
    value,
    placeholder,
    Icon,
    onChange
}) => {
    return (
        <>
            <div className="relative">
                <input onChange={onChange} placeholder={placeholder} type={type} value={value} onClick={onClick} className={`pl-[calc(2.75rem-1px)] border-[2px] border-neutral-500 border-solid focus:border-none focus:ring-2 focus:ring-sky-500 p-4 w-full mt-2 rounded-full outline-none`} />
                {Icon && <Icon size={24} className="absolute top-6 left-3 focus:hidden " color="blue" />}
            </div>
        </>

    )
}

export default Input