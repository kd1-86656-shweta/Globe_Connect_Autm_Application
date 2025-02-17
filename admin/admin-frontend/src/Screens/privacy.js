import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Privacy Policy</h2>
        <div className="fs-4">
          <p>
            Last Updated: February 11, 2025
          </p>

          <h4>1. Introduction</h4>
          <p>
            At Globe Connect, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our platform.
          </p>

          <h4>2. Information We Collect</h4>
          <p>
            We collect the following types of information:
            <ul>
              <li><strong>Personal Information:</strong> This includes details such as your name, email address, and other identifiable data you provide during registration or interactions with the platform.</li>
              <li><strong>Usage Data:</strong> We collect information about how you use our platform, including but not limited to your IP address, browser type, and interactions with features of the platform.</li>
              <li><strong>Cookies:</strong> We use cookies to improve your experience. Cookies help us remember your preferences and gather usage data to improve the platform.</li>
            </ul>
          </p>

          <h4>3. How We Use Your Information</h4>
          <p>
            We use your information to:
            <ul>
              <li>Provide, maintain, and improve the platform.</li>
              <li>Personalize your experience on the platform.</li>
              <li>Communicate with you regarding updates, promotions, or support.</li>
              <li>Enforce our Terms of Service and ensure platform safety.</li>
            </ul>
          </p>

          <h4>4. How We Share Your Information</h4>
          <p>
            We may share your information with:
            <ul>
              <li><strong>Service Providers:</strong> Third-party providers who assist in platform functionality (e.g., hosting, analytics, payment processors).</li>
              <li><strong>Legal Compliance:</strong> If required by law, we may disclose your information to authorities or to enforce our rights.</li>
            </ul>
          </p>

          <h4>5. Data Security</h4>
          <p>
            We take reasonable measures to protect your information. However, please note that no method of transmission over the internet is completely secure, and we cannot guarantee the absolute security of your data.
          </p>

          <h4>6. Your Rights</h4>
          <p>
            You have the right to:
            <ul>
              <li>Access, update, or delete your personal information.</li>
              <li>Request the restriction or deletion of your account and data.</li>
              <li>Opt-out of certain communications.</li>
            </ul>
          </p>

          <h4>7. Changes to Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h4>8. Contact Us</h4>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at: support@globeconnect.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
