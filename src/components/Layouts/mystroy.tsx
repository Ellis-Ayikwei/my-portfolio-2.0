const ExploreMyStory = () => {
    return (
        <div className=" py-16 px-6 sm:px-12 lg:px-24 text-white backdrop-blur-sm bg-transparent">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center sm:text-5xl">My Story</h1>
                <p className="mt-4 text-lg leading-relaxed text-center">Discover the journey, skills, and passion that defines Ellis Armah Ayikwei.</p>

                <div className="mt-10 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold">The Beginning: Building a Strong Foundation</h2>
                        <p className="mt-2 leading-relaxed">
                            Growing up in Accra, I was fascinated by how technology could simplify complex problems. This curiosity led me to dive deep into the world of computers, programming, and
                            technical support. Pursuing a <strong className="text-[#dc711a]">Bachelor’s degree in Information Technology</strong> at Ghana Communications Technology University allowed
                            me to formalize my knowledge and sharpen my skills. Along the way, I earned certifications like the{' '}
                            <strong className="text-[#dc711a]">Google Professional IT Support Certificate</strong> ,<strong className="text-[#dc711a]">Alx SoftEngineering certificate</strong> and the{' '}
                            <strong className="text-[#dc711a]">Google Digital Marketing and SEO Certificate</strong>, further cementing my expertise in both technical and digital spheres.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">My Expertise: Where Creativity Meets Functionality</h2>
                        <p className="mt-2 leading-relaxed">
                            Over the years, I’ve honed a diverse set of skills. In programming, I’ve built web and mobile applications using tools like{' '}
                            <strong className="text-[#dc711a]">React.js</strong>, <strong className="text-[#dc711a]">Flutter</strong>, and <strong className="text-[#dc711a]">Python</strong>, always
                            striving to merge aesthetics with functionality. My experience in design tools like <strong className="text-[#dc711a]">Figma</strong>
                            and <strong className="text-[#dc711a]">Adobe XD</strong> ensures that my creations are as visually appealing as they are effective. With a strong background in IT support,
                            I’ve mastered technologies like <strong className="text-[#dc711a]">Active Directory</strong>, <strong className="text-[#dc711a]">VPN</strong>, and{' '}
                            <strong className="text-[#dc711a]">SSH</strong>, and developed a knack for solving problems under pressure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Turning Challenges into Opportunities</h2>
                        <p className="mt-2 leading-relaxed">
                            Every role I’ve taken on has been a stepping stone, shaping me into the professional I am today. From collaborating on mobile applications at{' '}
                            <strong className="text-[#dc711a]">MyBasi</strong> and <strong className="text-[#dc711a]">Ride Smash</strong> to providing software support at{' '}
                            <strong className="text-[#dc711a]">TradeHut GH</strong>, I’ve learned to adapt, innovate, and deliver exceptional results. My time at{' '}
                            <strong className="text-[#dc711a]">Olam Agri</strong> and <strong className="text-[#dc711a]">HardNas</strong> further strengthened my ability to work in diverse
                            environments and under pressure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Beyond the Code: My Values and Vision</h2>
                        <p className="mt-2 leading-relaxed">
                            For me, technology is not just a career—it’s a way to make a difference. Whether it’s helping businesses scale through innovative solutions or supporting individuals in
                            overcoming technical challenges, I find fulfillment in creating impact. As a bilingual professional fluent in{' '}
                            <strong className="text-[#dc711a]">English, Ga, and Twi</strong>, I can communicate effectively across diverse teams and audiences.
                        </p>
                    </section>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4">
                    <a
                        href="#portfolio"
                        className="px-6 py-3 text-white bg-[#dc711a] hover:bg-[#dc711a]/90 rounded-md text-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-[#dc711a]/50"
                    >
                        Explore My Portfolio
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 text-[#dc711a] border border-[#dc711a] hover:bg-[#dc711a]/10 rounded-md text-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-[#dc711a]/50"
                    >
                        Let’s Work Together
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExploreMyStory;
