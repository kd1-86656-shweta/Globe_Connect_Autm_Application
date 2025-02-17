package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CommunityDto;
import com.app.dto.PostDto;

import com.app.service.PostService;

@RestController
public class PostsController {
	private final PostService postService;

    // Constructor injection of ApiService
    @Autowired
    public PostsController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/posts")
    public List<PostDto> fetchExternalData() {
        System.out.println("I am at post get-all method");
        return postService.fetchAllPost();  // Fetch data from external API via service
    }

}
