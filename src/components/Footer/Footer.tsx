"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
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
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/10 p-2 rounded-xl shadow-md flex items-center justify-center w-20 sm:w-24">
                <Image
                  src="/ShrisTechLogo.png"
                  alt="Shris Tech Logo"
                  width={120}
                  height={60}
                  className="h-14 sm:h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Shris Tech</h3>
                <p className="text-xs text-neutral-300">Innovation & Excellence</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-neutral-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:anisha@shristech.com"
                  className="hover:underline hover:text-cyan-300 transition-colors duration-200 break-all"
                >
                  anisha@shristech.com
                </a>
              </div>

              <div className="flex items-start gap-2 text-neutral-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
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

              <div className="flex items-start gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Shivthar, Tal Dist Satara,
                  <br /> Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services */}
            <div>
              <h4 className="text-base font-semibold mb-3">Services</h4>
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

            {/* Academy */}
            <div>
              <h4 className="text-base font-semibold mb-3">Shris Academy</h4>
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

            {/* Legal */}
            <div>
              <h4 className="text-base font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
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
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 border-t border-white/20 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex space-x-3">
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
                    <Icon className="w-5 h-5 text-white" />
                  </Link>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-neutral-400 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} Shris Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
