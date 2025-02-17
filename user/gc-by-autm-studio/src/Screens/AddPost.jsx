import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./AddPost.css";

const AddPost = () => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [communities, setCommunities] = useState([]);
    const [selectedCommunity, setSelectedCommunity] = useState("");
    const navigate = useNavigate();

    // Fetch userId from session storage
    const userId = sessionStorage.getItem("userId");

    // Fetch communities
    useEffect(() => {
        axios.get("http://localhost:8080/community/get-all")
            .then(response => setCommunities(response.data))
            .catch(error => console.error("Error fetching communities:", error));
    }, []);

    const addPost = async () => {
        if (!content && !image) {
            toast.warn("Please type something or attach an image before submitting!");
            return;
        }

        if (!selectedCommunity) {
            toast.warn("Please select a community!");
            return;
        }

        const formData = new FormData();
        formData.append("userId", userId);
        formData.append("communityId", selectedCommunity);
        formData.append("title", content);
        if (image) formData.append("image", image);

        try {
            const response = await axios.post("http://localhost:8080/posts/add-post", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (response.status === 201) {
                toast.success("Posted Content Successfully!");
                navigate("/home");
            }
        } catch (error) {
            console.error("Error adding post:", error);
            toast.error("Failed to add post.");
        }
    };

    return (
        <>
            <div className="addPostMainHolder">
                <textarea
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your thoughts..."
                ></textarea>
            </div>

            <div className="addPostFlexHolder">
                {/* Community Selection Dropdown */}
                <select value={selectedCommunity} onChange={(e) => setSelectedCommunity(e.target.value)} required>
                    <option value="">Select Community</option>
                    {communities.map((c) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>

                <div className="uploadIconsHolder">
                    <label>
                        <input type="file" accept="image/*" hidden onChange={(e) => setImage(e.target.files[0])} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="uploadIcon"
                        >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="17 8 12 3 7 8" />
                            <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        <p>Image</p>
                    </label>
                </div>

                <div className="postButtonHolder">
                    <button onClick={addPost}>Post</button>
                </div>
            </div>
        </>
    );
};

export default AddPost;
