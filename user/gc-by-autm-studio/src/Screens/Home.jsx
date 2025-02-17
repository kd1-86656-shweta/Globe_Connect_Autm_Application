import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ExploreCommunity from "../Components/ExploreCommunities/ExploreCommunity";
import NavBar from "../Components/NavBar/NavBar";
import Popular from "../Components/PopularCommunities/Popular";
import PostBlock from "../Components/Post/PostBlock";
import addPostImg from "../Images/add.png";
import mostLiked from "../Images/favorite.png";
import AddPost from "../Screens/AddPost"; 
import { getPosts } from "../Services/Post"

import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    // const [posts, setPosts] = useState([]);
    const [isAddPostOpen, setIsAddPostOpen] = useState(false); // New state for popup
    const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

    const toggleAddPostPopup = () => {
        setIsAddPostOpen((prev) => !prev);
    };
 // Toggle theme and save to session storage
    const toggleTheme = () => {
        setIsDarkMode((prev) => {
            sessionStorage.setItem("isDarkMode", !prev);
            return !prev;
        });
    };
    useEffect(() => {
        // Sync theme on mount
        const currentTheme = sessionStorage.getItem("isDarkMode") === "true";
        setIsDarkMode(currentTheme);
    }, []);


  /*====================== GET ALL POSTS API CALL ===================== */

  const [posts, setPosts] = useState([])

  const onLoadPosts = async () => {
      const result = await getPosts();
      
      if (result != null) {
          setPosts(result);
        //   console.log("result: " + JSON.stringify(result));
      }
      else {
          toast.warn("Error Occurred on Our Side");
      }

  }

  useEffect(() => {
      return () => {
          onLoadPosts();
      }
  }, [])


    return (
        <div className={isDarkMode ? "light-theme" : "dark-theme"}>
            <div className="topMenuHolder">
                <NavBar />
            </div>
            <div className="mainSection">
                <div className="homePageMainContent">
                    <div className="filterHolder">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24px"
                                height="24px"
                            >
                                <path d="M3 12L12 3l9 9" />
                                <path d="M9 21V12h6v9" />
                                <path d="M4 21h16" />
                            </svg>
                            Home
                        </button>
                        <button >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24px"
                                height="24px"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            Popular
                        </button>
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24px"
                                height="24px"
                            >
                                <circle cx="12" cy="8" r="4" />
                                <path d="M16 20H8c-2.67 0-4-1.33-4-4v-1c0-2.67 1.33-4 4-4h8c2.67 0 4 1.33 4 4v1c0 2.67-1.33 4-4 4z" />
                            </svg>
                            <Link to='/user-profile' style={{color:"#dbdbdb", textDecoration:"none"}}>My Profile</Link>
                        </button>
                        <button onClick={toggleAddPostPopup}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24px"
                                height="24px"
                            >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <line x1="12" y1="8" x2="12" y2="16" />
                                <line x1="8" y1="12" x2="16" y2="12" />
                            </svg>
                            Add Post
                        </button>
                        {/* Theme Toggle */}
                        <button onClick={toggleTheme}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24px"
                                height="24px"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                            Theme
                        </button>
                    </div>

                    <div className="mainHomePagePostsHolder">
                        
                    {
                        posts.map((post) => {
                            return (
                                 <PostBlock
                                    postId={post.postId}
                                    content={post.captions}
                                    title={post.title}
                                    like={post.countUpvote}
                                    dislike={post.countdownVote}
                                    comment={post.commentsCount}
                                    postedOn={post.createdOn}
                                />
                        )
                    })
                    }
                        
                        {/* <PostBlock /> */}
                        {/* <PostBlock />
                        <PostBlock /> */}
                    </div>

                    <div className="rightSideMainHolder">
                        <ExploreCommunity />
                        <Popular />
                    </div>
                </div>
            </div>

            {/* Popup for Add Post */}
            {isAddPostOpen && (
                <div className="popupOverlay" onClick={toggleAddPostPopup}>
                    <div
                        className="popupContent"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        <AddPost />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
