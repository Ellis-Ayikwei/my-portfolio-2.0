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


    const socialMedia = [
        { icon: faFacebookF, href: 'https://web.facebook.com/ellis.hero/' },
        { icon: faGithub, href: 'https://github.com/Ellis-Ayikwei' },
        { icon: faInstagram, href: 'https://www.instagram.com/ellis_rockefeller/' },
        { icon: faLinkedin, href: 'https://www.linkedin.com/in/ellis-armah-ayikwei-4a817b192/' },
        { icon: faTwitter, href: 'https://x.com/home' },
    ];

   

    return (
        <div className="hero !h-screen w-full flex flex-col justify-center items-center p-5">
            {/* Main Content */}
            {/* <div className="flex flex-row justify-between items-center w-full !mt-0 mb-auto">
                <div className="flex justify-start mr-auto ml-0 items-center gap-4 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none text-xl ">
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '#projects')}
                    >
                        EA<sup>2</sup>
                    </button>
                </div>
                <div className="flex justify-center items-center gap-4 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none text-xl mr-auto">
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '#projects')}
                    >
                        About Me
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '#projects')}
                    >
                        Projects
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '#experience')}
                    >
                        Experience
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '#experience')}
                    >
                        Contact Me
                    </button>
                </div>
            </div> */}
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center text-center lg:text-left hero-content gap-8 h-auto text-white">
                {/* Left Section */}
                <div>
                    <p className="text-4xl font-bold">Hi,</p>
                    <p className="text-3xl  font-semibold">My Name Is</p>
                    <p ref={nameRef} className="text-5xl font-extrabold bg-clip-text mb-4"></p>

                    <a href="#" className="mt-10 px-6 py-3 bg-[#dc711a] text-white font-semibold rounded-lg hover:bg-purple-900 hover:scale-105 transition duration-300 shadow-lg">
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
                    <div className="mt-10 lg:mt-0">
                        <div className="flex flex-wrap gap-4 mt-6">
                            {[
                                'HTML/CSS/JavaScript',
                                'Python/Flask/Django',
                                'Typescript',
                                'Flutter',
                                'PHP',
                                'Node.js',
                                'React.js',
                                'Adobe Photoshop',
                                'Adobe XD',
                                'MongoDB',
                                'Mysql',
                                'AWS',
                                'Docker',
                                'firebase',
                                'Git',
                                'Linux',
                                'kubernetes',
                            ].map((badgeText, idx) => (
                                <span key={idx} className="px-4 py-2 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none text-white text-sm font-semibold">
                                    {badgeText}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4 justify-center lg:justify-start">
                        {['Let’s Work Together', 'View My Resume'].map((btnText, idx) => (
                            <a key={idx} href="#" className="px-5 py-3 bg-[#dc711a] text-white rounded-lg hover:bg-[#dc711a] hover:scale-105 transition duration-300 shadow-lg">
                                {btnText}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div ref={boxRef} className="box"></div> */}

            <div className="flex gap-4 hero-content">
                {socialMedia.map(({ icon, href }, idx) => (
                    <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white text-[#dc711a] rounded-full flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg">
                        <FontAwesomeIcon icon={icon} />
                    </a>
                ))}
            </div>
        </div>
    );
}
