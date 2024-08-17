import Image from 'next/image';
import { useState } from 'react';
import { BiHeart } from 'react-icons/bi';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface SingleProps {
    image: string[];
    discription?: boolean;
    City?: string;
    Name?: string;
    rate?: number;
    price?: number;
    Stay?: number;
    PricePernight?: number;
    discount?: number;
    taxes?: string;
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
            prevIndex === image.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? image.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px]">
            <div className="relative flex items-center w-full h-full">
                {image.length > 1 && (
                    <MdArrowBackIosNew
                        onClick={handleLeft}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                        size={24}
                        color="black"
                    />
                )}
                <BiHeart className="absolute top-2 right-2 text-rose-500 bg-white rounded-full p-2" size={24} />
                <div className="w-full h-full">
                    <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={image[currentIndex]}
                        alt="Explore"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                {image.length > 1 && (
                    <MdArrowForwardIos
                        onClick={handleRight}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 z-50"
                        size={24}
                        color="black"
                    />
                )}
            </div>
            {Name && (
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white font-semibold text-sm">{City}</p>
                    <h5 className="text-lg text-white font-bold pt-2">{Name}</h5>
                    <p className="text-white font-semibold text-sm">{rate}/10.0</p>
                    <h5 className="text-lg text-white font-bold pt-2">EGP {finalPrice.toFixed(2)}</h5>
                    <p className="text-white font-semibold text-sm">Price Per Night: EGP {PricePernight}</p>
                    <p className="text-white font-semibold text-sm">for {Stay} Nights</p>
                    <p className="text-white font-semibold text-sm">{taxes} taxes & fees</p>
                    <p className="text-white font-semibold text-sm bg-green-500 text-center rounded-lg px-2 py-1">{discount}% off</p>
                </div>
            )}
        </div>
    );
};

export default Single;
