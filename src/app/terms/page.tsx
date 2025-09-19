"use client";

export default function Terms() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-950">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm sm:text-base text-neutral-500">
            Last updated: {new Date().getFullYear()}
          </p>
        </header>

        {/* Intro */}
        <p className="text-neutral-700 leading-relaxed mb-8">
          These Terms & Conditions ("Terms") govern your use of the{" "}
          <span className="font-semibold">Shris Tech</span> website and services. 
          This page currently contains placeholder content and should be 
          replaced with your official legal terms before going live.
        </p>

        {/* Section: Use of Services */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Use of Services
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            You agree to use our services lawfully and responsibly. You must not 
            engage in any activity that disrupts, damages, or interferes with our 
            systems, website, or other users.
          </p>
        </div>

        {/* Section: Intellectual Property */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Intellectual Property
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            All content, trademarks, designs, graphics, and code are the property 
            of <span className="font-semibold">Shris Tech</span>, unless otherwise 
            noted. You may not copy, reproduce, or distribute our intellectual 
            property without prior written consent.
          </p>
        </div>

        {/* Section: Limitation of Liability */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Limitation of Liability
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            To the fullest extent permitted by law,{" "}
            <span className="font-semibold">Shris Tech</span> shall not be held 
            liable for any indirect, incidental, or consequential damages arising 
            from the use or inability to use our services.
          </p>
        </div>

        {/* Section: Contact */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary-900 mb-3">
            Contact
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            If you have any questions regarding these Terms, please contact us at:{" "}
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
