import {create} from"zustand"
interface DateStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useDate=create<DateStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useDate