"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

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
  {
    name: "Twitter",
    href: "https://x.com/ShrisTech?t=UOE3c9dCrSXhOLaqyY3ZFQ&s=08",
    icon: Twitter,
  },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-28 sm:w-36">
                <div className="bg-blue/30 p-2 sm:p-3 rounded-xl shadow-md flex items-center justify-center">
                  <Image
                    src="/ShrisTechLogo.png"
                    alt="Shris Tech Logo"
                    width={200}
                    height={100}
                    className="h-20 sm:h-24 object-contain"
                  />
                </div>

              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Shris Tech</h3>
                <p className="text-sm text-neutral-300">
                  Innovation & Excellence
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 text-neutral-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:anisha@shristech.com"
                  className="hover:underline hover:text-cyan-300 transition-colors duration-200 break-all"
                >
                  anisha@shristech.com
                </a>
              </div>

              <div className="flex items-start gap-3 text-neutral-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919579968397"
                    className="hover:underline hover:text-cyan-300 transition-colors duration-200"
                  >
                    +91 9579968397
                  </a>
                  <a
                    href="tel:+917588473653"
                    className="hover:underline hover:text-cyan-300 transition-colors duration-200"
                  >
                    +91 7588473653
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Shivthar, Tal Dist Satara,
                  <br /> Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Company
              </h4>
              <ul className="space-y-3">
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

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academy */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Shris Academy
              </h4>
              <ul className="space-y-3">
                {footerLinks.academy.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-cyan-400 transition-colors duration-200 text-sm leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 sm:py-8 border-t border-white/20 mt-6">
          {/* Social */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-cyan-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </Link>
              );
            })}
          </div>

          {/* Copyright + Legal */}
          <div className="text-center space-y-3">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Shris Tech. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-neutral-500 hidden sm:inline">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
