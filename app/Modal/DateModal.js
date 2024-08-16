"use client"
import { useCallback, useMemo, useState } from "react"
import useDate from "../Hooks/useDate"
import { Context } from "../Context"
import Modal from "./Modal"
import { DateRange, RangeKeyDict } from "react-date-range"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



const DateModal = () => {
    const { dispatch } = Context()
    const modal = useDate()
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const handleChange = useCallback(() => {
        dispatch({ type: "date", payload: date });
        modal.onClose()
    }, [dispatch, date, modal]);

    const body = (
        <div className="w-5/6 mx-auto rounded-md  z-10 overflow-hidden">
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="w-full"
            />
        </div>
    )
    return (
        <Modal actionLabel="Save" title="Dates" body={body} onClose={modal.onClose} onSubmit={handleChange} isOpen={modal.isOpen} />
    )
}

export default DateModal