'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';
import ContactForm from '@/components/ContactForm/ContactForm';
import Link from 'next/link';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'anisha@shristech.com',
    action: 'mailto:info@shristech.com',
    color: 'bg-blue-500'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team during business hours',
    contact: '+91 9579968397',
    action: 'tel:+91 9579968397',
    color: 'bg-green-500'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Chat with us instantly via WhatsApp',
    contact: '+91 7588473653',
    action: 'https://wa.me/+917588473653',
    color: 'bg-green-600'
  }
];

const officeHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D62] via-[#0A3D62]/80 to-[#00AEEF]" />
        </div>

        <div className="max-w-6xl mx-auto relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Get In <span className="text-cyan-400">Touch</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-200 leading-relaxed mb-8">
              Ready to transform your business with innovative technology solutions? Contact us today and
              discover how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
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
              Choose the most convenient way to reach us. We're available through multiple channels.
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
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-950 mb-2">{method.title}</h3>
                  <p className="text-neutral-600 text-sm sm:text-base mb-3">{method.description}</p>
                  <div className="text-secondary-500 font-medium text-sm sm:text-base">{method.contact}</div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <div className="card p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-4 sm:mb-6">
                  Office Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-950 mb-1">Address</h4>
                      <p className="text-neutral-600 text-sm sm:text-base">
                        Shivthar,<br /> Tal Dist. Satara,<br /> Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-950 mb-1">Phone</h4>
                      <p className="text-neutral-600">+91 9579968397</p>
                      <p className="text-neutral-600">+91 7588473653</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary-950 mb-1">Email</h4>
                      <p className="text-neutral-600">anisha@shristech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card p-6 sm:p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-950 mb-4 sm:mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-neutral-600">{schedule.day}</span>
                      <span className="font-medium text-primary-950">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500" />
                    <span className="text-xs sm:text-sm text-neutral-600">
                      Emergency support available 24/7 for existing clients
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Here are some common questions we receive. If you don’t see yours, feel free to contact us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer:
                  'Project timelines vary depending on complexity and scope. Simple websites typically take 2–4 weeks, while complex applications can take 3–6 months.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer:
                  'Yes, we offer comprehensive support and maintenance packages including updates, patches, and technical support.'
              },
              {
                question: 'What technologies do you work with?',
                answer:
                  'We work with modern technologies like React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms.'
              },
              {
                question: 'Can you help with existing projects?',
                answer:
                  'Absolutely! We can maintain, improve, or migrate existing projects, optimizing them for performance and modernization.'
              }
            ].map((faq, index) => (
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
