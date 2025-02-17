package com.blogs.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.blogs.dto.AddCommunityDto;
import com.blogs.dto.AddUserDto;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.CommunityResponseDto;
import com.blogs.dto.JoinCommunityDto;
import com.blogs.dto.UpdateCommunityDto;
import com.blogs.dto.UpdateUserDto;
import com.blogs.pojo.Community;
import com.blogs.services.CommunityService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/community")
@CrossOrigin(origins = "*")
public class CommunityController {
	
	@Autowired
	CommunityService communityService;
	
	
	@PostMapping("/add-community")
	public ApiResponse addCommunity(
	    @RequestParam("title") String title,
	    @RequestParam("description") String description,
	    @RequestParam("category") String category,
	    @RequestParam("profileImage") MultipartFile profileImage,
	    @RequestParam("owner_id") Long ownerId) {
	    
	    return communityService.addNewCommunity(title, description, category, profileImage, ownerId);
	}

	@PostMapping("/join")
	public ResponseEntity<ApiResponse> joinCommunity(@RequestBody JoinCommunityDto joinCommunityDto) {
	    ApiResponse response = communityService.joinCommunity(joinCommunityDto);
	    return ResponseEntity.ok(response);
	}


	@GetMapping("/get-all")
	public ResponseEntity<?> getAllCommunities() {
		
		return ResponseEntity.status(HttpStatus.OK).body(communityService.getAllCommunities());
	}
	
	@GetMapping("/search-community")
	public ResponseEntity<?> searchCommunity(@RequestParam("title") String title) {
	    System.out.println("Received Title: " + title);  // Debug log
	    return ResponseEntity.status(HttpStatus.OK).body(communityService.findByTitle(title));
	}

	
	@PutMapping("/delete-community")
	public ResponseEntity<?> deleteCommunity(@RequestParam("userId") Long communityId) {
	 
	    return ResponseEntity.status(HttpStatus.OK).body(communityService.deleteCommunity(communityId));
	}

	@PutMapping("/update-community")
	public ResponseEntity<?> updateCommunity(@RequestParam("communityId") Long CommunityId, @RequestBody UpdateCommunityDto updateCommunityDto) {
	    return ResponseEntity.status(HttpStatus.OK).body(communityService.updateCommunity(CommunityId, updateCommunityDto));
	}

	@GetMapping("/joined-communities")
	public ResponseEntity<List<CommunityResponseDto>> getJoinedCommunities(@RequestParam("userId") Long userId) {
	    List<CommunityResponseDto> joinedCommunities = communityService.getJoinedCommunities(userId);
	    return ResponseEntity.ok(joinedCommunities);
	}

	
	
}
