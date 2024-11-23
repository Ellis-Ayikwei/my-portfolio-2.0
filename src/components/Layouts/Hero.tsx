'use client';

import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import image4 from '../../assets/ellis1.jpg';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        // <div className="bg-gradient-to-r from-[#dc711a] via-[#e1c259] to-[#dc711a]">
        <div className="bg-[#dc711a]">
            <div className="relative px-6 pt-14 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-3 opacity-90 items-center text-white">
                <div className="md:col-span-2 lg:col-span-1 items-center justify-center text-white">
                    <h1 className="text-balance text-6xl items-center justify-center font-bold tracking-tight text-white sm:text-6xl">
                        Hi,<br/>
                        <br className="block md:hidden shadow-lg" /> My Name Is <br /> Ellis Armah Ayikwei <br className="hidden md:block " />
                    </h1>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Explore My Story
                        </a>
                    </div>
                </div>
                <div className="flex flex-wrap flex-shrink-0 lg:flex-nowrap items-center justify-center md:col-span-1 lg:col-span-1">
                    <img src={image4} alt="Hero3" className="w-auto w-full h-auto  rounded-lg border-4 border-white" />
                </div>
                <div className="md:col-span-2 lg:col-span-1 items-end justify-end mt-auto mb-0">
                    <h1 className="text-balance text-6xl items-center justify-center font-bold tracking-tight text-white sm:text-6xl">I am a Software Engineer & a Professional IT Support</h1>
                    <div className="flex gap-6">
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                                Lets Work Together
                            </a>
                        </div>
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            >
                               View My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <div className="team-icon flex items-center justify-center space-x-4">
                    <a className="bg-white hover:bg-gray-300 text-purple-700 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md
" href="">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a className="bg-white hover:bg-gray-300 text-blue-500 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md
" href="">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="bg-white hover:bg-gray-300 text-blue-700 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md
" href="">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="bg-white hover:bg-gray-300 text-pink-500 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md
" href="">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    );
}
