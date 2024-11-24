'use client'

import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import * as motion from "framer-motion/m"

const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4 tracking-tight">
            Pricing Plans
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-400">
            Choose the perfect plan for your business needs
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-wrap items-stretch -mx-4"
        >
          {/* Basic Plan */}
          <motion.div variants={itemVariants} className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 bg-slate-700 text-gray-100 w-full transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Basic</h4>
                <span className="text-6xl font-bold">
                  $99
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-gray-400">
                Perfect for small businesses and startups
              </p>
              <ul className="flex-1 mb-6 text-gray-400">
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>5-page responsive website</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>Basic SEO optimization</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>Contact form integration</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full px-4 py-2 font-semibold rounded-md border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-colors duration-300"
              >
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div variants={itemVariants} className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 bg-gradient-to-br from-teal-400 to-teal-600 text-gray-900 w-full transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Pro</h4>
                <span className="text-6xl font-bold">
                  $199
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed font-medium">
                Ideal for growing businesses and e-commerce
              </p>
              <ul className="flex-1 mb-6">
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5" />
                  <span>10-page responsive website</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5" />
                  <span>Blog integration</span>
                </li>
              </ul>
              <Button className="w-full px-4 py-2 font-semibold rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-300">
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div variants={itemVariants} className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:mb-0">
            <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 bg-slate-700 text-gray-100 w-full transition-transform duration-300 ease-in-out hover:scale-105">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Enterprise</h4>
                <span className="text-6xl font-bold">
                  $499
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed text-gray-400">
                Custom solutions for large businesses
              </p>
              <ul className="flex-1 mb-6 text-gray-400">
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>Custom web application development</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>Advanced analytics and reporting</span>
                </li>
                <li className="flex mb-2 space-x-2 items-center">
                  <Check className="flex-shrink-0 w-5 h-5 text-teal-400" />
                  <span>24/7 priority support</span>
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full px-4 py-2 font-semibold rounded-md border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection

