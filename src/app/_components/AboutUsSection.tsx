'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Founder & CEO',
    image: '/placeholder.svg?height=200&width=200',
    bio: 'With over 15 years of experience in web development, Jane leads our team with passion and innovation.',
  },
  {
    name: 'John Smith',
    role: 'Lead Developer',
    image: '/placeholder.svg?height=200&width=200',
    bio: "John's expertise in full-stack development ensures our projects are built with cutting-edge technologies.",
  },
  {
    name: 'Emily Brown',
    role: 'UX/UI Designer',
    image: '/placeholder.svg?height=200&width=200',
    bio: "Emily's creative designs and user-centric approach bring our clients' visions to life.",
  },
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

const AboutUsSection = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold text-white mb-4" variants={itemVariants}>
            About Us
          </motion.h2>
          <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
            We are a team of passionate web developers and designers dedicated to creating exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              variants={itemVariants}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-teal-400 mb-4">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h3 className="text-2xl font-bold text-white mb-4" variants={itemVariants}>
            Our Mission
          </motion.h3>
          <motion.p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8" variants={itemVariants}>
            We strive to empower businesses with innovative web solutions that drive growth and success in the digital landscape.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out"
            >
              Join Our Team
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsSection

