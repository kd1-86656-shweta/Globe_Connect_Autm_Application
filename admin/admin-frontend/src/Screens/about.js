import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">About Globe Connect Admin Panel</h2>

        {/* About Content Section */}
        <div>
          <p className="fs-4">
            Welcome to the Autm Admin Panel! <br />
          </p>

          <p className="fs-4">
            Globe Connect connects people from around the world, creating a space for users to share and connect. 
            As an admin, you have the tools to oversee and moderate the content that helps bring our global community together.
          </p>

          <p className="fs-4">
            At Globe Connect, our mission is to foster meaningful global connections. As an admin, you help keep the platform safe, organized, and engaging for all users.
          </p>
        </div>

        {/* Admin Responsibilities Section */}
        <div className="mt-5">
         
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg rounded-3">
                <div className="card-body text-center">
                  <h5 className="card-title">User Management</h5>
                  <p className="card-text">
                    View and manage user accounts to ensure a safe platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg rounded-3">
                <div className="card-body text-center">
                  <h5 className="card-title">Community Moderation</h5>
                  <p className="card-text">
                    Create, manage, and moderate communities for healthy discussions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-lg rounded-3">
                <div className="card-body text-center">
                  <h5 className="card-title">Post Monitoring</h5>
                  <p className="card-text">
                    Review posts and ensure the content aligns with platform guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Styling */}
        <style>
          {`
            .container {
              background-color: #f7f9fc;
              padding: 40px;
              border-radius: 10px;
            }

            h2 {
              color: #00bcd4;
            }

            .fs-4 {
              color: #555555;
            }

            .text-center {
              text-align: center;
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
              font-size: 1.2rem;
            }

            .card-text {
              color: #666666;
            }

            .card:hover {
              transform: scale(1.05);
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            }

            @media (max-width: 768px) {
              .card-title {
                font-size: 1rem;
              }

              .fs-4 {
                font-size: 1.1rem;
              }
            }
          `}
        </style>
      </div>
      <Footer />
    </div>
  );
};

export default About;
