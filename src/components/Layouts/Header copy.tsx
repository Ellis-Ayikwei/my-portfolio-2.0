import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    return (
        <header className="z-40 mt-5">
            <div className="flex flex-row justify-between items-center w-full !mt-0 mb-auto">
                <div className="flex justify-start mr-auto ml-0 items-center gap-4 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none text-xl ">
                    <Link to={'/'} className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md">
                        EA<sup>2</sup>
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-4 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none text-xl mr-auto">
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/mystory')}
                    >
                        About Me
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/myportfolio')}
                    >
                        Projects
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/myexperience')}
                    >
                        Experience
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/contactme')}
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;