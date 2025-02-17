import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-black mt-5 py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <p>&copy; {new Date().getFullYear()} Autm. All Rights Reserved.</p>
          </div>
          <div className="col-12">
            <a href="/terms" className="text-dark mx-3">Terms of Service</a>|
            <a href="/privacy" className="text-dark mx-3">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
