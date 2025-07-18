import React, {useEffect} from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        });

        AOS.refresh();
    }, [])

    return (
        <div id="contact" className="w-full flex flex-col justify-center items-center">
            { /* 1st box starts here */}
            <div data-aos="zoom-in" data-aos-delay="100" className="w-full bg-themepurple lg:px-20 px-10
            py-8 grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10">
                <img
                    src={client1}
                    alt="client1"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />
                <img
                    src={client2}
                    alt="client2"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />
                <img
                    src={client3}
                    alt="client3"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />
                <img
                    src={client4}
                    alt="client4"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />
                <img
                    src={client5}
                    alt="client5"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />
                <img
                    src={client6}
                    alt="client6"
                    className="w-[130px] opacity-70 cursor-pointer hover:opacity-90"
                />

            </div>
            { /* 1st box ends here */}


            { /* 2nd box starts here */}
            <div className="w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[auto,auto,auto,auto,auto]
            grid-cols-1 justify-between items-start lg:gap-3 gap-10">
                <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center
                items-start gap-10 grow">
                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className="text-4xl font-bold text-themepurple underline italic">
                            Defender Shop
                        </h1>
                        <p className="text-gray-500 text-justify">
                            The best shop with an electrician equipment.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-4">
                        <h1 className="text-black text-xl font-semibold capitalize">
                            Download our app
                        </h1>
                        <div className="flex justify-center items-center gap-4">
                            <img
                                src={google}
                                alt="google"
                            />
                            <img
                                src={apple}
                                alt="apple"
                            />
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in" data-aos-delay="200">
                    <h1 className="text-black text-xl font-semiboldt capitalize">UseFul Links</h1>
                    <ul className="mt-8 flex flex-col justify-center items-start gap-2">
                        <li className="text-gray-500 cursor-pointer hover:text-black">Home</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">About</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Services</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Blogs</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Contact</li>
                    </ul>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <h1 className="text-black text-xl font-semiboldt capitalize">Information</h1>
                    <ul className="mt-8 flex flex-col justify-center items-start gap-2">
                        <li className="text-gray-500 cursor-pointer hover:text-black">Return Policy</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Privacy Policy</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Refund Policy</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Agreement</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">We Our Brand</li>
                    </ul>
                </div>
                <div data-aos="zoom-in" data-aos-delay="400">
                    <h1 className="text-black text-xl font-semiboldt capitalize">Top Category</h1>
                    <ul className="mt-8 flex flex-col justify-center items-start gap-2">
                        <li className="text-gray-500 cursor-pointer hover:text-black">Wireless headphones</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Bluetooth speakers</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Portable devices</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Monio live camera</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Movie projector T6</li>
                    </ul>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                    <h1 className="text-black text-xl font-semiboldt capitalize">Contact Info</h1>
                    <ul className="mt-8 flex flex-col justify-center items-start gap-2">
                        <li className="text-gray-500 cursor-pointer hover:text-black">Phone: +48 600 100 100</li>
                        <li className="text-gray-500 cursor-pointer hover:text-black">Email: info@defender.com</li>
                        <br/>
                        <li className="text-gray-500 cursor-pointer hover:text-black">ul. Kowadełka 34, <br/>34-276 Zadupie, Polska </li>
                    </ul>
                </div>
            </div>
            { /* 2nd box ends here */}

            { /* 3rd box starts here */}
            <div className="w-full lg:px-20 px-5 py-[40px] bg-gray-100">
                <hr className="border-t border-gray-300 py-3"/>
                <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-4
                gap-10">
                    <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
                        <img
                            src={pay1}
                            alt="pay1"
                            className="w-[50px] rounded-lg"
                        />
                        <img
                            src={pay2}
                            alt="pay2"
                            className="w-[50px] rounded-lg"
                        />
                        <img
                            src={pay3}
                            alt="pay3"
                            className="w-[50px] rounded-lg"
                        />
                        <img
                            src={pay4}
                            alt="pay4"
                            className="w-[50px] rounded-lg"
                        />
                    </div>
                    <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center
                    gap-4 flex-grow">
                        <h1 className="text-black font-semibold text-2xl">Subscribe Newsletter</h1>
                        <div>
                            <input type="email" placeholder="Enter valid email"
                            className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg"/>
                            <button className="bg-themepurple lg:w-auto w-full text-white
                            hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg
                            transition-colors font-semibold">
                                SUBMIT
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-[20%] w-full">
                       <p className="text-gray-500 lg:text-end text-center">
                           © {new Date().getFullYear()} Powered by DevShop.
                       </p>
                    </div>
                </div>
            </div>
            { /* 3rd box ends here */}

            {/* scroll to top button */}

            <div id="icon-box" className="bg-themepurple text-white p-3 rounded-full hover:bg-themeyellow
            transition-colors hover:text-black cursor-pointer fixed lg:bottom-6 right-6 bottom-6">
                <Link to="hero" spy={true} offset={-100} smooth={true}>
                    <FaArrowUp className="w-[30px] h-[35px]"/>
                </Link>
            </div>
        </div>
    )
}
export default Footer
