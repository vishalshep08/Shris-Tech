'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  BarChart3,
  Megaphone,
  Brain,
  Wrench,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard/ServiceCard';

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web & Full Stack Development',
    description:
      'End-to-end web solutions using modern frameworks with scalable backends and delightful UX.',
    features: [
      'React/Next.js frontends',
      'Node.js, Python backends',
      'REST/GraphQL APIs',
      'Database & ORM setup',
      'DevOps & CI/CD',
    ],
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications with great performance and usability.',
    features: [
      'React Native and Flutter',
      'App store deployment',
      'Push notifications',
      'Analytics & crash reporting',
      'Secure auth & payments',
    ],
  },
  {
    id: 'data-analytics',
    icon: BarChart3,
    title: 'Data Analytics & BI Solutions',
    description:
      'Turn raw data into insight with dashboards, ETL pipelines, and decision support.',
    features: [
      'Power BI/Tableau dashboards',
      'Data modeling & warehousing',
      'ETL/ELT pipelines',
      'KPI design & reporting',
      'Forecasting & trends',
    ],
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing / SEO',
    description:
      'Full-funnel growth with SEO, paid ads, content, and conversion optimization.',
    features: [
      'SEO audits & on-page SEO',
      'Google Ads & Meta Ads',
      'Content & social strategy',
      'Landing pages & CRO',
      'Analytics & attribution',
    ],
  },
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Applied AI for automation, prediction, and personalization using modern ML stacks.',
    features: [
      'ML model development',
      'NLP and computer vision',
      'Recommendation systems',
      'MLOps & monitoring',
      'GenAI assistants',
    ],
  },
  {
    id: 'it-support',
    icon: Wrench,
    title: 'IT Support & Maintenance',
    description:
      'Reliable maintenance, monitoring, and support to keep your systems running.',
    features: [
      '24/7 support SLAs',
      'Security hardening',
      'Uptime monitoring',
      'Backups & DR plans',
      'Cloud cost optimization',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed">
              Strategic, measurable, and scalable solutions across web, mobile, data,
              marketing, and AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.id} id={service.id}>
              <ServiceCard
                icon={service.icon as any}
                title={service.title}
                description={service.description}
                features={service.features}
                ctaText="Enquire Now"
                ctaHref={`/contact?service=${encodeURIComponent(service.title)}`}
                delay={index * 0.05}
                featured={index === 0}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
