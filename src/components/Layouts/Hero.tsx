'use client';

import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef, useState } from 'react';
import image4 from '../../assets/ellis1.jpg';
import './jh.css';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const boxRef = useRef<HTMLDivElement | null>(null);
    const nameRef = useRef<HTMLParagraphElement | null>(null);
    const bgRef = useRef<HTMLDivElement | null>(null);

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.to(nameRef.current, {
            text: 'Ellis Armah Ayikwei',
            duration: 5,
        });

        gsap.to(boxRef.current, {
            rotation: 360,
            duration: 10,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.hero',
                scrub: true,
            },
        });

        gsap.to(bgRef.current, {
            backgroundPosition: '100% 100%',
            duration: 10,
            ease: 'power2.inOut',
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: '.box',
                scrub: true,
            },
        });

        gsap.from('.hero-content', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.hero-content',
                start: 'top 80%',
            },
        });
    });

    return (
        <div
            className="hero bg-[#dc711a] bg-gradient-to-r from-[#ffa34d] through-[#ff4d4d] to-[#ff4d4d] gap-3 bg-blend-darken h-screen flex justify-center items-center flex-col p-5  bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url()` }}
        >
            <div className="flex gap-3 mr-auto ml-auto mt-6 lg:mt-0">
                <div className="flex items-center p-2 px-4 rounded-full bg-white hover:bg-gray-300 text-purple-700 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"> About</div>
                <div className="flex items-center p-2 px-4 rounded-full bg-white hover:bg-gray-300 text-purple-700 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"> Projects</div>
                <div className="flex items-center p-2 px-4 rounded-full bg-white hover:bg-gray-300 text-purple-700 font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"> Experience</div>
            </div>
            {/* Main Content */}
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center text-center lg:text-left hero-content gap-8 h-auto text-white">
                {/* Left Section */}
                <div>
                    <p className="text-4xl lg:text-6xl font-bold">Hi,</p>
                    <p className="text-3xl lg:text-5xl font-semibold">My Name Is</p>
                    <p ref={nameRef} className="text-4xl lg:text-6xl font-extrabold bg-clip-text mb-4"></p>
                    <a href="#" className="mt-10 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg hover:bg-purple-900 hover:scale-105 transition duration-300 shadow-lg">
                        Explore My Story
                    </a>
                </div>

                {/* Middle Section (Image) */}
                <div className="flex justify-center hero-content">
                    <img src={image4} alt="Ellis Armah Ayikwei" className="rounded-lg border-4 border-white shadow-lg h-fit" />
                </div>

                {/* Right Section */}
                <div>
                    <p className="text-2xl lg:text-4xl font-semibold">I am a</p>
                    <p className="text-3xl lg:text-5xl font-bold">Software Engineer</p>
                    <p className="text-xl lg:text-2xl">and a Professional IT Support</p>
                    <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                        {['Let’s Work Together', 'View My Resume'].map((btnText, idx) => (
                            <a key={idx} href="#" className="px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:scale-105 transition duration-300 shadow-lg">
                                {btnText}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div ref={boxRef} className="box"></div>

            <div className="flex gap-4 hero-content">
                {[faFacebookF, faTwitter, faLinkedin, faInstagram, faGithub].map((icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 bg-white text-purple-800 rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={icon} />
                    </a>
                ))}
            </div>
        </div>
    );
}
