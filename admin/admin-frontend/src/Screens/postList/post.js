import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import { getPostData } from '../../services/post';
import { toast } from 'react-toastify';
import Footer from '../../Components/Footer';
import { FaTrashAlt } from 'react-icons/fa'; // Icon for delete button

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching post data on component mount
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postResponse = await getPostData(sessionStorage.getItem('token'));
        setPostList(postResponse);
      } catch (error) {
        toast.error('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, []);

  // Handle post deletion
  const handleDeletePost = (postId) => {
    // Logic for deleting the post
    setPostList(postList.filter(post => post.postId !== postId));
    toast.success('Post deleted successfully');
  };

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4 text-center">Post List</h2>
        <table className="table table-bordered">
          <thead>
            <tr className="table-dark">
              <th>Post Title</th>
              <th>Captions</th>
              <th>Comments Count</th>
              <th>Upvotes</th>
              <th>Downvotes</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post) => (
              <tr key={post.postId}>
                <td>{post.title}</td>
                <td>{post.captions}</td>
                <td>{post.commentsCount}</td>
                <td>{post.countUpvote}</td>
                <td>{post.countdownVote}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletePost(post.postId)}
                  >
                    <FaTrashAlt size={20} />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
      <Footer />

      <style>
        {`
          .table {
            background-color:rgb(116, 166, 209); /* Light aqua blue background */
            border-radius: 10px;
            border: none;
          }

          .table-dark th {
            background-color:rgb(30, 231, 238); /* Aqua blue background for header */
            color: white;
          }

          .btn-danger {
            background-color: #f44336; /* Red background for delete button */
            border-color: #f44336;
            color: white;
          }

          .btn-danger:hover {
            background-color: #d32f2f; /* Darker red for hover effect */
            border-color: #d32f2f;
          }

          .table-row {
            background-color: #b2f0ff; /* Light aqua blue for rows */
          }

          .table-row:hover {
            background-color: #80d8d7; /* Darker aqua blue for hover effect */
          }

          .btn {
            transition: background-color 0.3s, transform 0.2s ease-in-out;
          }

          .btn:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Posts;
