import {create} from"zustand"
interface ListYourPopertyModalStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useListYourPopertyModal=create<ListYourPopertyModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useListYourPopertyModal