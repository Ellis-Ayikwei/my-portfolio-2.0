import React from 'react';

const ExperienceTimeline: React.FC = () => {
    const experiences = [
        {
            id: 1,
            bgColor: 'bg-info',
            textColor: 'text-info',
            title: 'Software Engineer',
            imgSrc: '/assets/images/carousel1.jpeg',
            btnClass: 'btn-info',
            description:
                'Assisted in developing a mobile application using Flutter framework. Collaborated with team members to implement new features and fix bugs. Participated in code reviews and contribute to improving application performance',
            company: 'Ride Smash',
            location: 'Accra, Ghana',
            date: 'DEC 2023 – FEB 2024',
            skills: ['Flutter', 'Flutterflow', 'React.js', 'JavaScript', 'HTML/CSS', 'Python', 'C', 'PHP'],
        },
        {
            id: 2,
            bgColor: 'bg-primary',
            textColor: 'text-primary',
            title: 'Software Engineer',
            imgSrc: '/assets/images/menu-heade.jpg',
            btnClass: 'btn-primary',
            description:
                'Assisted in developing a mobile application using Flutter framework. Collaborated with team members to implement new features and fix bugs. Participated in code reviews and contributed to improving application performance',
            company: 'MyBasi',
            location: 'Rwanda',
            date: 'JUL 2023 – AUG 2023',
            skills: ['Flutter', 'Flutterflow', 'React.js', 'JavaScript', 'HTML/CSS', 'Python', 'C', 'PHP'],
        },
        {
            id: 3,
            bgColor: 'bg-success',
            textColor: 'text-success',
            title: 'Software Support (Part-time)',
            imgSrc: '/assets/images/carousel1.jpeg',
            btnClass: 'btn-success',
            description:
                'Provide technical support to end-users, maintaining a high satisfaction rate. Assist in maintaining custom web applications and e-commerce platforms. Learn and apply best practices in web development and customer service',
            company: 'TradeHut GH',
            location: 'Accra',
            date: 'JAN 2014 - PRESENT',
            skills: [
                'JavaScript',
                'HTML/CSS',
                'Python',
                'C',
                'PHP',
                'Adobe Photoshop',
                'Adobe XD',
                'Visio',
                'FIGMA',
                'MongoDB',
                'MySQL',
                'NoSQL',
                'AWS',
                'EC2',
                'Linux',
                'Mac OS',
                'Microsoft Office',
                'Computer Hardware/Repair',
                'Mobile Device Repair',
                'aaPanel',
                'Docker',
                'firebase',
            ],
        },
        {
            id: 4,
            bgColor: 'bg-danger',
            textColor: 'text-danger',
            title: 'Milling Support & Packaging Personnel',
            imgSrc: '/assets/images/menu-heade.jpg',
            btnClass: 'btn-danger',
            description:
                'Fulfilled high-volume product orders in a fast-paced warehouse environment. Maintained high order accuracy rates through meticulous product handling. Completed safety training, demonstrating commitment to workplace safety',
            company: 'Olam Agri',
            location: 'Accra',
            date: 'JAN 2019 - JAN 2023',
            skills: ['Hoist Operation', 'Warehouse Experience', 'Disassembling and Assembling'],
        },
        {
            id: 5,
            bgColor: 'bg-warning',
            textColor: 'text-warning',
            title: 'IT Support Intern',
            imgSrc: '/assets/images/carousel1.jpeg',
            btnClass: 'btn-warning',
            description:
                'Assisted in providing Tier 1 technical support for computer systems and software. Documented technical support interactions and solutions. Collaborated with team members to resolve user issues',
            company: 'Hardnas',
            location: 'Accra',
            date: 'JULY 2018 - SEPTEMBER 2018',
            skills: ['Active Directory', 'Desktop/Network Support', 'Technical Support', 'Virtual Machines', 'VPN', 'SSH/TCP/IP'],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-4xl text-white dark:text-white-light">My Experience</h2>
            </div>
            <div className="mb-5 inline-block w-full">
                <ul className="relative py-12 before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:bottom-0 before:left-1/2 before:top-0 before:w-[3px] before:-ml-[1.5px] max-w-[900px] mx-auto table">
                    {experiences.map((exp, index) => (
                        <li key={exp.id} className="relative mb-12 before:clear-both before:table after:clear-both after:table">
                            <div className={`hidden sm:block absolute ${exp.bgColor} border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]`}></div>
                            <div
                                className={`relative border border-[#ebedf2] 
                                dark:border-[#191e3a] max-w-[320px] mx-auto
                                 sm:max-w-full w-full sm:w-[46%] 
                                 shadow-[0_20px_20px_rgba(126,142,177,0.12)] 
                                 rounded-md bg-white dark:bg-[#191e3a] 
                                 ${index % 2 === 0 ? 'sm:float-right ltr:before:-left-[37px] rtl:before:-right-[37px]' : 'ltr:sm:float-left rtl:sm:float-right'} before:absolute 
                                 before:bg-[#ebedf2] dark:before:bg-[#191e3a] 
                                 before:w-[37px] before:h-[3px] before:rounded-full 
                                 ltr:before:-right-[37px] rtl:before:-left-[37px] 
                                 before:top-10 sm:before:block before:hidden`}
                            >
                                <div></div>
                                <div className="p-5">
                                    <h4 className={`font-extrabold ${exp.textColor} text-lg`}>
                                        {exp.title} - {exp.company}
                                    </h4>
                                    <h4 className={`mb-3 ${exp.textColor} text-lg font-semibold`}>{exp.date}</h4>
                                    <p className="mb-3 text-white-dark">{exp.description}</p>
                                    <p>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {exp.skills.map((skill) => (
                                                <span className="px-2 py-1 rounded-full bg-[#ebedf2] dark:bg-[#191e3a] text-[#191e3a] dark:text-white-light ring-2 ring-[#ebedf2] dark:ring-[#191e3a]">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceTimeline;
