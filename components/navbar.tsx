"use client";
import { motion } from 'framer-motion';
import { LightningBoltIcon, FolderIcon, BriefcaseIcon, DocumentTextIcon } from '@heroicons/react/solid';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="py-0.5 border-b border-zinc-700 bg-[#09090B] sticky z-10">
      <div className="container mx-auto flex items-center justify-between ">
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image src="/logo.svg" alt="Logo" width="200" height="10" className="cursor-pointer" />
        </motion.a>
        
        <div className="md:block">
          <ul className="flex space-x-1 md:space-x-6">
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="/skills"
                className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out"
              >
                <div className="w-6 h-6 md:mr-2">
                  <LightningBoltIcon />
                </div>
                <span className="hidden md:inline">Skills</span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="/projects"
                className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out"
              >
                <div className="w-6 h-6 md:mr-2">
                  <FolderIcon />
                </div>
                <span className="hidden md:inline">Projects</span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/experience"
                className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out"
              >
                <div className="w-6 h-6 md:mr-2">
                  <BriefcaseIcon />
                </div>
                <span className="hidden md:inline">Experience</span>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/resume.pdf"
                className="flex items-center text-gray-300 hover:text-white transition duration-300 ease-in-out"
              >
                <div className="w-6 h-6 md:mr-2">
                  <DocumentTextIcon />
                </div>
                <span className="hidden md:inline">Resume</span>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
