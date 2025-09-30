"use client";

export default function Terms() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-950 mb-3">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Effective Date: January 1, 2025 | Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </header>

        {/* Intro */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <p className="text-neutral-700 leading-relaxed">
            Welcome to <span className="font-semibold text-primary-900">Shris Tech</span>. These Terms and Conditions ("Terms", "Agreement") govern your access to and use of our website, applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>
          <p className="text-neutral-700 leading-relaxed mt-4">
            Please read these Terms carefully before using our Services. If you do not agree with any part of these Terms, you must not use our Services.
          </p>
        </div>

        {/* Section 1: Acceptance of Terms */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p className="text-neutral-700 mb-3">
            By creating an account, accessing our website, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are using our Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </p>
          <p className="text-neutral-700">
            We reserve the right to modify these Terms at any time. Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms.
          </p>
        </div>

        {/* Section 2: Eligibility and Account Registration */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            Eligibility and Account Registration
          </h2>
          
          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            2.1 Age Requirement
          </h3>
          <p className="text-neutral-700">
            You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            2.2 Account Responsibilities
          </h3>
          <p className="text-neutral-700 mb-3">
            When you create an account with us, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Be responsible for all activities that occur under your account</li>
            <li>Notify us immediately of any unauthorized access or security breach</li>
            <li>Accept responsibility for all actions taken using your account credentials</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            2.3 Account Termination
          </h3>
          <p className="text-neutral-700">
            We reserve the right to suspend or terminate your account at our discretion if you violate these Terms, engage in fraudulent activity, or for any other reason we deem necessary to protect our Services or other users.
          </p>
        </div>

        {/* Section 3: Use of Services */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Use of Services
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            3.1 Permitted Use
          </h3>
          <p className="text-neutral-700 mb-3">
            You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use our Services responsibly and professionally.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            3.2 Prohibited Activities
          </h3>
          <p className="text-neutral-700 mb-3">
            You agree NOT to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Upload, transmit, or distribute any malicious code, viruses, or harmful software</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Interfere with or disrupt the operation of our Services</li>
            <li>Engage in any form of automated data collection (scraping, crawling) without permission</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Use our Services to send spam, phishing, or unsolicited communications</li>
            <li>Circumvent any security features or access restrictions</li>
            <li>Reverse engineer, decompile, or disassemble any part of our Services</li>
            <li>Use our Services for any illegal, fraudulent, or harmful purpose</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Post or transmit any defamatory, obscene, or offensive content</li>
          </ul>
        </div>

        {/* Section 4: Intellectual Property Rights */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Intellectual Property Rights
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            4.1 Our Intellectual Property
          </h3>
          <p className="text-neutral-700 mb-3">
            All content, features, and functionality of our Services, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Text, graphics, logos, icons, images, and videos</li>
            <li>Software, code, and algorithms</li>
            <li>Trademarks, service marks, and trade names</li>
            <li>Design, layout, and user interface</li>
            <li>Documentation and specifications</li>
          </ul>
          <p className="text-neutral-700 mt-3">
            are owned by <span className="font-semibold">Shris Tech</span> or our licensors and are protected by copyright, trademark, patent, and other intellectual property laws.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            4.2 Limited License
          </h3>
          <p className="text-neutral-700">
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes. This license does not include any right to reproduce, distribute, modify, or create derivative works from our content without prior written permission.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            4.3 User Content
          </h3>
          <p className="text-neutral-700">
            You retain ownership of any content you submit or upload to our Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such content solely for the purpose of providing and improving our Services.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            4.4 Trademark Notice
          </h3>
          <p className="text-neutral-700">
            "Shris Tech" and our logo are trademarks of Shris Tech. You may not use our trademarks without our prior written consent. All other trademarks mentioned are the property of their respective owners.
          </p>
        </div>

        {/* Section 5: Payment Terms */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Payment Terms and Subscriptions
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            5.1 Pricing and Fees
          </h3>
          <p className="text-neutral-700">
            Certain Services may require payment. All prices are listed in the applicable currency and are subject to change with notice. You agree to pay all fees associated with your use of paid Services.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            5.2 Payment Processing
          </h3>
          <p className="text-neutral-700">
            Payments are processed through secure third-party payment gateways (Stripe, PayPal, Razorpay, etc.). You agree to provide accurate and complete payment information and authorize us to charge your payment method for all fees incurred.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            5.3 Subscriptions and Recurring Billing
          </h3>
          <p className="text-neutral-700 mb-3">
            If you purchase a subscription:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Your subscription will automatically renew at the end of each billing period unless cancelled</li>
            <li>You will be charged the then-current subscription fee</li>
            <li>You can cancel your subscription at any time through your account settings</li>
            <li>Cancellations take effect at the end of the current billing period</li>
            <li>No refunds are provided for partial billing periods</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            5.4 Refund Policy
          </h3>
          <p className="text-neutral-700">
            Refunds are handled on a case-by-case basis. For service-related refund requests, please contact us within 14 days of purchase. Custom development projects may have specific refund terms outlined in the project agreement.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            5.5 Taxes
          </h3>
          <p className="text-neutral-700">
            All fees are exclusive of applicable taxes (VAT, GST, sales tax, etc.). You are responsible for paying all applicable taxes associated with your purchase.
          </p>
        </div>

        {/* Section 6: Service Availability */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
            Service Availability and Modifications
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            6.1 Service Uptime
          </h3>
          <p className="text-neutral-700">
            We strive to provide reliable, uninterrupted access to our Services. However, we do not guarantee that our Services will be available at all times or free from errors. We may experience downtime due to maintenance, updates, or unforeseen technical issues.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            6.2 Modifications to Services
          </h3>
          <p className="text-neutral-700">
            We reserve the right to modify, suspend, or discontinue any part of our Services at any time, with or without notice. We are not liable for any modification, suspension, or discontinuation of Services.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            6.3 Maintenance and Updates
          </h3>
          <p className="text-neutral-700">
            We may perform scheduled or emergency maintenance that temporarily affects Service availability. We will make reasonable efforts to notify users of planned maintenance in advance.
          </p>
        </div>

        {/* Section 7: Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
            Limitation of Liability
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            7.1 Disclaimer of Warranties
          </h3>
          <p className="text-neutral-700 mb-3">
            Our Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Warranties of merchantability or fitness for a particular purpose</li>
            <li>Warranties of non-infringement</li>
            <li>Warranties regarding accuracy, reliability, or availability</li>
            <li>Warranties that Services will be uninterrupted or error-free</li>
          </ul>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            7.2 Limitation of Damages
          </h3>
          <p className="text-neutral-700 mb-3">
            TO THE FULLEST EXTENT PERMITTED BY LAW, <span className="font-semibold">SHRIS TECH</span> SHALL NOT BE LIABLE FOR:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
            <li>Any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Service interruptions or data loss</li>
            <li>Damages resulting from unauthorized access to your account</li>
            <li>Damages arising from third-party services or content</li>
          </ul>
          <p className="text-neutral-700 mt-3">
            Our total liability for any claims arising from or related to these Terms or our Services shall not exceed the amount you paid to us in the 12 months preceding the claim, or $100 if no payment was made.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            7.3 Exceptions
          </h3>
          <p className="text-neutral-700">
            Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability will be limited to the maximum extent permitted by applicable law.
          </p>
        </div>

        {/* Section 8: Indemnification */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">8</span>
            Indemnification
          </h2>
          <p className="text-neutral-700">
            You agree to indemnify, defend, and hold harmless <span className="font-semibold">Shris Tech</span>, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4 mt-3">
            <li>Your use or misuse of our Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of third parties</li>
            <li>Your violation of applicable laws or regulations</li>
            <li>Content you submit or transmit through our Services</li>
          </ul>
        </div>

        {/* Section 9: Third-Party Links and Services */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">9</span>
            Third-Party Links and Services
          </h2>
          <p className="text-neutral-700">
            Our Services may contain links to third-party websites, applications, or services that are not owned or controlled by <span className="font-semibold">Shris Tech</span>. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party services.
          </p>
          <p className="text-neutral-700 mt-3">
            You acknowledge and agree that we shall not be liable for any damage or loss caused by your use of any third-party services. We recommend reviewing the terms and privacy policies of any third-party services you access.
          </p>
        </div>

        {/* Section 10: Privacy and Data Protection */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">10</span>
            Privacy and Data Protection
          </h2>
          <p className="text-neutral-700">
            Your privacy is important to us. Our collection, use, and disclosure of your personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to our data practices as described in the Privacy Policy.
          </p>
          <p className="text-neutral-700 mt-3">
            Please review our{" "}
            <a href="/privacy" className="text-primary-600 hover:underline font-semibold">
              Privacy Policy
            </a>{" "}
            to understand how we handle your information.
          </p>
        </div>

        {/* Section 11: Dispute Resolution */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">11</span>
            Dispute Resolution and Governing Law
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            11.1 Informal Resolution
          </h3>
          <p className="text-neutral-700">
            If you have any disputes or concerns, please contact us first at{" "}
            <a href="mailto:anisha@shristech.com" className="text-primary-600 hover:underline">
              anisha@shristech.com
            </a>{" "}
            to attempt to resolve the issue informally.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            11.2 Governing Law
          </h3>
          <p className="text-neutral-700">
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            11.3 Jurisdiction
          </h3>
          <p className="text-neutral-700">
            Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the courts located in [Your City/State], India, and you consent to the personal jurisdiction of such courts.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            11.4 Arbitration
          </h3>
          <p className="text-neutral-700">
            Any disputes that cannot be resolved informally may be subject to binding arbitration in accordance with the rules of the Indian Arbitration and Conciliation Act, 1996, before a single arbitrator appointed by mutual agreement.
          </p>
        </div>

        {/* Section 12: Termination */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">12</span>
            Termination
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            12.1 Termination by You
          </h3>
          <p className="text-neutral-700">
            You may terminate your account at any time by contacting us or through your account settings. Upon termination, your right to use the Services will immediately cease.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            12.2 Termination by Us
          </h3>
          <p className="text-neutral-700">
            We may suspend or terminate your access to the Services immediately, without prior notice, if you breach these Terms or engage in conduct that we deem inappropriate or harmful.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            12.3 Effect of Termination
          </h3>
          <p className="text-neutral-700">
            Upon termination, all provisions of these Terms that by their nature should survive shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
          </p>
        </div>

        {/* Section 13: General Provisions */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-8 border border-neutral-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-100 text-primary-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">13</span>
            General Provisions
          </h2>

          <h3 className="text-lg font-semibold text-primary-800 mb-3">
            13.1 Entire Agreement
          </h3>
          <p className="text-neutral-700">
            These Terms, together with our Privacy Policy and any additional terms applicable to specific Services, constitute the entire agreement between you and <span className="font-semibold">Shris Tech</span> regarding your use of our Services.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            13.2 Severability
          </h3>
          <p className="text-neutral-700">
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            13.3 Waiver
          </h3>
          <p className="text-neutral-700">
            Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            13.4 Assignment
          </h3>
          <p className="text-neutral-700">
            You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            13.5 Force Majeure
          </h3>
          <p className="text-neutral-700">
            We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
          </p>

          <h3 className="text-lg font-semibold text-primary-800 mt-6 mb-3">
            13.6 Language
          </h3>
          <p className="text-neutral-700">
            These Terms are written in English. Any translations are provided for convenience only. In case of conflict, the English version shall prevail.
          </p>
        </div>

        {/* Section 14: Contact Information */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg shadow-sm p-6 sm:p-8 border border-primary-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-4 flex items-center">
            <span className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">14</span>
            Contact Information
          </h2>
          <p className="text-neutral-700 mb-4">
            If you have any questions, concerns, or feedback regarding these Terms & Conditions, please contact us:
          </p>
          <div className="space-y-2 text-neutral-700">
            <p>
              <span className="font-semibold">Legal Inquiries:</span>{" "}
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
            We are committed to addressing your concerns and will respond to all inquiries in a timely manner.
          </p>
        </div>

        {/* Acknowledgment */}
        <div className="bg-primary-900 text-white rounded-lg shadow-sm p-6 sm:p-8 mt-8">
          <h3 className="text-xl font-bold mb-3">Acknowledgment</h3>
          <p className="text-primary-100">
            BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS & CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE OUR SERVICES.
          </p>
        </div>
      </div>
    </section>
  );
}
