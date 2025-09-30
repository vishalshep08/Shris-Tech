"use client";

export default function Privacy() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-950 mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Effective Date: January 1, 2025 | Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </header>

        {/* Intro */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <p className="text-neutral-700 leading-relaxed">
            At <span className="font-semibold text-primary-900">Shris Tech</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our applications, and engage with our services.
          </p>
          <p className="text-neutral-700 leading-relaxed mt-4">
            By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with our practices, please do not use our services.
          </p>
        </div>

        {/* Section 1: Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Information We Collect
          </h2>
          
          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            1.1 Personal Information
          </h3>
          <p className="text-neutral-700 mb-3">
            We collect personal information that you voluntarily provide when you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Fill out contact forms or request quotes</li>
            <li>Create an account or register for our services</li>
            <li>Subscribe to newsletters or marketing communications</li>
            <li>Participate in surveys, promotions, or events</li>
            <li>Communicate with us via email, phone, or chat support</li>
          </ul>
          <p className="text-neutral-700 mt-3">
            This may include: name, email address, phone number, company name, job title, billing address, payment information, and project specifications.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            1.2 Usage Data and Analytics
          </h3>
          <p className="text-neutral-700 mb-3">
            We automatically collect information about how you interact with our services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>IP address, browser type, and operating system</li>
            <li>Device information (device ID, hardware model, mobile network)</li>
            <li>Pages viewed, features used, and time spent on our platforms</li>
            <li>Clickstream data and navigation paths</li>
            <li>Referring URLs and exit pages</li>
            <li>Date and time stamps of access</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            1.3 Location Information
          </h3>
          <p className="text-neutral-700">
            With your permission, we may collect precise location data from your device to provide location-based services, analyze usage patterns, and improve service delivery. You can disable location services through your device settings at any time.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            1.4 Cookies and Tracking Technologies
          </h3>
          <p className="text-neutral-700">
            We use cookies, web beacons, pixel tags, and similar technologies to enhance user experience, remember preferences, analyze traffic, and deliver personalized content. You can manage cookie preferences through your browser settings.
          </p>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            How We Use Your Information
          </h2>
          <p className="text-neutral-700 mb-4">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li><span className="font-semibold">Service Delivery:</span> To provide, maintain, and improve our services and applications</li>
            <li><span className="font-semibold">Communication:</span> To respond to inquiries, send project updates, and provide customer support</li>
            <li><span className="font-semibold">Personalization:</span> To customize user experience and deliver relevant content</li>
            <li><span className="font-semibold">Analytics:</span> To analyze usage patterns, trends, and performance metrics</li>
            <li><span className="font-semibold">Marketing:</span> To send promotional materials, newsletters, and service announcements (with opt-out options)</li>
            <li><span className="font-semibold">Security:</span> To detect, prevent, and address fraud, security issues, and technical problems</li>
            <li><span className="font-semibold">Legal Compliance:</span> To comply with legal obligations and enforce our terms</li>
            <li><span className="font-semibold">Payment Processing:</span> To process transactions and manage billing</li>
          </ul>
        </div>

        {/* Section 3: Third-Party Sharing */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Third-Party Sharing and Disclosure
          </h2>
          <p className="text-neutral-700 mb-4">
            We may share your information with trusted third parties in the following circumstances:
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            3.1 Service Providers
          </h3>
          <p className="text-neutral-700 mb-3">
            We work with third-party service providers who perform services on our behalf:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li><span className="font-semibold">Analytics Providers:</span> Google Analytics, Mixpanel, or similar platforms for usage analysis</li>
            <li><span className="font-semibold">Payment Gateways:</span> Stripe, PayPal, Razorpay, or other payment processors for transaction processing</li>
            <li><span className="font-semibold">Cloud Services:</span> AWS, Google Cloud, Vercel for hosting and infrastructure</li>
            <li><span className="font-semibold">Communication Tools:</span> Email service providers (SendGrid, Mailchimp) and SMS gateways</li>
            <li><span className="font-semibold">Customer Support:</span> Help desk and ticketing systems</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            3.2 Business Transfers
          </h3>
          <p className="text-neutral-700">
            In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of the business transaction. We will notify you of any such change in ownership.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            3.3 Legal Requirements
          </h3>
          <p className="text-neutral-700">
            We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of others.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            3.4 With Your Consent
          </h3>
          <p className="text-neutral-700">
            We may share your information with other third parties when you provide explicit consent to do so.
          </p>
        </div>

        {/* Section 4: Your Rights and Choices */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Your Rights and Choices
          </h2>
          <p className="text-neutral-700 mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li><span className="font-semibold">Access:</span> Request access to the personal data we hold about you</li>
            <li><span className="font-semibold">Correction:</span> Request correction of inaccurate or incomplete information</li>
            <li><span className="font-semibold">Deletion:</span> Request deletion of your personal data (subject to legal retention requirements)</li>
            <li><span className="font-semibold">Portability:</span> Request a copy of your data in a structured, machine-readable format</li>
            <li><span className="font-semibold">Opt-Out:</span> Unsubscribe from marketing communications at any time</li>
            <li><span className="font-semibold">Restriction:</span> Request restriction of processing in certain circumstances</li>
            <li><span className="font-semibold">Objection:</span> Object to processing based on legitimate interests</li>
            <li><span className="font-semibold">Withdraw Consent:</span> Withdraw previously given consent at any time</li>
          </ul>
          <p className="text-neutral-700 mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:anisha@shristech.com" className="text-primary-600 hover:underline font-semibold">
              anisha@shristech.com
            </a>. We will respond to your request within 30 days.
          </p>
        </div>

        {/* Section 5: Data Security */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Security Measures
          </h2>
          <p className="text-neutral-700 mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Encrypted storage of sensitive information</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Employee training on data protection practices</li>
            <li>Secure backup and disaster recovery procedures</li>
          </ul>
          <p className="text-neutral-700 mt-4">
            However, no method of electronic transmission or storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 6: Data Retention */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Data Retention
          </h2>
          <p className="text-neutral-700">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When information is no longer needed, we securely delete or anonymize it.
          </p>
        </div>

        {/* Section 7: Children's Privacy */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
            Children's Privacy
          </h2>
          <p className="text-neutral-700">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
          </p>
        </div>

        {/* Section 8: International Data Transfers */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">8</span>
            International Data Transfers
          </h2>
          <p className="text-neutral-700">
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to such transfers. We ensure appropriate safeguards are in place to protect your information.
          </p>
        </div>

        {/* Section 9: Changes to Privacy Policy */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">9</span>
            Changes to This Privacy Policy
          </h2>
          <p className="text-neutral-700">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </div>

        {/* Section 10: Contact Us */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg shadow-sm p-6 sm:p-8 border border-primary-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">10</span>
            Contact Us
          </h2>
          <p className="text-neutral-700 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-2 text-neutral-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:anisha@shristech.com" className="text-primary-600 hover:underline">
                anisha@shristech.com
              </a>
            </p>
            <p>
              <span className="font-semibold">General Inquiries:</span>{" "}
              <a href="mailto:anisha@shristech.com" className="text-primary-600 hover:underline">
                anisha@shristech.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a href="https://shristech.com" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                shristech.com
              </a>
            </p>
          </div>
          <p className="text-neutral-700 mt-4 text-sm italic">
            We are committed to resolving any privacy concerns you may have and will respond to your inquiries promptly.
          </p>
        </div>
      </div>
    </section>
  );
}
