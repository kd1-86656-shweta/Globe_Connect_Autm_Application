package com.blogs.services;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.blogs.dto.AddCommunityDto;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.CommunityResponseDto;
import com.blogs.dto.JoinCommunityDto;
import com.blogs.dto.UpdateCommunityDto;
import com.blogs.pojo.Community;

public interface CommunityService {
	
//	ApiResponse addNewCommunity(AddCommunityDto community);

	List<CommunityResponseDto> getAllCommunities();

	CommunityResponseDto findByTitle(String title);

	ApiResponse deleteCommunity(Long communityId);

	ApiResponse updateCommunity(Long communityId, UpdateCommunityDto updateCommunityDto);

//	ApiResponse addNewCommunity(String title, String description, String category, MultipartFile profileImage) throws IOException;

	ApiResponse addNewCommunity(String title, String description, String category, MultipartFile profileImage,
			Long ownerId);
	
//	ApiResponse joinCommunity(Long userId, Long communityId);

	ApiResponse joinCommunity(JoinCommunityDto joinCommunityDto);

	List<CommunityResponseDto> getJoinedCommunities(Long userId);

	

}
