"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  BarChart3,
  Megaphone,
  Brain,
  Wrench,
  Star,
  Users,
  Award,
  Clock,
} from "lucide-react";
import Hero from "@/components/Hero/Hero";
import ServiceCard from "@/components/ServiceCard/ServiceCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// Services Data
const services = [
  {
    icon: Code,
    title: "Web & Full Stack Development",
    description:
      "Custom web applications and websites built with modern technologies and best practices.",
    features: [
      "React, Next.js, Vue.js Development",
      "Node.js, Python, PHP Backend",
      "Database Design & Optimization",
      "Responsive Design & UX/UI",
    ],
    ctaText: "Get Quote",
    ctaHref: "/contact",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    features: [
      "React Native Development",
      "Flutter Applications",
      "Native iOS & Android",
      "Push Notifications & Analytics",
    ],
    ctaText: "Learn More",
    ctaHref: "/services#mobile-apps",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Transform your data into actionable insights with powerful analytics solutions.",
    features: [
      "Power BI & Tableau Dashboards",
      "Data Visualization",
      "Business Intelligence",
      "Predictive Analytics",
    ],
    ctaText: "Explore",
    ctaHref: "/services#data-analytics",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence.",
    features: [
      "SEO & SEM Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics & Performance Tracking",
    ],
    ctaText: "Start Campaign",
    ctaHref: "/services#digital-marketing",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence to automate processes and gain competitive advantage.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "AI Chatbots & Automation",
    ],
    ctaText: "Discover AI",
    ctaHref: "/services#ai-ml",
  },
  {
    icon: Wrench,
    title: "IT Support & Maintenance",
    description:
      "Comprehensive IT support and maintenance services to keep your systems running smoothly.",
    features: [
      "24/7 Technical Support",
      "System Maintenance",
      "Security Updates",
      "Performance Optimization",
    ],
    ctaText: "Get Support",
    ctaHref: "/contact",
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Belly Feast",
    role: "Belly Feast Food",
    content:
      "Shris Tech transformed our digital presence completely. Their web development team delivered beyond our expectations, providing innovative, reliable, and highly engaging solutions.",
    rating: 5,
    logo: "/BF.jpg",
  },
  {
    name: "Suraj Salunkhe",
    role: "Vidaychandra Photoshop",
    content:
      "Shris Tech is a dynamic web development company that blends innovation with expertise to deliver modern, scalable, and user-friendly solutions.",
    rating: 5,
    logo: "/vidaychandra.png",
  },
  {
    name: "Basket Bee Mart",
    role: "Basket Bee Mart",
    content:
      "Their digital marketing strategies and AI solutions have revolutionized how we approach customer engagement, driving measurable growth and optimizing overall business performance.",
    rating: 5,
    logo: "/BB.jpg",
  },
  {
    name: "Abhilasha Mohite",
    role: "Swaraaj Tech",
    content:
      "Shris Tech is an outstanding partner, providing high-quality, efficient digital solutions with excellent attention to detail. Highly recommend for reliable service and support.",
    rating: 5,
    logo: "/swaraaj.png",
  },
  {
    name: "A1 Diesel Services",
    role: "A1 Diesel Services",
    content:
      "Shris Tech transformed our marketing approach with SEO and social media strategies. We saw more customer inquiries, better visibility, and a stronger brand presence. Highly recommended!",
    rating: 5,
    logo: "/A1.png",
  },
];

// Stats Data
const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "1+", label: "Years Experience" },
  { number: "99%", label: "Client Satisfaction" },
];

// Core Values Data
const values = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' success and work closely with them to achieve their goals.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in all our deliverables and continuously improve our processes.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and consistently deliver projects on time.",
  },
  {
    icon: Brain,
    title: "Innovation Focus",
    description:
      "We stay ahead of technology trends and implement cutting-edge solutions for our clients.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        subtitle="Delivering Web, Full-Stack, and Data Analytics solutions to clients worldwide."
        title="Your Offshore Development Partner – Skilled Teams, Cost-Effective Solutions"
        description="We deliver high-quality, cost-effective technology solutions for clients worldwide. Partner with us for expert teams, transparent processes, and measurable results."
        primaryCTA={{
          text: "Get Started",
          href: "/contact",
        }}
        features={[
          "Expert Full-Stack & Web Development",
          "Advanced Data Analytics & AI Solutions",
          "24/7 Support & Communication",
          "Proven Track Record with Global Clients",
        ]}
        // backgroundImage="/hero-bg.webp"
      />

      {/* Services Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward. From concept to deployment, we're your trusted technology partner.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-8">
            <a href="/contact" className="btn-primary w-full sm:w-auto">Get a Free Quote</a>
            <a href="/services" className="btn-outline w-full sm:w-auto">Explore All Services</a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver
              exceptional value to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white text-[#0A3D62] rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#00AEEF] rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-neutral-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A3D62] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with us.
            </p>
          </motion.div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-600 mb-6 italic flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center mr-4 bg-white border border-gray-200">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.name} logo`}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0A3D62]">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/917588473653"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.5 2 2 6.2 2 11.4c0 2.2.8 4.2 2.1 5.8L2 22l5.1-1.6c1.4.8 3 1.2 4.9 1.2 5.5 0 10-4.2 10-9.4S17.5 2 12 2zm.1 16.6c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .9.9-2.9-.2-.3c-1-1.3-1.6-2.8-1.6-4.5C4.8 7.1 8 4 12.1 4c4 0 7.3 3.1 7.3 7s-3.3 7.6-7.3 7.6zm4.1-5.6c-.2-.1-1.2-.6-1.3-.7s-.3-.1-.4.1c-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.6-1c-.6-.6-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3h-.3c-.1 0-.3 0-.4.2-.1.2-.6.6-.6 1.5s.6 1.8.7 1.9c.1.1 1.3 2 3.2 2.8.4.2.8.3 1.1.4.5.2.9.2 1.2.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3z" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
