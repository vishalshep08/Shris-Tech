"use client";

export default function Privacy() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-950">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        {/* Intro */}
        <p className="text-neutral-700 leading-relaxed mb-8">
          This Privacy Policy explains how <span className="font-semibold">Shris Tech</span> 
          ("we", "our") collects, uses, and protects your information when you 
          use our website and services. Please note this page uses placeholder 
          text and should be customized before production.
        </p>

        {/* Section: Information We Collect */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-700">
            <li>Contact details you provide (name, email, phone)</li>
            <li>Project information submitted via forms</li>
            <li>Usage data and analytics</li>
          </ul>
        </div>

        {/* Section: How We Use Information */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            How We Use Information
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-700">
            <li>To provide and improve our services</li>
            <li>To communicate with you about inquiries</li>
            <li>To analyze usage and enhance user experience</li>
          </ul>
        </div>

        {/* Section: Data Security */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Data Security
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            We implement reasonable security measures to protect your personal 
            information. However, no method of transmission over the Internet 
            or electronic storage is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
        </div>

        {/* Section: Contact Us */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Contact Us
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a
              href="mailto:info@shristech.com"
              className="text-primary-600 hover:underline"
            >
              anisha@shristech.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
