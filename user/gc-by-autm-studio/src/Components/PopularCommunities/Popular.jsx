import { Link } from 'react-router-dom';
import './Popular.css';
import { getCommunities } from '../../Services/Community';
import { useEffect, useState } from 'react';

const Popular = () => {
    const [communities, setCommunities] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
            const result = await getCommunities();
            if (result) {
                setCommunities(result);
            }
        };

        fetchCommunities();
    }, []);

    return (
        <div className="popularHolder">
            <h2>Top Communities</h2>
            <div className="communitiesNameHolder">
                {communities.map((community) => {
                    const profileImageSrc = community.profileImage
                        ? `data:image/png;base64,${community.profileImage}`
                        : 'https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/poster/c/t/i/large-shinchan-flex-poster-for-room-mo-2485-24x36-flex-bd-original-image2t9wt62reyg.jpeg?q=90&crop=false'; // Default image

                    return (
                        <Link
                            key={community.id}
                            to={`/community-profile/${encodeURIComponent(community.title)}`}
                            style={{ color: "#dbdbdb", textDecoration: "none" }}
                        >
                            <div className="communityItem">
                                <img src={profileImageSrc} alt={community.title} />
                                <span>{community.title}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
