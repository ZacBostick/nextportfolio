"use client"
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer-section";
import Image from 'next/image'
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};
type ProjectData = {
    title: string;
    description: string;
    imageSrc: string; // could be a path to a local image or a URL
    projectLink?: string; // if there's a live link to the project
    githubLink?: string; // if there's a link to a GitHub repo
    technologies: string[]; // list of technologies used in the project
};

const projects: ProjectData[] = [
    {
        title: "GenLabs AI Platform",
        description: "A next-gen content creation hub powered by AI. Built with Next.js, React, and Tailwind. Prisma-backed operations, Clerk's security, Stripe's payment integration, and Crisp chat support make it a top choice for digital creators. Hosted on Vercel.",
        imageSrc: "/genlabslogo.png",
        projectLink: "https://genlabsai.com/",
        githubLink: "https://github.com/zac-bostick/genlabsai",
        technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "Clerk", "Stripe", "Crisp", "Vercel"]
    },
    {
        title: "IPN Mobile App",
        description: "A Flutter-built cross-platform app offering a seamless UX. Firebase powers its backend, managing real-time databases, authentication, and storage. It syncs with Google Sheets, YouTube, and Google Calendar APIs, ensuring up-to-date content for its users.",
        imageSrc: "/Whte Logo Variation 2.png",
        projectLink: "https://members.intercollegiatepsychedelics.net/",
        technologies: ["Flutter", "Firebase", "Google Sheets API", "YouTube API", "Google Calendar API"]
    },
    {
        title: "Private YouTube Sync",
        description: "This innovative tool circumvents YouTube API&apos;s limitations on private/unlisted videos. By fetching data from an organization's channel, it displays all videos in an app, regardless of their privacy status, making it an invaluable tool for organizations.",
        imageSrc: "/pys.png",
        githubLink: "https://github.com/zac-bostick/PrivateYoutubeSync",
        technologies: ["JavaScript", "OAuth2", "Json2CSV", "Google API", "Express"] 
    },
    {
        title: "Indeed Job Scraper",
        description: "A robust web scraping tool tailored to extract job postings from Indeed.com. It leverages Puppeteer for scraping and Cheerio for parsing, making job searches more streamlined. Check the live version: https://scraper.zacbostick.com.",
        imageSrc: "/scraper.png",
        githubLink: "https://github.com/zac-bostick/IndeedScraper",
        technologies: ["Puppeteer", "Cheerio"]
    }
];


const ProjectsSection = () => {
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">My Projects</h1>
            <p className="text-lg mt-6 md:text-xl font-medium opacity-80">
                Some of the things I&apos;ve built.
            </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="bg-slate-900 rounded-lg hover:shadow-lg transition transform cursor-pointer p-6 space-y-4"
                    role="article"
                >
                    <Image src={project.imageSrc} alt={project.title} className="rounded" />
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm font-medium opacity-80">{project.description}</p>
                    <ul className="flex flex-wrap space-x-2">
                        {project.technologies.map(tech => (
                            <li key={tech} className="bg-gray-700 rounded px-2 py-1 text-xs mb-2">{tech}</li>
                        ))}
                    </ul>
                    <div className="flex justify-between">
                        {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>}
                        {project.projectLink && <a href={project.projectLink} target="_blank" rel="noreferrer">Live Project</a>}
                    </div>
                </motion.div>
            ))}
        </div>
        
        <Footer />
    </motion.div>
</div>

    );
                                            };
    export default ProjectsSection;
    