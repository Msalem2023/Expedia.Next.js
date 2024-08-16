"use client"
import { useCallback, useMemo, useState } from "react"
import useOption from "../Hooks/useOption"
import { useAppContext } from "../FilterReducer"
import { BiMinus, BiPlus } from "react-icons/bi"
import Button from "../components/Button"
import { Context } from "../Context"
import Modal from "./Modal"
import Counter from "../components/Counter"
import Heading from "../components/heading"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
const OptionModal = () => {
    const { dispatch } = Context()
    const modal = useOption()
    const { register, handleSubmit, setValue, watch, formState: {
        errors, isValid
    }, reset } = useForm<FieldValues>({
        defaultValues: {
            adult: 1,
            children: 0,
            room: 1
        },
        mode: 'onChange'
    })
    const adult = watch("adult")
    const children = watch("children")
    const room = watch("room")
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        
        dispatch({ type: "option", payload: data })
        modal.onClose()
    };
    
    const body = (
        <div className="flex flex-col gap-8">
            <Heading
                title="share some basics about your Property"
                subtitle="what amenities do you have"
            />
            <Counter title="adult" onChange={(adult) => setCustomValue("adult", adult)} value={adult} subtitle="Number of Guests?" />
            <Counter title="children" onChange={(children) => setCustomValue("children", children)} value={children} subtitle="How many children will be with you?" />
            <Counter title="room" onChange={(room) => setCustomValue("room", room)} value={room} subtitle="How many rooms would you like to book?" />

        </div>
    )

    return (

        <Modal actionLabel="Save" title="Options" body={body} onClose={modal.onClose} onSubmit={handleSubmit(onSubmit)} isOpen={modal.isOpen} />
    )
}

export default OptionModal