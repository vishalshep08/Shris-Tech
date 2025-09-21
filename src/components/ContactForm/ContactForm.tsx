'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const services = [
  'Web Development',
  'Mobile App Development',
  'Data Analytics & BI',
  'Digital Marketing',
  'AI/ML Solutions',
  'IT Support & Maintenance',
  'Shris Academy Training',
  'Other',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus({
        type: 'success',
        message:
          "✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          '❌ Sorry, there was an error sending your message. Please try again or contact us directly.',
      });
    }
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8"
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-primary-950 mb-3">
            Send us a Message
          </h3>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as
            possible. We're here to help with all your technology needs.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary-950 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-950 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          {/* Company + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-primary-950 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary-950 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-primary-950 mb-2">
              Service Interest *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-950 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent resize-none"
              placeholder="Tell us about your project, requirements, or any questions you have..."
            />
          </div>

          {/* Status */}
          {status.type !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-center space-x-3 text-sm sm:text-base ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : status.type === 'error'
                  ? 'bg-red-50 text-red-800 border border-red-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}
            >
              {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
              {status.type === 'loading' && (
                <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              )}
              <span className="font-medium">{status.message}</span>
            </motion.div>
          )}

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status.type === 'loading'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-secondary-500 hover:bg-secondary-600 disabled:bg-neutral-400 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 text-base sm:text-lg"
          >
            {status.type === 'loading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
