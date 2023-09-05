"use client"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Navbar from "@/components/navbar";
import { experiences } from "./experienceData";

const ExperienceSection = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-0A0A0B min-h-screen text-white">
            <Navbar />
            <motion.div 
                className="container mx-auto mt-20 space-y-16 md:space-y-24 px-4 md:px-16 lg:px-32"
            >
                <div className="text-center py-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">My Experience</h1>
                    <p className="text-lg mt-6 md:text-xl font-medium opacity-80">
                        Over the years, I&apos;ve had the privilege to work with some fantastic companies. Here&apos;s a brief overview of my journey so far.
                    </p>
                </div>
                
                <div className="container mx-auto mt-20 md:space-y-24 px-4 md:px-16 lg:px-32">
                    <ol className="relative border-l border-gray-400">                  
                        {experiences.map((experience, index) => {
                            const controls = useAnimation();
                            const [ref, inView] = useInView({
                                threshold: 0.1,
                                triggerOnce: true,
                            });

                            useEffect(() => {
                                if (inView) {
                                    controls.start("visible");
                                }
                            }, [controls, inView]);

                            return (
                                <motion.li 
                                    ref={ref}
                                    initial="hidden"
                                    animate={controls}
                                    variants={fadeInUp}
                                    key={experience.company} 
                                    className={`mb-10 ml-4 ${index === experiences.length - 1 ? '' : 'mb-10'}`}
                                >
                                    <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-0A0A0B"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-500">
                                        {experience.startDate} - {experience.endDate || "Present"}
                                    </time>
                                    <h3 className="text-lg font-semibold">{experience.position} at {experience.company}</h3>
                                    <p className="mb-4 text-base font-normal text-gray-400">
                                        Location: {experience.location}
                                        </p>
                                        <ul className="list-disc pl-5 mt-2">
                                            {experience.responsibilities.map((responsibility, rIndex) => (
                                                <li key={rIndex} className="text-gray-300">{responsibility}</li>
                                            ))}
                                        </ul>
                                    
                                </motion.li>
                            );
                        })}
                    </ol>
                </div>
            </motion.div>
        </div>
    );
};

export default ExperienceSection;
