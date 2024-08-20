import React from "react";
import "../styles/globals.css";
const TermsAndConditions = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Terms and Conditions
      </h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Dpx Express! These terms and conditions outline the rules
          and regulations for the use of our services.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using our services, you accept and agree to be
            bound by these terms and conditions. If you do not agree with any
            part of these terms, you must not use our services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            2. Use of Services
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You agree to use our services only for lawful purposes and in
            accordance with these terms. You must not use our services in any
            way that could harm, disable, or impair our services.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            3. Account Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account information, including your password, and for all activities
            that occur under your account. You agree to notify us immediately of
            any unauthorized use of your account.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            4. Termination
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may terminate or suspend your access to our services at any time,
            without prior notice or liability, for any reason whatsoever,
            including if you breach these terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To the fullest extent permitted by law, Dpx Express shall not be
            liable for any indirect, incidental, special, or consequential
            damages, including but not limited to loss of profits, data, or
            other intangible losses.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            6. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these terms at any time.
            Your continued use of our services after any changes indicates your
            acceptance of the new terms.
          </p>
        </div>

        <p className="mt-8 text-gray-700">
          If you have any questions or concerns about our Terms and Conditions,
          please contact us at{" "}
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

export default TermsAndConditions;
