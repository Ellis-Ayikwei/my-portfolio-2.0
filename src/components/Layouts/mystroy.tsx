import React from "react";

const ExploreMyStory = () => {
  return (
    <div className=" py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center sm:text-5xl">
          My Story
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Discover the journey, skills, and passion that define Ellis Armah Ayikwei.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">The Beginning: Building a Strong Foundation</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Growing up in Accra, I was fascinated by how technology could simplify complex problems. This curiosity 
              led me to dive deep into the world of computers, programming, and technical support. Pursuing a{" "}
              <strong className="text-purple-600">Bachelor’s degree in Information Technology</strong> at Ghana 
              Communications Technology University allowed me to formalize my knowledge and sharpen my skills. Along the 
              way, I earned certifications like the{" "}
              <strong className="text-purple-600">Google Professional IT Support Certificate</strong> and the{" "}
              <strong className="text-purple-600">Google Digital Marketing and SEO Certificate</strong>, further 
              cementing my expertise in both technical and digital spheres.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">My Expertise: Where Creativity Meets Functionality</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Over the years, I’ve honed a diverse set of skills. In programming, I’ve built web and mobile applications 
              using tools like <strong className="text-purple-600">React.js</strong>, <strong className="text-purple-600">
              Flutter</strong>, and <strong className="text-purple-600">Python</strong>, always striving to merge aesthetics 
              with functionality. My experience in design tools like <strong className="text-purple-600">Figma</strong> 
              and <strong className="text-purple-600">Adobe XD</strong> ensures that my creations are as visually appealing 
              as they are effective. With a strong background in IT support, I’ve mastered technologies like{" "}
              <strong className="text-purple-600">Active Directory</strong>, <strong className="text-purple-600">VPN</strong>, 
              and <strong className="text-purple-600">SSH</strong>, and developed a knack for solving problems under pressure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Turning Challenges into Opportunities</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Every role I’ve taken on has been a stepping stone, shaping me into the professional I am today. From 
              collaborating on mobile applications at <strong className="text-purple-600">MyBasi</strong> and{" "}
              <strong className="text-purple-600">Ride Smash</strong> to providing software support at{" "}
              <strong className="text-purple-600">TradeHut GH</strong>, I’ve learned to adapt, innovate, and deliver 
              exceptional results. My time at <strong className="text-purple-600">Olam Agri</strong> and{" "}
              <strong className="text-purple-600">HardNas</strong> further strengthened my ability to work in diverse 
              environments and under pressure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Beyond the Code: My Values and Vision</h2>
            <p className="mt-2 text-gray-600 leading-relaxed">
              For me, technology is not just a career—it’s a way to make a difference. Whether it’s helping businesses scale 
              through innovative solutions or supporting individuals in overcoming technical challenges, I find fulfillment 
              in creating impact. As a bilingual professional fluent in <strong className="text-purple-600">English, Ga, and 
              Twi</strong>, I can communicate effectively across diverse teams and audiences.
            </p>
          </section>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-md text-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Explore My Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-purple-600 border border-purple-600 hover:bg-purple-50 rounded-md text-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreMyStory;
