import {create} from"zustand"
interface optionStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useOption=create<optionStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useOption