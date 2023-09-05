// components/Skill.jsx
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaAt, FaHashnode, FaJava } from 'react-icons/fa6';
import Navbar from '@/components/navbar'
type SkillProps = {
    icon: string;
    title: string;
    description: string;
  };
  const Skill: React.FC<SkillProps> = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
    <div className="p-4 border border-gray-300 cursor-pointer transition-all duration-300 hover:shadow-lg text-white" onClick={() => setIsVisible(!isVisible)}>
      <FaJava icon={icon} />
      <h2 className="text-xl font-semibold">{title}</h2>
      {isVisible && <p className="mt-2">{description}</p>}
    </div>
    </div>
  );
}

export default Skill;
