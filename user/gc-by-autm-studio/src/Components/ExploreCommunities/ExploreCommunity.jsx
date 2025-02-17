import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { createUrl } from '../../utils';
import './ExploreCommunity.css';

const ExploreCommunity = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        profileImage: null,
    });

    const communityGrid = () => {
        navigate('/explore-communities');
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const ownerId = sessionStorage.getItem('userId'); // Assuming the user ID is saved in sessionStorage
    
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('category', formData.category); // Send the enum value here
        formDataToSend.append('profileImage', formData.profileImage);
        formDataToSend.append('owner_id', ownerId);  // Add owner_id from session storage
    
        try {
            const response = await axios.post(createUrl('community/add-community'), formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success(response.data.message);
            setShowForm(false);
        } catch (error) {
            toast.error('Error creating community');
        }
    };
    

    return (
        <>
            <div className="mainCommunityExplorer">
                <h2>Explore Communities</h2>
                <p>Create or join a community and start sharing your ideas</p>

                <div className="exploreCommunityButtonHolder">
                    <button onClick={() => setShowForm(true)}>Create Community</button>
                    <button onClick={communityGrid}>Join Community</button>
                </div>
            </div>

            {showForm && (
                <div className="communityFormOverlay">
                    <div className="communityFormContainer">
                        <h3>Create a New Community</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="formField">
                                <label htmlFor="title">Community Name:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleFormChange}
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="category">Content Type:</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleFormChange}
                                    required
                                >
                                    <option value="">Select a type</option>
                                    <option value="SCIENCE_AND_TECHNOLOGY">Science & Technology</option>
                                    <option value="SPORTS">Sports</option>
                                    <option value="NEWS">News</option>
                                    <option value="HUMANITIES">Humanities</option>
                                    <option value="FINANCE">Finance</option>
                                </select>
                            </div>

                            <div className="formField">
                                <label htmlFor="profileImage">Profile Image:</label>
                                <input
                                    type="file"
                                    id="profileImage"
                                    name="profileImage"
                                    onChange={handleFileChange}
                                    required
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleFormChange}
                                    placeholder="Describe your community..."
                                    rows="4"
                                    required
                                />
                            </div>

                            <div className="formButtons">
                                <button type="submit">Create</button>
                                <button type="button" onClick={() => setShowForm(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ExploreCommunity;
