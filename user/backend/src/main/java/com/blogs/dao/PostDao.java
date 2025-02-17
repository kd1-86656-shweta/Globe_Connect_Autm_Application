package com.blogs.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blogs.pojo.Post;

public interface PostDao extends JpaRepository <Post,Long>{

}
