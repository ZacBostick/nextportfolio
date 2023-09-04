"use client"
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaAt, FaHashnode } from 'react-icons/fa6';
import React, { useEffect } from 'react';

import Image from 'next/image';

import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/particles-component'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const HeroSection = () => {
  return (
    
    <section className="text-gray-300 flex flex-col md:flex-row justify-center items-center md:mt-60 mt-20 ">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-4 md:mb-0 md:mr-8"
      >
        <div className=" w-60 h-60 br-50 inline-block overflow-hidden z-20 relative">
  <Image src="/Me.svg" alt="Your Photo" className="w-60 h-60 rounded-full" width="100" height="100"/>
</div>
      </motion.div>
      <div className="md:w-1/2 z-30">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-2 text-center md:text-left"
        >
          Zac Bostick
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-lg md:text-xl text-center md:text-left mb-4"
        >
          Full Stack Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-sm md:text-base text-center md:text-left mb-4 md:px-0 px-2 md:text-lg"
        >
          I&apos;m a developer and currently the Co-Founder of SAIGEmind and Director of Technology at Intercollegiate Psychedelics Network.
        </motion.p>
      <div className="flex space-x-4 justify-center md:justify-normal">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          href="https://github.com/zac-bostick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaGithub className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          href="https://linkedin.com/in/zacbostick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaLinkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          href="https://twitter.com/zacdbostick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaTwitter className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          href="https://www.youtube.com/channel/UCSxjdUjWRazHsWurdvREMcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaYoutube className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          href="https://instagram.com/zacdbostick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaInstagram className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          href="mailto:zac.bostick@gmail.com"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaAt className="w-6 h-6" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
          href="https://hashnode.com/@zacbostick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition duration-300 ease-in-out"
        >
          <FaHashnode className="w-6 h-6" />
        </motion.a>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
