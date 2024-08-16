"use client"
import { Context } from "../Context"
import Modal from "./Modal"
import CountrySelect from "../components/Countries"
import Heading from "../components/heading"
import useDestination from "../Hooks/useDestination"
const DestinationModal = () => {
    const { state,dispatch } = Context()
    const modal = useDestination()
    const bodycontent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="where is your place located"
                subtitle="help guests find you"
            />
            <CountrySelect value={state?.destination} onChange={(value) => dispatch({type:"destination",payload: value})} />
        </div>
    )
    return (
        <Modal actionLabel="Save" title="Dates" body={bodycontent} onClose={modal.onClose} onSubmit={modal.onClose} isOpen={modal.isOpen} />
    )
}

export default DestinationModal