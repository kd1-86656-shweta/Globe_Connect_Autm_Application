import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar'; 
import Footer from '../../Components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const Community = () => {
  const [communityList, setCommunityList] = useState([]);  // State to hold the community data
  const location = useLocation();  // Access the location state
  const navigate = useNavigate(); // Use navigate for navigation

  useEffect(() => {
    if (location.state && location.state.communityList) {
      setCommunityList(location.state.communityList);  // Set community list from the state
    } else {
      alert('Community data is missing.');
    }
  }, [location]);

  // Handle delete community
  const handleDelete = (id) => {
    const updatedList = communityList.filter((community) => community.id !== id);
    setCommunityList(updatedList); // Update state to reflect the deleted community
    // Optionally, make a request to the backend to delete the community permanently
  };

  return (
    <div className="container" style={{ backgroundColor: '#f0fdf4', minHeight: '100vh' }}>
      <Navbar />
      <br></br>

      {/* Add Community Button */}
      <div className="text-center mb-4">
        <button
          className="btn btn-gradient btn-lg text-white"
          style={{
            background: 'linear-gradient(45deg,#06402B,#06402B)', // Green gradient
            border: 'none', // Remove border
            fontWeight: 'bold', // Bold text
            boxShadow: '0 4px 8px rgba(51, 150, 145, 0.4)', // Shadow effect
            transition: 'all 0.3s ease', // Smooth transition for hover effect
          }}
          onClick={() => alert("Add Community Modal")}
        >
          <span style={{ fontSize: '18px' }}>Create Community</span>
        </button>
      </div>

      {/* Table for Community List */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Post Count</th>
              <th>Members Count</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {communityList.map((community) => (
              <tr key={community.id} style={{ backgroundColor: '#e8f5e9' }}>
                <td>{community.id}</td>
                <td>{community.title}</td>
                <td>{community.description}</td>
                <td>{community.category}</td>
                <td>{community.postCount}</td>
                <td>{community.membersCount}</td>
                <td>{community.status}</td>
                <td>
                  <button 
                    className="btn btn-danger"
                    onClick={() => handleDelete(community.id)}
                    style={{ backgroundColor: '#d32f2f', border: 'none' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
