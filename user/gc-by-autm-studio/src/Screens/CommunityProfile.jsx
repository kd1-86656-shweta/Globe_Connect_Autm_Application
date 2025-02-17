import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import PostBlock from '../Components/Post/PostBlock';
import { getJoinedCommunities, joinCommunity } from '../Services/Community';
import { toast } from 'react-toastify';
import axios from 'axios';
import './CommunityProfile.css';

const CommunityProfile = () => {
    const { title } = useParams(); // Get community title from URL
    const [community, setCommunity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isMember, setIsMember] = useState(false);
    const userId = sessionStorage.getItem("userId"); // Get logged-in user ID

    useEffect(() => {
        const fetchCommunity = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/community/search-community?title=${encodeURIComponent(title)}`);
                setCommunity(response.data);

                if (userId) {
                    const joinedCommunities = await getJoinedCommunities(userId);
                    setIsMember(joinedCommunities.some(com => com.communityId === response.data.id));
                }
            } catch (error) {
                console.error("Error fetching community:", error);
                toast.error("Failed to fetch community details.");
            } finally {
                setLoading(false);
            }
        };

        if (title) {
            fetchCommunity();
        }
    }, [title, userId]);

    const handleJoinCommunity = async () => {
        if (!userId) {
            toast.warn("Please log in to join the community.");
            return;
        }

        const requestData = {
            userId: Number(userId),
            communityId: community.id
        };

        const response = await joinCommunity(requestData);

        if (response?.message) {
            toast.success(response.message);
            setIsMember(true); // Update UI after joining
        } else {
            toast.error("Failed to join the community.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!community) return <p>Community not found</p>;

    return (
        <>
            <NavBar />
            <div className="profileMainHolder">
                <h2 style={{ textAlign: "center", fontSize: "5vh" }}>{community.title}</h2>
                <div className="userInfoHolder">
                    <div className="profileHolder">
                        <div className="profileImageHolder">
                            <img 
                                src={community.profileImage ? `data:image/png;base64,${community.profileImage}` : "https://via.placeholder.com/100"} 
                                alt={community.title} 
                            />
                        </div>
                        <div className="userNameAndDescHolder">
                            <h4>{community.title}</h4>
                            <p>{community.description || "No description available"}</p>
                            <div className="statsHolder">
                                <p><b>{community.postCount || 0}</b> Posts</p>
                                <p><b>{community.membersCount || 0}</b> Community Members</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleJoinCommunity} disabled={isMember}>
                        {isMember ? "Already a Member" : "Join Community"}
                    </button>
                </div>

                <hr style={{ width: "90vw" }} />
                <h2 style={{ padding: "5vh 0 0 5vw" }}>Recent Posts</h2>
                <div className="postsHolder">
                    <PostBlock />
                </div>
            </div>
        </>
    );
};

export default CommunityProfile;
