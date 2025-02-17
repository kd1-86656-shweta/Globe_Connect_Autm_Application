import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { updateUserProfile } from '../Services/User'; // Assuming this is the function that calls the backend
import './UserProfile.css';

const UserProfile = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        username: sessionStorage.getItem("userName") || "Guest",
        firstName: sessionStorage.getItem("firstName") || "",
        lastName: sessionStorage.getItem("lastName") || "",
        email: 'suyash@example.com',
        password: '',
        profilePicture: sessionStorage.getItem("profileImage"),
    });

    const [profileContent, setProfileContent] = useState({
        username: sessionStorage.getItem("userName") || "Guest",
        name: `${sessionStorage.getItem("firstName")} ${sessionStorage.getItem("lastName")}` || "Suyash Surve",
        email: "suyash@example.com",
        profilePicture: sessionStorage.getItem("profileImage") || "https://via.placeholder.com/150",
    });

    useEffect(() => {
        setProfileContent(prev => ({
            ...prev,
            username: formData.username,
            name: `${formData.firstName} ${formData.lastName}`,
            profilePicture: formData.profilePicture,
        }));
    }, [formData]);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] }); 
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateUserProfile(formData);
            if (response.message === 'User updated successfully...!!!'+sessionStorage.getItem("userId")) {
                setProfileContent({
                    username: formData.username,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    profilePicture: formData.profilePicture || profileContent.profilePicture,
                });
                setShowForm(false);
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile');
            }
        } catch (error) {
            alert('An error occurred while updating profile');
        }
    };
    

    return (
        <>
            <NavBar />
            <div className="profileMainHolder">
                <h2 style={{ textAlign: "center" }}>{profileContent.username}</h2>
                <div className="userInfoHolder">
                    <div className="profileHolder">
                        <div className="profileImageHolder">
                            <img src={profileContent.profilePicture} alt="Profile" />
                        </div>
                        <div className="userNameAndDescHolder">
                            <h4>{profileContent.name}</h4>
                            <p>I am because he is</p>
                            <div className="statsHolder">
                                <p><b>3</b> Posts</p>
                                <p><b>4</b> Communities Joined</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setShowForm(true)}>Edit Profile</button>
                </div>

                <hr style={{ width: "90vw" }} />
                <h2 style={{ padding: "5vh 0 0 5vw" }}>Recent Posts</h2>
                <div className="postsHolder">
                    <div className="recentPosts">
                        <p><b>12/01/2025</b></p>
                        <p>Transitioning from Python to C++ can be challenging due to differences in syntax, memory management, and object-oriented concepts</p>
                    </div>
                </div>
            </div>

            {showForm && (
                <div className="profileEditOverlay" style={{zIndex:10000000000}}>
                    <div className="profileEditContainer">
                        <h3>Edit Profile</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="formField">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div className="formField">
                                <label htmlFor="profilePicture">Profile Picture:</label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                            </div>

                            <div className="formButtons">
                                <button type="submit">Save Changes</button>
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

export default UserProfile;
