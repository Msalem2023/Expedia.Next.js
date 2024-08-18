import { useState, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import Single from './SingleSlider';

interface Ad {
    rate: number,
    taxes: string,
    Stay: number,
    discount: number,
    PricePernight: number,
    City: string,
    Name: string,
    Img: string[]
}

interface SingleProps {
    Image: Ad[],
}

const Slider: React.FC<SingleProps> = ({ Image }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1); // Default to 1 for small screens

    useEffect(() => {
        // Update the number of visible slides based on screen width
        const updateSlidesToShow = () => {
            if (window.innerWidth >= 1024) {
                setSlidesToShow(4); // Large screens
            } else if (window.innerWidth >= 768) {
                setSlidesToShow(3); // Medium screens
            } else {
                setSlidesToShow(1); // Small screens
            }
        };

        // Initial check
        updateSlidesToShow();

        // Add event listener for window resize
        window.addEventListener('resize', updateSlidesToShow);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const handleRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + slidesToShow >= Image.length
                ? 0
                : prevIndex + slidesToShow
        );
    };

    const handleLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - slidesToShow < 0
                ? Math.max(0, Image.length - slidesToShow)
                : prevIndex - slidesToShow
        );
    };

    return (
        <div className='relative w-full h-full overflow-hidden'>
            <div className='flex items-center'>
                {currentIndex > 0 && (
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
                        {Image.map((e, index) => (
                            <div key={index} className={`flex-shrink-0 ${slidesToShow === 1 ? 'w-full' : slidesToShow === 3 ? 'w-1/3' : 'w-1/4'} p-2`}>
                                <Single
                                    rate={e.rate}
                                    taxes={e.taxes}
                                    Stay={e.Stay}
                                    discount={e.discount}
                                    PricePernight={e.PricePernight}
                                    City={e.City}
                                    Name={e.Name}
                                    image={e.Img}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {currentIndex + slidesToShow < Image.length && (
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
};

export default Slider;
