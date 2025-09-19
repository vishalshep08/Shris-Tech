'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, Code, BarChart3, Megaphone, Rocket,
  Clock, Users, Star, CheckCircle, ArrowRight, Calendar,
  BookOpen, Award, Target, TrendingUp, Globe
} from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 'skill-development',
    icon: Rocket,
    title: 'Skill Development',
    subtitle: 'Quick Tech Upskilling',
    description: 'Short, intensive modules to quickly upskill in modern tech stacks and boost your career prospects.',
    duration: '4-8 weeks',
    level: 'Beginner to Intermediate',
    format: 'Part-time',
    bullets: [
      'Frontend foundations (HTML, CSS, JavaScript)',
      'Backend basics (Node.js, Express)',
      'Version control with Git & GitHub',
      'Cloud deployments & hosting solutions',
      'Industry best practices & workflows'
    ],
    highlights: ['Hands-on Projects', 'Mentorship', 'Certificate'],
    popular: false
  },
  {
    id: 'full-stack',
    icon: Code,
    title: 'Full Stack Development',
    subtitle: 'Complete Web Development',
    description: 'Comprehensive project-based curriculum covering frontend, backend, databases, and modern deployment practices.',
    duration: '16-20 weeks',
    level: 'Beginner to Advanced',
    format: 'Full-time/Part-time',
    bullets: [
      'Modern React/Next.js with TypeScript',
      'RESTful APIs with Node.js & Express',
      'Database design (SQL & NoSQL)',
      'Authentication & security practices',
      'CI/CD pipelines & cloud deployment',
      'Testing & code quality'
    ],
    highlights: ['Job Placement Support', '3 Major Projects', 'Industry Mentorship'],
    popular: true
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    subtitle: 'Growth & Marketing Strategy',
    description: 'Master SEO, content marketing, paid advertising, and analytics to drive sustainable business growth.',
    duration: '12-14 weeks',
    level: 'Beginner to Advanced',
    format: 'Part-time',
    bullets: [
      'SEO fundamentals & technical optimization',
      'Google Ads & Facebook advertising',
      'Content strategy & copywriting',
      'Email marketing automation',
      'Analytics, tracking & attribution',
      'Marketing funnel optimization'
    ],
    highlights: ['Real Campaign Experience', 'Google Certification', 'Portfolio Building'],
    popular: false
  },
  {
    id: 'power-bi',
    icon: BarChart3,
    title: 'Power BI & Analytics',
    subtitle: 'Data Visualization Expert',
    description: 'Build interactive dashboards, master data modeling, and create compelling business intelligence solutions.',
    duration: '8-10 weeks',
    level: 'Beginner to Advanced',
    format: 'Part-time',
    bullets: [
      'Advanced data modeling techniques',
      'DAX functions & complex measures',
      'Interactive dashboard design',
      'Power Query for data transformation',
      'Publishing & collaboration features',
      'Integration with other Microsoft tools'
    ],
    highlights: ['Microsoft Certification', 'Real Business Cases', 'Dashboard Portfolio'],
    popular: false
  },
];

const features = [
  { icon: Users, title: 'Expert Instructors', description: 'Learn from industry professionals with real-world experience and proven track records.' },
  { icon: Target, title: 'Project-Based Learning', description: 'Build a portfolio of real projects that demonstrate your skills to potential employers.' },
  { icon: Clock, title: 'Flexible Scheduling', description: 'Choose from weekend, evening, or intensive bootcamp formats that fit your lifestyle.' },
  { icon: Award, title: 'Industry Recognition', description: 'Earn certificates recognized by leading companies to boost your career.' },
  { icon: TrendingUp, title: 'Career Support', description: 'Get personalized career guidance, interview prep, and job placement assistance.' },
  { icon: Globe, title: 'Community Access', description: 'Join our alumni network and continue learning with peers and industry experts.' }
];

export default function Academy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-950 via-primary-900 to-secondary-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-medium">Shris Academy</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Learn the Skills to <br className="hidden sm:block" />
              <span className="text-secondary-400">Build Your Future</span>
            </h1>
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              Industry-aligned programs designed by practitioners. Learn by doing with real projects, expert mentorship, and career support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#programs"
                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-950 font-semibold rounded-lg transition"
              >
                Talk to Advisor
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive programs designed to take you from beginner to job-ready professional in today’s most in-demand skills.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6 border-2 ${
                    program.popular ? 'border-secondary-500' : 'border-neutral-200'
                  } relative`}
                >
                  {program.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  )}

                  <div className="flex gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary-950">{program.title}</h3>
                      <p className="text-sm text-secondary-600">{program.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 mb-4">{program.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-neutral-50 rounded-lg text-sm">
                    <div>
                      <span className="flex items-center gap-2 text-neutral-600 mb-1">
                        <Clock className="w-4 h-4" /> Duration
                      </span>
                      <div className="font-semibold text-primary-950">{program.duration}</div>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 text-neutral-600 mb-1">
                        <BookOpen className="w-4 h-4" /> Level
                      </span>
                      <div className="font-semibold text-primary-950">{program.level}</div>
                    </div>
                    <div>
                      <span className="flex items-center gap-2 text-neutral-600 mb-1">
                        <Calendar className="w-4 h-4" /> Format
                      </span>
                      <div className="font-semibold text-primary-950">{program.format}</div>
                    </div>
                  </div>

                  <h4 className="font-semibold text-primary-950 mb-2 text-sm">What You’ll Learn:</h4>
                  <ul className="space-y-1 mb-4 text-sm">
                    {program.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-secondary-500" /> {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.highlights.map((highlight, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs flex items-center gap-1">
                        <Star className="w-3 h-3" /> {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className={`flex-1 px-4 py-2 rounded-lg font-semibold text-sm text-center transition ${
                        program.popular
                          ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
                          : 'bg-primary-950 hover:bg-primary-800 text-white'
                      }`}
                    >
                      Enroll Now
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 px-4 py-2 border-2 border-neutral-300 hover:border-primary-950 text-primary-950 hover:bg-primary-950 hover:text-white rounded-lg font-semibold text-sm text-center transition"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4">
              Why Choose Shris Academy?
            </h2>
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto">
              We’re committed to your success with comprehensive support, industry connections, and proven methodologies that get results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
                >
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-950 mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
