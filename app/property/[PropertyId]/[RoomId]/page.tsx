"use client"

import { properties } from "@/app/components/Data";
import Payment from "@/app/components/Payment";
import Single from "@/app/components/SingleSlider";
import { Context } from "@/app/Context";
import useListYourPopertyModal from "@/app/Hooks/useListYourProperty";
import Modal from "@/app/Modal/Modal";
import { format } from "date-fns";
import React, { FormEvent, useCallback, useState } from "react";
import toast from "react-hot-toast";
import { BiCheckCircle } from "react-icons/bi";
import Loading from "./loading";

interface Params {
    PropertyId: number;
    RoomId: number;
}

const Room: React.FC<{ params: Params }> = ({ params }) => {
    const { state } = Context()
    const [loading, setLoading] = useState(false)
    const hotel = properties.filter(e => e.id == params.PropertyId)
    const room = hotel[0]?.Rooms?.filter(e => e.id == params.RoomId)
    const formattedStartDate = format(state?.date[0]?.startDate, "eeee, MMM d");
    const formattedEndDate = format(state?.date[0]?.endDate, "eeee, MMM d");
    const day = 1000 * 60 * 60 * 24
    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 5000));

            console.log('Payment details:', formData);

            toast.success("Awesome, payment has been processed successfully!");

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return (
            <Loading/>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-100 overflow-hidden">
            <div className="hidden lg:block lg:w-1/2  p-5 border border-neutral-500 rounded-lg">
                <div className="border-b-[2px] pb-2">
                    <Single Image={room[0]?.Img} />
                    <p className="font-bold text-2xl text-center ">{hotel[0].Name}</p>
                    <div className="flex flex-row gap-3 mt-2">
                        <div className="bg-green-700 rounded-lg w-24 h-10 text-center p-2">
                            {hotel[0].Review}
                        </div>
                        <div>
                            <p className="font-semibold text-lg">Wonderful</p>
                            <p>{hotel[0].NumberOfReviews} reviews</p>
                        </div>
                    </div>
                    <p>1 {room[0].type}</p>
                    <div className="mt-5">
                        <p><span className="font-bold text-xl">Check in: </span>{formattedStartDate}</p>
                        <p><span className="font-bold text-xl">Check out:</span> {formattedEndDate}</p>
                        <p>{Math.ceil(Math.abs(state?.date[0]?.endDate.getTime() - state?.date[0]?.startDate.getTime()) / day)} Nights</p>

                    </div>
                </div>
                <div className="flex items-center justify-center h-full text-gray-600 text-xl">
                    Welcome to Our Payment Page
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
                <Payment onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Room
