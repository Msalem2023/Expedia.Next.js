import {create} from"zustand"
interface DestinationStore{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useDestination=create<DestinationStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useDestination