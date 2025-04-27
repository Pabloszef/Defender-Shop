import React, {useEffect} from 'react'
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',
        });

        AOS.refresh();
    }, [])

    return (
        <div className="w-full lg:px-20 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center
        items-center gap-10">
            <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center
            gap-2">
                <img
                    src={shipping}
                    alt="shipping"
                    className="mb-[20px] w-[60px]"
                />
                <h1 className="text-xl text-black font-semibold">Worldwide Shipping</h1>
                <p className="text-[17px] text-gray-500">We deliver our products everywhere</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center
            gap-2">
                <img
                    src={payment}
                    alt="shipping"
                    className="mb-[20px] w-[60px]"
                />
                <h1 className="text-xl text-black font-semibold">Secure Payment</h1>
                <p className="text-[17px] text-gray-500">You can pay just the way you like it</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center
            gap-2">
                <img
                    src={refund}
                    alt="shipping"
                    className="mb-[20px] w-[60px]"
                />
                <h1 className="text-xl text-black font-semibold">Return/Refund</h1>
                <p className="text-[17px] text-gray-500">You can return the product or get a cash back</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-center
            gap-2">
                <img
                    src={gift}
                    alt="shipping"
                    className="mb-[20px] w-[60px]"
                />
                <h1 className="text-xl text-black font-semibold">Best Gift Voucher</h1>
                <p className="text-[17px] text-gray-500">It's the best idea to surprise your friend</p>
            </div>
        </div>
    )
}
export default Services
