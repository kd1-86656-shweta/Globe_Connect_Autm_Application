import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react'; // For close icon
import './CommentModal.css';

const CommentModal = ({ postId, onClose }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        console.log("Fetching comments for postId:", postId);
        const fetchComments = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/comments/post/${postId}`);
                if (res.ok) {
                    const data = await res.json();
                    setComments(data);
                } else {
                    console.error("Error fetching comments:", await res.text());
                }
            } catch (err) {
                console.error("Error fetching comments:", err);
            }
        };

        fetchComments();
    }, [postId]);

    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;
        const userId = sessionStorage.getItem("userId");

        if (!userId) {
            console.error("User ID is missing. Please log in.");
            alert("You must be logged in to comment.");
            return;
        }
        
        const commentData = {
            comment: newComment,
            post: { id: postId },
            user: { id: parseInt(userId) } // Ensure it's sent as a number
        };
    
        try {
            const res = await fetch("http://localhost:8080/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(commentData)
            });
    
            if (res.ok) {
                const savedComment = await res.json();
                setComments([...comments, savedComment]);
                setNewComment("");
                onClose(); // Close modal after posting comment
            } else {
                console.error("Error adding comment:", await res.text());
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="commentModal">
            <div className="commentModalContent">
                <div className="modalHeader">
                    <h2>Comments</h2>
                    <X size={24} className="closeIcon" onClick={onClose} />
                </div>

                <div className="commentsList">
                    {comments.length > 0 ? (
                        comments.map((c, index) => (
                            <p key={index}><strong>{c.user?.username || "Anonymous"}:</strong> {c.comment}</p>
                        ))
                    ) : (
                        <p className="noComments">No comments yet.</p>
                    )}
                </div>

                <div className="commentInputContainer">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                    />
                    <button className="postButton" onClick={handleCommentSubmit}>Post</button>
                </div>
            </div>
        </div>
    );
};

export default CommentModal;
