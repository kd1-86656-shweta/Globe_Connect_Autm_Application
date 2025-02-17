import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import { getCommunityData } from '../../services/community';
import { getPostData } from '../../services/post';
import { getUserData } from '../../services/user';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaUsersCog, FaClipboard, FaClipboardList } from 'react-icons/fa'; // FontAwesome icons
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token'); // Assuming token is stored in sessionStorage

  // States for counts
  const [communityCount, setCommunityCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [reportCount, setReportCount] = useState(0);
  const [postCount, setPostCount] = useState(0);
  const [userList, setUserList] = useState([]); // State to hold community data
  const [communityList, setCommunityList] = useState([]);
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching data on component mount
  useEffect(() => {
    const fetchData = async () => {
      console.log(token);
      if (!token) {
        toast.warn('Session is expired! Please login!!');
        navigate('/login');
      } else {
        try {
          // Fetching data from services
          console.log("before fetching");
          const communityResponse = await getCommunityData(token);
          setCommunityList(communityResponse);  // Set community data here
          setCommunityCount(communityResponse.length);
          const postResponse = await getPostData(token);
          setPostList(postResponse); 
          setPostCount(postResponse.length);
          const userResponse = await getUserData(token);
          setUserList(userResponse); 
          setUserCount(userResponse.length);
          // const reportResponse = await getReportData();
          // setReportCount(reportResponse.count);
        } catch (error) {
          toast.error('Error fetching data');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [token, navigate]);

  // Handling navigation with state
  const handleSeeCommunities = () => {
    navigate('/community', { state: { communityList } }); // Pass communityList as state
  };

  const handleSeePosts = () =>{
    navigate('/posts', { state: { postList } });
  };
  const handleSeeUsers = () =>{
    navigate('/users', { state: { userList } });
  };
  const handleSeeReports = () => navigate('/dashboard');
  
  // Loading state
  if (loading) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <div className="container mt-5">
          <h2 className="mb-4 text-center">Welcome to the Admin Dashboard</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaUsers size={40} className="text-primary mb-3" />
                  <h5 className="card-title">Total Users</h5>
                  <p className="card-text fs-4">{userCount}</p>
                  <button className="btn btn-primary w-100 mt-3" onClick={handleSeeUsers}>View Users</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaUsersCog size={40} className="text-success mb-3" />
                  <h5 className="card-title">Communities</h5>
                  <p className="card-text fs-4">{communityCount}</p>
                  <button className="btn btn-success w-100 mt-3" onClick={handleSeeCommunities}>
                    View Communities
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaClipboard size={40} className="text-warning mb-3" />
                  <h5 className="card-title">Reports</h5>
                  <p className="card-text fs-4">{reportCount}</p>
                  <button className="btn btn-warning w-100 mt-3" onClick={handleSeeReports}>View Reports</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card shadow-lg rounded-3 overflow-hidden" style={{ cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <FaClipboardList size={40} className="text-info mb-3" />
                  <h5 className="card-title">Posts</h5>
                  <p className="card-text fs-4">{postCount}</p>
                  <button className="btn btn-info w-100 mt-3" onClick={handleSeePosts}>View Posts</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .btn:hover {
            transform: scale(1.1);
          }
        `}
      </style>
      <Footer />
    </div>
  );
};

export default Dashboard;
