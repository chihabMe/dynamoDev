'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive online store with seamless checkout experience.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek, modern portfolio for a digital artist showcasing their work.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Booking System',
    description: 'An intuitive booking platform for a chain of fitness studios.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts.',
    image: '/placeholder.svg?height=300&width=400',
  },
]

const ProjectsSection = () => {
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

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-3xl font-bold text-white mb-4" variants={itemVariants}>
            Our Projects
          </motion.h2>
          <motion.p className="text-xl text-gray-400 max-w-2xl mx-auto" variants={itemVariants}>
            Explore some of our recent web development projects that showcase our expertise and creativity.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              variants={itemVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection

