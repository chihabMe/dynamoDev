'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import * as motion from "framer-motion/m"

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen flex items-center">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center relative z-10">
          <motion.h1
            className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            <motion.span className="block" variants={itemVariants}>
              Elevate Your Digital Presence
            </motion.span>
            <motion.span className="block text-teal-400 mt-2" variants={itemVariants}>
              with Expert Web Development
            </motion.span>
          </motion.h1>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            We craft stunning, high-performance websites that drive results for
            your business. From concept to launch, we are your partner in
            digital success.
          </motion.p>
          <motion.div
            className="mt-10 sm:flex sm:justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="rounded-md shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-teal-500 text-white hover:bg-teal-600 transition duration-300 ease-in-out"
              >
                Get Started
              </Button>
            </motion.div>
            <motion.div
              className="mt-3 sm:mt-0 sm:ml-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition duration-300 ease-in-out"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {/* Animated background shapes */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <motion.svg
          className="absolute left-full transform -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-teal-400"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </motion.svg>
        <motion.svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-teal-400"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
          />
        </motion.svg>
      </motion.div>
    </section>
  )
}

export default HeroSection

