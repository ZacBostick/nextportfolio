"use client"

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer-section";
import { skills, getIcon, IconNames } from "./skillsData";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      controls.start('visible');
    }, 500);

    return () => clearTimeout(timer);
  }, [controls]);

  const fadeInRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }; 

  return (
    <div className="bg-0A0A0B min-h-screen text-white">
        <Navbar />
        <motion.div 
            className="container mx-auto mt-20 space-y-16 md:space-y-24 px-4 md:px-16 lg:px-32"
            initial="hidden"
            animate={controls}
            variants={fadeInRight}
        >
            <div className="text-center py-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Skills & Technologies</h1>
                <p className="text-lg mt-6 md:text-xl font-medium opacity-80">
                    Technologies and tools I'm adept at.
                </p>
            </div>
            
            {skills.map((categoryData, catIndex) => (
                <motion.div key={categoryData.category}
                    variants={fadeInRight}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: catIndex * 0.2 }}
                >
                    <h2 className="text-3xl font-semibold mb-8 border-b border-gray-700 pb-2">{categoryData.category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {categoryData.skills.map((skill, index) => (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInUp}
                                transition={{ duration: 0.2 }}
                                key={skill.label}
                                whileHover={{ scale: 1.06, shadow: "xl" }}
                            >
                                <div
                                    className={`flex flex-col p-6 space-y-4 bg-slate-900 rounded-lg hover:shadow-lg transition transform cursor-pointer`}
                                    role="button"
                                    aria-label={skill.label}
                                >
                                    <div className="flex justify-center">
                                        {getIcon(skill.icon as IconNames)}
                                    </div>
                                    <h3 className="text-lg font-bold text-center">{skill.label}</h3>
                                    <p className="text-sm font-medium opacity-80">{skill.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
            <Footer />
        </motion.div>
    </div>
);

      };
export default SkillsSection;

