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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative group ${featured ? 'lg:scale-105' : ''}`}
    >
      <div className={`card p-8 h-full ${featured ? 'border-2 border-secondary-500' : ''}`}>
        {/* Featured Badge */}
        {featured && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </span>
          </div>
        )}

        {/* Icon */}
        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
          featured 
            ? 'bg-secondary-500 text-white' 
            : 'bg-primary-50 text-primary-950 group-hover:bg-secondary-500 group-hover:text-white'
        } transition-colors duration-300`}>
          <Icon className="w-8 h-8" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-primary-950 mb-4 group-hover:text-secondary-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: delay + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3"
            >
              <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                featured ? 'bg-secondary-500' : 'bg-primary-950 group-hover:bg-secondary-500'
              } transition-colors duration-300`} />
              <span className="text-neutral-600 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Price */}
        {price && (
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary-950">{price}</span>
            <span className="text-neutral-500 ml-2">/project</span>
          </div>
        )}

        {/* CTA Button */}
        <motion.a
          href={ctaHref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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
