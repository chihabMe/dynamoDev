"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import * as motion from "framer-motion/m";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
};
const pricingPlans = [
  {
    title: "Basic",
    price: 99,
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form integration",
    ],
  },
  {
    title: "Pro",
    price: 199,
    features: [
      "10-page responsive website",
      "Advanced SEO optimization",
      "E-commerce functionality",
      "Blog integration",
    ],
  },
  {
    title: "Enterprise",
    price: 499,
    features: [
      "Unlimited pages",
      "Custom web application development",
      "Advanced analytics and reporting",
      "24/7 priority support",
    ],
  },
];
const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="max-w-2xl mx-auto mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-white mb-4 tracking-tight"
          >
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
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex w-full mb-8 sm:px-4 md:w-1/3 lg:mb-0"
            >
              <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 bg-gradient-to-br from-teal-400 to-teal-600 text-gray-900 w-full transform scale-105 transition-transform duration-300 ease-in-out hover:scale-110">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">{plan.title}</h4>
                  <span className="text-6xl font-bold">
                    {plan.price}
                    <span className="text-sm tracking-wide">/One Time</span>
                  </span>
                </div>
                <p className="leading-relaxed font-medium">{plan.title}</p>
                <ul className="flex-1 mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex mb-2 space-x-2 items-center">
                      <Check className="flex-shrink-0 w-5 h-5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  <li className="flex mb-2 space-x-2 items-center">
                    <Check className="flex-shrink-0 w-5 h-5" />
                    <span>Advanced SEO optimization</span>
                  </li>
                </ul>
                <Button className="w-full px-4 py-2 font-semibold rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors duration-300">
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
          {/* Basic Plan */}

          {/* Pro Plan */}

          {/* Enterprise Plan */}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
