package com.blogs.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blogs.dao.CommentDao;
import com.blogs.dao.PostDao;
import com.blogs.dao.UserDao;
import com.blogs.pojo.Comment;
import com.blogs.pojo.Post;
import com.blogs.pojo.User;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentDao commentDao;

    @Autowired
    private PostDao postDao;

    @Autowired
    private UserDao userDao;

    @Override
    public List<Comment> getCommentsByPost(Long postId) {
        return commentDao.findByPostId(postId);
    }

    @Override
    @Transactional
    public Comment addComment(Comment comment) {
        if (comment.getUser() == null || comment.getUser().getId() == null) {
            throw new IllegalArgumentException("User ID is required");
        }

        if (comment.getPost() == null || comment.getPost().getId() == null) {
            throw new IllegalArgumentException("Post ID is required");
        }

        // Fetch the user from the database
        Optional<User> userOpt = userDao.findById(comment.getUser().getId());
        if (!userOpt.isPresent()) {
            throw new IllegalArgumentException("User not found with ID: " + comment.getUser().getId());
        }

        // Fetch the post from the database
        Optional<Post> postOpt = postDao.findById(comment.getPost().getId());
        if (!postOpt.isPresent()) {
            throw new IllegalArgumentException("Post not found with ID: " + comment.getPost().getId());
        }

        // Set the user and post correctly
        comment.setUser(userOpt.get());
        comment.setPost(postOpt.get());

        // Save the comment to the database
        return commentDao.save(comment);
    }
}