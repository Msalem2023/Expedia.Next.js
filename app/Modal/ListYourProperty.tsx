"use client"

import { useMemo, useState } from "react"
import useListYourPopertyModal from "../Hooks/useListYourProperty"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { categories } from "../components/Data"
import CategoryInput from "../components/catagory"
import Heading from "../components/heading"
import Input from "../components/Input"
import { GoLocation } from "react-icons/go"
import Counter from "../components/Counter"
import Modal from "./Modal"
import ImageUpload from "../components/ImageUpload"
import dynamic from "next/dynamic"
import CountrySelect from "../components/Countries"
import Special from "../components/Special"
import toast from "react-hot-toast"
import { Router } from "next/router"
import { useRouter } from "next/navigation"
import axios from "axios"


enum STEPS {
    Category = 0,
    Location = 1,
    Info = 2,
    Images = 3,
    Description = 4,
    Price = 5

}

const RentModal = () => {
    const rentModal = useListYourPopertyModal()
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    const [step, setStep] = useState(STEPS.Category)
    const { register, handleSubmit, setValue, watch, formState: {
        errors, isValid
    }, reset } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            price: 1,
            title: "",
            describtion: ""
        },
        mode: 'onChange'
    })
    const category = watch("category")
    const location = watch("location")
    const guestCount = watch("guestCount")
    const roomCount = watch("roomCount")
    const bathroomCount = watch("bathroomCount")



    const Map = useMemo(() => dynamic(() => import("../components/map"), { ssr: false }), [location])

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }
    const onBack = () => {
        setStep((value) => value - 1)
    }
    const onNext = () => {
        setStep((value) => value + 1)
    }
    const actionLabel = useMemo(() => {
        if (step === STEPS.Price) {
            return "create";
        }
        return "Next"

    }, [step])
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.Category) {
            return undefined;
        }
        return "Back"

    }, [step])
    let bodycontent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="Which of these best describe your place?"
                subtitle="pick a category"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput
                            label={item.label}
                            icon={item.icon}
                            selected={category === item.label}
                            onClick={(category) => setCustomValue("category", category)}

                        />

                    </div>
                ))}

            </div>

        </div>
    )
    if (step === STEPS.Location) {
        bodycontent = (
            <div className="flex flex-col gap-8">
                <Heading
                    center
                    title="where is your place located"
                    subtitle="help guests find you"
                />
                <CountrySelect value={location} onChange={(value) => setCustomValue("location", value)} />
                {location && <Map center={location?.latlng} />}
            </div>
        )

    }

    if (step === STEPS.Info) {
        bodycontent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="share some basics about your Property"
                    subtitle="what amenities do you have"
                />
                <Counter title="Guest" onChange={(guestCount) => setCustomValue("guestCount", guestCount)} value={guestCount} subtitle="How many guests do you allow?" />
                <Counter title="Rooms" onChange={(roomCount) => setCustomValue("roomCount", roomCount)} value={roomCount} subtitle="How many rooms do you have?" />
                <Counter title="bathroom" onChange={(bathroomCount) => setCustomValue("bathroomCount", bathroomCount)} value={bathroomCount} subtitle="How many bathroom do you have?" />

            </div>
        )

    }
    if (step === STEPS.Images) {
        bodycontent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="add a photo of your place"
                    subtitle="show guests what your place looks like"
                />
                <ImageUpload />
            </div>
        )
    }
    if (step == STEPS.Description) {
        bodycontent = (
            <div className="flex flex-col gap-8">
                <Heading title="How would you describe your place?" subtitle="Short and sweet works best!" />
                <Special id="title" label="title" register={register} errors={errors} required />
                <hr />
                <Special id="description" label="description" register={register} errors={errors} required />
            </div>
        );
    }

    if (step === STEPS.Price) {
        bodycontent = (
            <div className="flex flex-col gap-8 ">
                <Heading title="Now, set your price" subtitle="How much do you charge per night?" />
                <Special id="price" label="price" type="number" formatPrice register={register} errors={errors} required />
            </div>
        );
    }
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.Price) {
            return onNext();
        }
        setIsLoading(true);
        axios
            .post("/api/listings", data)
            .then((res) => {
                toast.success("Listing Created!");
                console.log(res)
                router.refresh();
                reset();
                setStep(STEPS.Category);
                rentModal.onClose();
            })
            .catch((err) => {
                toast.error("Something went wrong.");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };



    return (
        <Modal
            isOpen={rentModal.isOpen}
            title="Expedia"
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            SecondaryLabel={secondaryActionLabel}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.Category ? undefined : onBack}
            body={bodycontent}
            disabled={!isValid}
        />

    )
}
export default RentModal