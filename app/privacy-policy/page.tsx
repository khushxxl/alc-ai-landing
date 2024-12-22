import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We collect information that you provide directly to us when using
            the Alc AI app, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal information (name, email address)</li>
            <li>Usage data and drinking collection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Your Information
          </h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide personalized recommendations and insights</li>
            <li>Improve our services and user experience</li>
            <li>Ensure the security of your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
          <p>
            We do not sell your personal information to third parties. We may
            share your information with service providers who assist in
            operating our app and providing services to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at khushaal.choithramani@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the effective date.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">Last updated: Dec 22, 2024</p>
      </div>
    </div>
  );
}
