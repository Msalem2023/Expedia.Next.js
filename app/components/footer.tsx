import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <Image
                            src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
                            alt="Expedia Group Logo"
                            className="h-12 mb-4"
                        />
                        <h3 className="text-xl font-bold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li className="py-2"><a href="/jobs" className="hover:text-blue-400">Jobs</a></li>
                            <li className="py-2"><a href="/list-your-property" className="hover:text-blue-400">List your property</a></li>
                            <li className="py-2"><a href="/partnerships" className="hover:text-blue-400">Partnerships</a></li>
                            <li className="py-2"><a href="/advertising" className="hover:text-blue-400">Advertising</a></li>
                            <li className="py-2"><a href="/affiliate-marketing" className="hover:text-blue-400">Affiliate Marketing</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            <li className="py-2"><a href="/germany-travel-guide" className="hover:text-blue-400">Germany travel guide</a></li>
                            <li className="py-2"><a href="/hotels-in-germany" className="hover:text-blue-400">Hotels in Germany</a></li>
                            <li className="py-2"><a href="/holiday-rentals-in-germany" className="hover:text-blue-400">Holiday rentals in Germany</a></li>
                            <li className="py-2"><a href="/holiday-packages-in-germany" className="hover:text-blue-400">Holiday packages in Germany</a></li>
                            <li className="py-2"><a href="/domestic-flights" className="hover:text-blue-400">Domestic flights</a></li>
                            <li className="py-2"><a href="/car-hire-in-germany" className="hover:text-blue-400">Car hire in Germany</a></li>
                            <li className="py-2"><a href="/all-accommodation-types" className="hover:text-blue-400">All accommodation types</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Policies</h3>
                        <ul className="space-y-2">
                            <li className="py-2"><a href="/general-terms-and-conditions" className="hover:text-blue-400">General terms and conditions</a></li>
                            <li className="py-2"><a href="/fewodirekt-terms" className="hover:text-blue-400">FeWoDirekt terms and conditions</a></li>
                            <li className="py-2"><a href="/privacy" className="hover:text-blue-400">Privacy</a></li>
                            <li className="py-2"><a href="/cookies" className="hover:text-blue-400">Cookies</a></li>
                            <li className="py-2"><a href="/legal-info" className="hover:text-blue-400">Legal information / Contact us</a></li>
                            <li className="py-2"><a href="/content-guidelines" className="hover:text-blue-400">Content guidelines and reporting content</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h3 className="text-xl font-bold mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li><a href="/support" className="hover:text-blue-400">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-t border-gray-700 pt-4 mt-8">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Expedia Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
