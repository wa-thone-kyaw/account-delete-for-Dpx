import React from "react";
import "../styles/globals.css";
const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Privacy Policy
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Dpx Express! Your privacy is important to us. This Privacy
          Policy outlines the types of personal information we collect, how we
          use it, and the steps we take to protect your data.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We collect various types of information, including personal data,
            when you use our services. This may include your name, email
            address, phone number, and location data.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We use the information we collect to provide, maintain, and improve
            our services, to communicate with you, and to ensure the security of
            our services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Data Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement a variety of security measures to maintain the safety
            of your personal information. However, please be aware that no
            method of transmitting information over the internet is completely
            secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </div>

        <p className="mt-8 text-gray-700">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:support@dpxexpress.com"
            className="text-blue-600 underline"
          >
            support@dpxexpress.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
