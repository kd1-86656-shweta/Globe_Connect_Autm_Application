package com.blogs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.blogs.dto.AddCommunityDto;
import com.blogs.dto.AddPostDto;
import com.blogs.dto.UpdateCommunityDto;
import com.blogs.dto.UpdatePostDto;
import com.blogs.services.PostService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "*")
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("/add-post")
	public ResponseEntity<?> addPost(@RequestParam("userId") Long userId,
	                                 @RequestParam("communityId") Long communityId,
	                                 @RequestParam("title") String title,
	                                 @RequestParam(value = "captions", required = false) String captions,
	                                 @RequestParam(value = "image", required = false) MultipartFile image) {
	    return ResponseEntity.status(HttpStatus.CREATED).body(postService.addPost(userId, communityId, title, captions, image));
	}

	@GetMapping("/get-all")
	public ResponseEntity<?> getAllPosts() {
		
		return ResponseEntity.status(HttpStatus.OK).body(postService.getAllPosts());
	}
	
	
	@PutMapping("/delete-post")
	public ResponseEntity<?> deletPost(@RequestParam("postId") Long postId) {
	 
	    return ResponseEntity.status(HttpStatus.OK).body(postService.deletePost(postId));
	}
	
	@PutMapping("/update-post")
	public ResponseEntity<?> updatePost(@RequestParam("postId") Long postId, @RequestBody UpdatePostDto updatePostDto) {
	    return ResponseEntity.status(HttpStatus.OK).body(postService.updatePost(postId, updatePostDto));
	}

	
	
}
