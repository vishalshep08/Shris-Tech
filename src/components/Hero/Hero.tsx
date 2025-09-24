"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, CheckCircle } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
  backgroundImage?: string;
}

export default function Hero({
  title = "Your Offshore Development Partner – Skilled Teams, Cost-Effective Solutions",
  subtitle = "TRUSTED WORLDWIDE",
  description = "Delivering Web, Full-Stack, and Data Analytics solutions to clients worldwide. Scale your business with our expert development teams.",
  primaryCTA = {
    text: "Get Started",
    href: "/contact",
  },
  features = [
    "Expert Full-Stack Development Teams",
    "Advanced Data Analytics & AI Solutions",
    "24/7 Support & Communication",
    "Proven Track Record with Global Clients",
  ],
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/85 to-[#00AEEF]">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62]/95 via-[#0A3D62]/90 to-[#00AEEF]/95" />
        )}
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center text-center gap-3">
        {/* Subtitle Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#00AEEF]/20 backdrop-blur-sm border border-[#00AEEF]/40 rounded-full px-3 py-1.5"
        >
          <Globe className="w-4 h-4 text-[#00AEEF]" />
          <span className="text-[#00AEEF] text-xs sm:text-sm font-medium">
            {subtitle}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full flex flex-col sm:flex-row gap-3 justify-center mt-2"
        >
          <Link
            href={primaryCTA.href}
            className="btn-primary w-full sm:w-auto text-sm sm:text-base"
          >
            {primaryCTA.text}
            {/* <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" /> */}
          </Link>
        </motion.div>

        {/* Features */}
        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90 text-xs sm:text-sm"
              >
                <CheckCircle className="w-4 h-4 text-[#00AEEF]" />
                {feature}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
