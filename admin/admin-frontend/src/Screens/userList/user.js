import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar';
import { getUserData } from '../../services/user';
import { toast } from 'react-toastify';
import { FaTrashAlt } from 'react-icons/fa'; // Icon for delete button

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await getUserData(sessionStorage.getItem('token'));
        setUserList(userResponse);
      } catch (error) {
        toast.error('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    // Logic for deleting the user
    // For now, we'll just remove it from the local state
    setUserList(userList.filter(user => user.id !== userId));
    toast.success('User deleted successfully');
  };

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2 className="mb-4 text-center">User List</h2>
        <table className="table table-bordered">
          <thead>
            <tr className="table-dark">
              <th>Email</th>
              <th>User Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.user_name || 'Not provided'}</td>
                <td>{user.first_name || 'First Name not provided'}</td>
                <td>{user.last_name || 'Last Name not provided'}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
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

      <style>
        {`
          .table {
            background-color: #f4f9fc;
            border-radius: 10px;
            border: none;
          }

          .table-dark th {
            background-color: #1e3d58; /* Blue background for header */
            color: white;
          }

          .btn-danger {
            background-color: #e74c3c;
            border-color: #e74c3c;
            color: white;
          }

          .btn-danger:hover {
            background-color: #c0392b;
            border-color: #c0392b;
          }
        `}
      </style>
    </div>
  );
};

export default Users;
