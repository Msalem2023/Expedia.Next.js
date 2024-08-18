import { useState } from 'react';
import { BiArrowBack, BiArrowToLeft, BiArrowToRight, BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import Single from './SingleSlider';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

interface Ad {
    rate: number,
    taxes: string,
    Stay: number,
    discount: number,
    PricePernight: number,
    City: string
    Name: string
    Img: string[]
}

interface SingleProps {
    Image:Ad[],

}


const Slider: React.FC<SingleProps> = ({ Image }) => {

    const NumberOfVisibleSlides = 2;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + NumberOfVisibleSlides >= Image.length
                ? 0
                : prevIndex + NumberOfVisibleSlides
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - NumberOfVisibleSlides < 0
                ? Math.max(0, Image.length - NumberOfVisibleSlides)
                : prevIndex - NumberOfVisibleSlides
        );
    };
    console.log(Image.map((e) => (e)))

    return (
        <div className='relative w-full h-full  overflow-hidden'>
            <div className='flex items-center'>
                {currentIndex > 1 && (
                    <MdArrowBackIosNew
                        onClick={handleLeft}
                        className='absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-blue-500 bg-white p-3 z-50'
                        size={50}
                        color='blue'
                    />
                )}

                <div className='flex w-full overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500'
                        style={{ transform: `translateX(-${(currentIndex / Image.length) * 100}%)` }}
                    >
                        {Image.map((e,index) => (
                            <div key={index} className='flex-shrink-0 lg:w-1/4 md:w-1/3 sm:w-[64] p-2'>
                                <Single rate={e.rate} taxes={e.taxes} Stay={e.Stay} discount={e.discount}  PricePernight={e.PricePernight} City={e.City} Name={e.Name} image={e.Img} />
                            </div>
                        ))}
                    </div>
                </div>

                =                {currentIndex + NumberOfVisibleSlides < Image.length && (
                    <MdArrowForwardIos
                        onClick={handleRight}
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full border border-blue-500 bg-white p-3'
                        size={50}
                        color='blue'
                    />
                )}
            </div>
        </div>
    );
}

export default Slider;
