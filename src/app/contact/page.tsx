'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email — we typically respond within 24 hours',
    contact: 'anisha@shristech.com',
    action: 'mailto:anisha@shristech.com',
    color: 'bg-blue-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Connect with our team directly during business hours',
    contact: '+91 9579968397',
    action: 'tel:+919579968397',
    color: 'bg-green-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us instantly via WhatsApp',
    contact: '+91 7588473653',
    action: 'https://wa.me/917588473653',
    color: 'bg-green-600',
  },
];

const faqs = [
  {
    question: 'How quickly will you respond after I contact you?',
    answer:
      'We respond to most inquiries within 24 hours. For urgent matters, you can reach us via phone or WhatsApp for faster assistance.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. We work with businesses across India, Europe, the Middle East, and North America. Our team adjusts meeting times to match your timezone.',
  },
  {
    question: 'What engagement models do you offer?',
    answer:
      'We offer flexible models — fixed-price projects, hourly billing, and dedicated developer teams depending on your requirements.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Absolutely. We provide ongoing maintenance, updates, and technical support to ensure your solution continues to perform effectively.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Simply contact us via email, phone, or WhatsApp. We will schedule a free consultation call to discuss your project needs.',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-400 selection:text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="max-w-6xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed mb-8">
              Ready to scale your business with innovative technology solutions? Reach out today and let’s explore how Shris Tech can help you succeed globally.
            </p>
            <Link
              href="#contact-form"
              className="inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-neutral-50 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 sm:mb-6">
              How Can We Help?
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach us. We’re here to support clients across different time zones and regions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.action}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center group hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-950 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base mb-3">
                    {method.description}
                  </p>
                  <div className="text-secondary-500 font-medium text-sm sm:text-base">
                    {method.contact}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Office Info + Business Hours & Global Presence Section */}
      <section className="section-padding bg-neutral-50 px-4 sm:px-6 lg:px-8">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-6">
              Office Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-950 mb-1">Address</h4>
                  <p className="text-neutral-600 text-sm sm:text-base">
                    Shivthar,<br /> Tal Dist. Satara,<br /> Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-950 mb-1">Phone</h4>
                  <p className="text-neutral-600">+91 9579968397</p>
                  <p className="text-neutral-600">+91 7588473653</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-secondary-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary-950 mb-1">Email</h4>
                  <p className="text-neutral-600">anisha@shristech.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours & Global Presence */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-4">
              Business Hours & Global Presence
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm sm:text-base">
                <span className="text-neutral-600">Monday – Sunday</span>
                <span className="font-medium text-primary-950">24/7 Support</span>
              </div>
              <div className="flex items-start space-x-3 text-sm sm:text-base">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 mt-0.5" />
                <p className="text-neutral-600">
                  We provide round-the-clock availability to align with clients in 
                  <strong> North America, Europe, Middle East, and Asia</strong>.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-sm sm:text-base">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 mt-0.5" />
                <p className="text-neutral-600">
                  Global communication channels — Zoom, Google Meet, and Microsoft Teams 
                  for seamless collaboration across time zones.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-sm sm:text-base">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 mt-0.5" />
                <p className="text-neutral-600">
                  Secure contracts and NDAs ensure confidentiality and compliance 
                  with <strong>GDPR & international standards</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-950 mb-4 sm:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Here are answers to some of the most common questions from our global clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-5 sm:p-6 rounded-xl"
              >
                <h3 className="text-base sm:text-lg font-semibold text-primary-950 mb-2 sm:mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
