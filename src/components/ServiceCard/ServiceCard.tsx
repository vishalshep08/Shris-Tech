'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  ctaText?: string;
  ctaHref?: string;
  delay?: number;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  ctaText = "Learn More",
  ctaHref = "#",
  delay = 0,
  featured = false
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative group ${featured ? 'lg:scale-105' : ''}`}
    >
      <div className={`card p-5 md:p-6 flex flex-col justify-between h-full ${featured ? 'border-2 border-secondary-500' : ''}`}>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <span className="bg-secondary-500 text-white px-3 py-0.5 rounded-full text-xs font-semibold">
              Most Popular
            </span>
          </div>
        )}

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
          featured 
            ? 'bg-secondary-500 text-white' 
            : 'bg-primary-50 text-primary-950 group-hover:bg-secondary-500 group-hover:text-white'
        } transition-colors duration-300`}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
          featured ? 'text-primary-950' : 'text-primary-950 group-hover:text-secondary-500'
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-xs leading-snug mb-2">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1 mb-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                featured ? 'bg-secondary-500' : 'bg-primary-950 group-hover:bg-secondary-500'
              } transition-colors duration-300`} />
              <span className="text-neutral-600 text-xs">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Price */}
        {price && (
          <div className="mb-3 text-sm">
            <span className="text-lg font-bold text-primary-950">{price}</span>
            <span className="text-neutral-500 ml-1.5">/project</span>
          </div>
        )}

        {/* CTA Button */}
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full mt-auto text-sm px-3 py-2 rounded-md text-center font-semibold transition ${
            featured
              ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
              : 'border-2 border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white'
          }`}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
}
