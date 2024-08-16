"use client"
import { useCallback, useMemo, useState } from "react"
import useOption from "../Hooks/useOption"
import { useAppContext } from "../FilterReducer"
import { BiMinus, BiPlus } from "react-icons/bi"
import Button from "../components/Button"
import { Context } from "../Context"
import Modal from "./Modal"
const OptionModal = () => {
    const { dispatch } = Context()
    const modal = useOption()
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1

    })
    const handelOptions = (name: string, operation: string) => {
        setOption((prev) => {
            return { ...prev, [name]: operation === 'i' ? option[name] + 1 : option[name] - 1 }

        })

    }
    const handleChange = useCallback(() => {
        dispatch({ type: "option", payload: option })
        modal.onClose()
    }, [dispatch, option]);
    const body = (
        <div className="b-0 flex flex-col justify-around z-50 bg-white  w-full shadow rounded-lg">
            <div className='flex flex-row py-3 px-3'>
                <span className='flex text-lg font-semibold text-neutral-500 w-48 '>Adults</span>
                <div className=' flex justify-end gap-3 w-full'>
                    <Button small Icon={BiMinus} onClick={() => handelOptions("adult", "d")} disabled={option.adult <= 0} />
                    <span className='text-sky-800 pt-3'>{option.adult}</span>
                    <Button small Icon={BiPlus} onClick={() => handelOptions("adult", "i")} />
                </div>
            </div>
            <div className='flex flex-row px-3 lg:px-3 '>
                <span className='text-lg font-semibold text-neutral-500 w-48 '>Children</span>
                <div className='flex justify-end gap-3 w-full'>
                    <Button small Icon={BiMinus} onClick={() => handelOptions("children", "d")} disabled={option.children <= 0} />
                    <span className='text-sky-800 pt-3'>{option.children}</span>
                    <Button small Icon={BiPlus} onClick={() => handelOptions("children", "i")} />
                </div>
            </div>
            <div className='flex flex-row px-3 py-3'>
                <span className='text-lg font-semibold text-neutral-500 w-48'>Rooms</span>
                <div className='flex justify-end gap-3 w-full'>
                    <Button small Icon={BiMinus} onClick={() => handelOptions("room", "d")} disabled={option.room <= 0} />
                    <span className='text-sky-800 pt-3'>{option.room}</span>
                    <Button small Icon={BiPlus} onClick={() => handelOptions("room", "i")} />
                </div>
            </div>
        </div>
    )
    return (
        
        <Modal actionLabel="Save" title="Options" body={body} onClose={modal.onClose} onSubmit={handleChange} isOpen={modal.isOpen} />
    )
}

export default OptionModal