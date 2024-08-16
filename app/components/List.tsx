import useListYourPopertyModal from "../Hooks/useListYourProperty"

const List = () => {
    const rentModal=useListYourPopertyModal()
    const list=["List your Property","Support","Trips","Sign in"]
    return (
        <div className="flex gap-4 p-6">
            {list.map((e)=>(
                <ul key={e}>
                    <li onClick={e==="List your Property"?rentModal.onOpen:undefined} className="text-lg font-semibold hover:text-blue-500 cursor-pointer" >{e}</li>
                </ul>
            ))}
            
        </div>

    )
}
export default List