package com.blogs.services;

import java.util.List;

import com.blogs.pojo.Comment;

public interface CommentService {

    Comment addComment(Comment comment);

    List<Comment> getCommentsByPost(Long postId);

}