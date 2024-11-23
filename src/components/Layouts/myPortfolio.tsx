import React from "react";
import IconCode from "../Icon/IconCode";
import IconGlobe from "../Icon/IconGlobe";
import { renderTechnology } from "./rendertechnology";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Ride Smash App",
      description:
        "A mobile application built using Flutter. Focused on seamless ride-booking and user-friendly features.",
      image: "project1.png", // Replace with the actual image path
      link: "#",
      stacks: ["Flutter"],
    },
    {
      id: 2,
      title: "MyBasi Platform",
      description:
        "Collaborated on a robust mobile app for client management using Flutter, enhancing user experience and performance.",
      image: "project2.png", // Replace with the actual image path
      link: "#",
      stacks: ["Flutter"],
    },
    {
      id: 3,
      title: "TradeHut GH E-Commerce",
      description:
        "Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.",
      image: "project3.png", // Replace with the actual image path
      link: "#",
      stacks: ["Flutter"],
    },
    {
      id: 3,
      title: "TradeHut GH E-Commerce",
      description:
        "Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.",
      image: "project3.png", // Replace with the actual image path
      link: "#",
      stacks: ["Flutter"],
    },
    {
      id: 3,
      title: "TradeHut GH E-Commerce",
      description:
        "Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.",
      image: "project3.png", // Replace with the actual image path
      link: "#",
      stacks: ["Flutter"],
    },
    {
      id: 3,
      title: "TradeHut GH E-Commerce",
      description:
        "Maintained and improved custom web applications and e-commerce platforms for enhanced user satisfaction.",
      image: "project3.png", // Replace with the actual image path
      link: "#",
      stacks: ["Python","React", "flask"],
    },
  ];

  return (
    <div id="portfolio" className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          My Portfolio
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Explore some of the projects I’ve worked on, showcasing my skills in
          software development and design.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
               
                <div className="relative flex justify-between mt-6 pt-4 before:w-[250px] before:h-[1px] before:bg-white-light before:inset-x-0 before:top-0 before:absolute before:mx-auto dark:before:bg-[#1b2e4b]">
               
                {project.stacks.map((stack) => (
                    renderTechnology(stack)
                ))}
                <div className="flex font-semibold">
                    <div className="text-primary flex items-center ltr:mr-3 rtl:ml-3">
                       <IconCode />
                    </div>
                    <div className="text-primary flex items-center">
                        <IconGlobe />
                    </div>
                </div>
            </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
