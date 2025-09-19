"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Globe,
  Heart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "We put our clients at the center of everything we do, ensuring their success is our primary focus.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in all our deliverables and continuously improve our processes.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "We embrace diversity and bring international best practices to our local client base.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that drive real business value for our clients.",
  },
];

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description:
      "Shris Tech was established with a vision to democratize technology solutions.",
  },
  {
    year: "2025",
    title: "First Major Client",
    description:
      "Secured our first enterprise client and delivered a comprehensive digital transformation project.",
  },
  {
    year: "2025",
    title: "Shris Academy Launch",
    description:
      "Launched our training academy to bridge the technology skills gap in the market.",
  },
  {
    year: "2025",
    title: "50+ Projects",
    description:
      "Celebrated completing over 50 successful projects across various industries.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              About Shris Tech
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed">
              We are a leading technology solutions provider dedicated to
              empowering businesses through innovation, excellence, and
              cutting-edge technology. Our mission is to transform ideas into
              reality and drive digital success for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 leading-relaxed">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and competitive advantage.
            </p>
            <ul className="space-y-3">
              {[
                "Democratize access to cutting-edge technology",
                "Deliver solutions that create real business value",
                "Foster innovation and continuous learning",
                "Build long-term partnerships with our clients",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-neutral-600">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-4">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 leading-relaxed">
              To be the leading technology partner businesses trust to transform
              their digital landscape and achieve sustainable growth.
            </p>
            <div className="bg-primary-50 p-4 sm:p-6 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold text-primary-950 mb-2">
                Our Commitment
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                We are committed to staying at the forefront of technology
                trends, continuously improving our services, and delivering
                exceptional value that exceeds our clients' expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary-950 mb-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-neutral-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define
              how we work with clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-950 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-neutral-200 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner,
              here’s how we’ve grown.
            </p>
          </motion.div>

          {/* Mobile Timeline */}
          <div className="block lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-1.5 w-4 h-4 bg-secondary-500 rounded-full border-2 border-white"></div>
                {index < milestones.length - 1 && (
                  <div className="absolute left-2 top-5 w-0.5 h-full bg-secondary-500"></div>
                )}
                <div className="bg-white/10 rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-secondary-400 font-bold text-base sm:text-lg mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-200">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-secondary-500"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                      <div className="text-secondary-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-200">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-secondary-500 rounded-full border-2 border-white z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              Let’s discuss how our team can help transform your business with
              innovative technology solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                aria-label="Get in touch"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-950 font-semibold rounded-lg hover:bg-neutral-100 transition text-sm sm:text-base"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link
                href="/services"
                aria-label="View our services"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-950 transition text-sm sm:text-base"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
