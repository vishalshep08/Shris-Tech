"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "Mobile Apps", href: "/services#mobile-apps" },
    { name: "Data Analytics", href: "/services#data-analytics" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "AI/ML Solutions", href: "/services#ai-ml" },
  ],
  academy: [
    { name: "Course Programs", href: "/academy#programs" },
    { name: "Skill Development", href: "/academy#skill-development" },
    { name: "Full Stack Training", href: "/academy#full-stack" },
    { name: "Digital Marketing", href: "/academy#digital-marketing" },
    { name: "Power BI Training", href: "/academy#power-bi" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anisha-sabale-b40707210",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shris_tech_media?igsh=MW81NGdhdGhpNzZvNg==",
    icon: Instagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white/10">
                <img
                  src="/ShrisTechLogo.png"
                  alt="Shris Tech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Shris Tech</h3>
                <p className="text-sm text-neutral-300">
                  Innovation & Excellence
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:anisha@shristech.com"
                  className="hover:underline hover:text-cyan-300 transition-colors"
                >
                  anisha@shristech.com
                </a>
              </div>

              <div className="flex flex-col gap-2 text-neutral-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href="tel:+919579968397"
                    className="hover:underline hover:text-cyan-300 transition-colors"
                  >
                    +91 9579968397
                  </a>
                </div>
                <a
                  href="tel:+917588473653"
                  className="pl-6 hover:underline hover:text-cyan-300 transition-colors"
                >
                  +91 7588473653
                </a>
              </div>

              <div className="flex gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  Shivthar, Tal Dist Satara,
                  <br /> Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4">
              Shris Academy
            </h4>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
              <p className="text-neutral-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} Shris Tech. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
