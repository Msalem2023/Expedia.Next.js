"use client"
import Image from 'next/image';
import { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
interface SingleProps {
    image: string[]
    discription?: boolean
    City?: string,
    Name?: string,
    rate?: number,
    price?: number,
    Stay?: number | undefined,
    PricePernight?: number | undefined,
    discount?: number | undefined,
    taxes?: string
}

const Single: React.FC<SingleProps> = ({
    image,
    discription,
    price,
    Stay,
    PricePernight,
    taxes,
    discount,
    rate,
    City,
    Name
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const PricePerNight = PricePernight ?? 0;
    const stay = Stay ?? 0;
    const discountValue = discount ?? 0;
    const finalPrice = PricePerNight * stay * (1 - discountValue / 100);


    const handleRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === image.length - 1
                ? 0
                : prevIndex + 1
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0
                ? image.length - 1
                : prevIndex - 1
        );
    };

    return (
        <div>

            <div className='relative sm:w-2/6 lg:w-full  lg:h-[300px] md:h-[340px]  h-[323px] max-w-screen-lg mx-auto overflow-hidden'>
                <div className='relative flex items-center sm:w-2/6  lg:w-full h-full'>
                    {image?.length > 1 && (
                        <MdArrowBackIosNew
                            onClick={handleLeft}
                            className='absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full hover:bg-slate-500 p-3 z-50'
                            size={50}
                            color='white'
                        />
                    )}

                    <BiHeart className='absolute top-0 right-3 text-rose-500 bg-white rounded-full p-2' size={50} />
                    <div className='w-full h-full'>
                        <Image 
                            className='w-full h-full object-cover rounded-3xl'
                            src={image[currentIndex]}
                            alt='Explore'
                        />
                    </div>

                    {image.length > 1 && (
                        <MdArrowForwardIos
                            onClick={handleRight}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-transparent hover:bg-slate-500 p-3 z-50'
                            size={50}
                            color='white'
                        />
                    )}
                </div>
            </div>
            {Name && <div>
                <p className='text-white font-semibold text-2xl p-3 drop-shadow-lg'>{City}</p>
                <h5 className='text-4xl text-white font-bold pt-5 drop-shadow-lg'>{Name}</h5>
                <p className='text-white font-semibold text-2xl p-3 drop-shadow-lg'>{rate}/10.0</p>
                <h5 className='text-4xl text-white font-bold pt-5 drop-shadow-lg'>EGP {}</h5>
                <p className='text-white font-semibold text-xl drop-shadow-lg'>Price Per Night: EGP {PricePernight}</p>
                <p className='text-white font-semibold text-xl drop-shadow-lg '>for {Stay} Nights</p>
                <p className='text-white font-semibold text-xl drop-shadow-lg'>{taxes} taxes & fees</p>
                <p className='text-white font-semibold text-xl bg-green-500 w-1/3 text-center rounded-lg px-3 drop-shadow-lg'>{discount}% off</p>
            </div>}
        </div>

    );
};

export default Single;
