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
  Workflow,
  MessageSquare,
  Code,
  Rocket,
  Headphones,
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

const workflow = [
  {
    icon: Workflow,
    title: "Discovery",
    description:
      "We start by understanding your business goals, challenges, and requirements through collaborative workshops.",
  },
  {
    icon: MessageSquare,
    title: "Planning",
    description:
      "We define a clear roadmap, communication plan, and milestones to ensure transparency at every stage.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our expert team builds tailored solutions using agile methodologies and cutting-edge technologies.",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description:
      "We ensure timely, high-quality delivery with rigorous testing and client approvals at every step.",
  },
  {
    icon: Headphones,
    title: "Support",
    description:
      "Post-launch, we provide continuous monitoring, support, and enhancements to maximize business value.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              About Shris Tech
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed mb-3">
              We are a leading technology solutions provider dedicated to
              empowering businesses through innovation, excellence, and
              cutting-edge technology.
            </p>
            <p className="text-sm sm:text-base lg:text-lg font-semibold text-white/90">
              🌍 Headquartered in India – Delivering to Clients Worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-3">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-4 leading-relaxed">
              To empower businesses with innovative technology solutions that
              drive growth, efficiency, and competitive advantage.
            </p>
            <ul className="space-y-2">
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
                  className="flex items-start gap-2"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-3">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-4 leading-relaxed">
              To be the leading technology partner businesses trust to transform
              their digital landscape and achieve sustainable growth.
            </p>
            <div className="bg-primary-50 p-4 sm:p-5 rounded-xl">
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
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-3">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto">
              These principles guide our decisions, shape our culture, and define
              how we work with clients and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-2">
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

      {/* How We Work */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-950 mb-3">
              How We Work
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-3xl mx-auto">
              Our streamlined process ensures transparency, collaboration, and
              on-time delivery for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {workflow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-neutral-50 rounded-xl p-5 text-center border hover:shadow-md transition"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-950" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-950 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
              Ready to Work With Us?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-200 mb-6 max-w-3xl mx-auto">
              Let’s discuss how our team can help transform your business with
              innovative technology solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
