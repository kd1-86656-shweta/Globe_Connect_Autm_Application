import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

const TermsOfService = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Terms of Service</h2>
        <div className="fs-4">
          <p>
            Last Updated: February 11, 2025
          </p>

          <h4>1. Introduction</h4>
          <p>
            Welcome to Globe Connect. These Terms of Service ("Terms") govern your use of our platform. By accessing or using Globe Connect ("we", "our", or "the platform"), you agree to abide by these Terms. If you do not agree with these Terms, please do not use our platform.
          </p>

          <h4>2. User Registration and Account</h4>
          <p>
            To use certain features of the platform, you may need to register for an account. You agree to provide accurate, complete, and up-to-date information during the registration process. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
          </p>

          <h4>3. User Conduct</h4>
          <p>
            You agree not to engage in any of the following activities:
            <ul>
              <li>Posting or sharing offensive, harmful, or unlawful content.</li>
              <li>Harassing, abusing, or threatening other users.</li>
              <li>Impersonating another person or entity.</li>
              <li>Engaging in any activities that violate laws or regulations.</li>
            </ul>
          </p>

          <h4>4. Content Ownership and Rights</h4>
          <p>
            You retain ownership of the content you upload. However, by posting content on our platform, you grant Globe Connect a non-exclusive, transferable, sublicensable, royalty-free license to use, display, and distribute your content.
          </p>

          <h4>5. Termination of Account</h4>
          <p>
            We reserve the right to suspend or terminate your account for any violation of these Terms or if we believe you are engaging in harmful activities on the platform.
          </p>

          <h4>6. Limitation of Liability</h4>
          <p>
            Globe Connect is not liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the platform.
          </p>

          <h4>7. Changes to Terms</h4>
          <p>
            We may modify these Terms at any time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review these Terms periodically.
          </p>

          <h4>8. Contact Us</h4>
          <p>
            If you have any questions regarding these Terms, please contact us at: support@globeconnect.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
