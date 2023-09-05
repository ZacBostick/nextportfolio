"use client"
import HeroSection from '@/components/hero-section'
import  Navbar  from '@/components/navbar'
import Image from 'next/image'
import SkillsSection from '@/components/skills-section'
import Particles from '@/components/particles-component'
export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <Particles />
    </div>
  )
}
