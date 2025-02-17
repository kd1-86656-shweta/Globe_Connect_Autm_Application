package com.blogs.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blogs.pojo.Comment;

public interface CommentDao extends JpaRepository<Comment, Long> {

    List<Comment> findByPostId(Long postId);
}