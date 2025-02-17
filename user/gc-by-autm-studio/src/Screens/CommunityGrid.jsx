import './CommunityGrid.css';
import NavBar from '../Components/NavBar/NavBar';
import { getCommunities, getJoinedCommunities, joinCommunity } from '../Services/Community';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const CommunityGrid = () => {
    /*====================== STATE & SESSION STORAGE ===================== */
    const [community, setCommunity] = useState([]);
    const [joinedCommunities, setJoinedCommunities] = useState([]);

    const userId = sessionStorage.getItem('userId'); // Get logged-in user ID

    /*====================== GET ALL COMMUNITIES API CALL ===================== */
    const onLoadCommunity = async () => {
        const result = await getCommunities();

        if (result != null) {
            setCommunity(result);
            console.log("result: " + JSON.stringify(result));
        } else {
            toast.warn("Error Occurred on Our Side");
        }
    };

    useEffect(() => {
        onLoadCommunity();
    }, []);

    /*====================== JOIN COMMUNITY FUNCTION ===================== */
    const handleJoinCommunity = async (communityId) => {
        if (!userId) {
            toast.warn("User not logged in.");
            return;
        }
    
        const requestData = {
            userId: Number(userId), // Ensure it's a number
            communityId: communityId
        };
    
        const response = await joinCommunity(requestData);
    
        if (response?.message) {
            toast.success(response.message);
            setJoinedCommunities([...joinedCommunities, communityId]);
    
            // Remove the joined community from state
            setCommunity(community.filter(comnyt => comnyt.id !== communityId));
        } else {
            toast.error("Failed to join community.");
        }
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const communities = await getCommunities();
            setCommunity(communities || []);
    
            if (userId) {
                const joined = await getJoinedCommunities(userId);
                setJoinedCommunities(joined.map(com => com.communityId));
            }
        };
    
        fetchData();
    }, [userId]); // Runs only when userId changes
    


    useEffect(() => {
        const fetchJoinedCommunities = async () => {
            if (!userId) return;
            const joined = await getJoinedCommunities(userId);
            setJoinedCommunities(joined.map(com => com.communityId));
        };
    
        onLoadCommunity();
        fetchJoinedCommunities();
    }, []);
    

    return (
        <div className='communityPageMainContainer'>
            <NavBar />

            <div className='topHeading'>
                <h2>Creators<br /> Hub</h2>
                <p>This community is awesome. Proud of all of them.</p>
            </div>

            <div className='cardsContainer'>
                <div className='cardHolder'>
                    {community
                        .filter(comnyt => !joinedCommunities.includes(comnyt.id)) // Hide joined communities
                        .map((comnyt) => {
                            const profileImageSrc = comnyt.profileImage
                                ? `data:image/png;base64,${comnyt.profileImage}`
                                : 'https://via.placeholder.com/150';

                            return (
                                <div className='card' key={comnyt.id}>
                                    <img src={profileImageSrc} alt="Community" />
                                    <div className='cardTop'>
                                        <h2>{comnyt.title}</h2>
                                        <p>@{comnyt.category}</p>
                                    </div>
                                    <div className='cardMiddle'>
                                        <p>Members: </p>
                                        <p>192</p>
                                    </div>
                                    <hr style={{ width: "90%", border: "1px solid #353636", background: "#353636" }} />

                                    <div className='cardBottom'>
                                        <p><b>About: </b></p>
                                        <p>{comnyt.description}</p>
                                    </div>

                                    <div className='buttonHolder'>
                                        <button onClick={() => handleJoinCommunity(comnyt.id)}>Join</button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CommunityGrid;
