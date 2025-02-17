import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>

        <div className="fs-4">
          <p className="text-center">
            Globe Connect offers a variety of services aimed at helping users connect, share content, and create communities. Here’s a breakdown of the key features we offer today and a glimpse of exciting features coming soon.
          </p>

          {/* Current Services Section */}
          <div>
            <h3 className="text-center mt-5">Current Services</h3>
            <div className="row mt-4">
              <div className="col-md-4">
                <div className="card shadow-lg rounded-3 mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">User Connectivity</h5>
                    <p className="card-text">
                      Connect with people around the world, share your experiences, and build a global community.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-lg rounded-3 mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">Content Sharing</h5>
                    <p className="card-text">
                      Share text, images, and videos with your followers, keeping them updated with your latest activities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow-lg rounded-3 mb-4">
                  <div className="card-body text-center">
                    <h5 className="card-title">Community Building</h5>
                    <p className="card-text">
                      Create and manage communities around shared interests and topics. Engage with like-minded individuals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Scope: Advertisements Section (Just Declaration) */}
          <div className="mt-5">
            <h3 className="text-center">Future Scope: Advertisements</h3>
            <p className="text-center">
              Advertisements will be available soon. Stay tuned for more information on how you can leverage advertising to promote your content and services.
            </p>
          </div>

        </div>
      </div>

      <style>
        {`
          .container {
            background-color: #f7f9fc;
            padding: 40px;
            border-radius: 10px;
          }

          h2, h3 {
            color: #00bcd4;
          }

          .card {
            background-color: #f0f8ff;
            border: 1px solid #e0e0e0;
          }

          .card-body {
            padding: 20px;
          }

          .card-title {
            color: #00bcd4;
            font-size: 1.3rem;
          }

          .card-text {
            color: #666666;
          }

          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      <Footer />
    </div>
  );
};

export default Services;
