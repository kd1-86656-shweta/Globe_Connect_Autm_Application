package com.blogs.services;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.blogs.dao.CommunityDao;
import com.blogs.dao.UserDao;
import com.blogs.dto.AddCommunityDto;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.CommunityResponseDto;
import com.blogs.dto.JoinCommunityDto;
import com.blogs.dto.UpdateCommunityDto;
import com.blogs.enums.Category;
import com.blogs.enums.Status;
import com.blogs.pojo.Community;
import com.blogs.pojo.User;

@Service
@Transactional
public class CommunityServiceImpl implements CommunityService{

    @Autowired
    private ModelMapper mapper;
    
    @Autowired
    private CommunityDao communityDao;
    
    @Autowired
    private UserDao userDao;
    
    
/*================== ADD COMMUNITY =======================*/
    @Override
    public ApiResponse addNewCommunity(String title, String description, String category, MultipartFile profileImage, Long ownerId) {
        try {
            // Find the owner from the database using the ownerId passed from frontend
            User owner = userDao.findById(ownerId)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Convert image to byte[] 
            byte[] imageBytes = profileImage.getBytes();

            // Convert string category to enum value using fromString method
            Category communityCategory = Category.fromString(category);  // Use the new method

            // Create a new community and save it
            Community community = new Community();
            community.setTitle(title);
            community.setDescription(description);
            community.setCategory(communityCategory);  // Set the enum value here
            community.setOwner(owner);
            community.setCommunityImage(imageBytes);  // Save the image as byte array
            community.setStatus(Status.ACTIVE);

            communityDao.save(community);
            return new ApiResponse("Community created successfully with ID: " + community.getId());
        } catch (IOException e) {
            throw new RuntimeException("Error saving the image: " + e.getMessage());
        }
    }



/*================== GET ALL COMMUNITIES =======================*/
	
    @Override
    public List<CommunityResponseDto> getAllCommunities() {

        List<Community> communityList = communityDao.findAll();

        return communityList.stream()
            .map(community -> {
                CommunityResponseDto dto = new CommunityResponseDto();
                dto.setId(community.getId()); // Set ID
                dto.setTitle(community.getTitle());
                dto.setDescription(community.getDescription());
                dto.setStatus(community.getStatus());
                dto.setCategory(community.getCategory());
                dto.setOwnerId(community.getOwner().getId());

                // Convert byte[] to Base64 string
                if (community.getCommunityImage() != null) {
                    String base64Image = Base64.getEncoder().encodeToString(community.getCommunityImage());
                    dto.setProfileImage(base64Image);
                } else {
                    dto.setProfileImage(null);
                }

                return dto;
            })
            .collect(Collectors.toList());
    }

/*================ GET COMMUNITY BY TITLE ================= */

    @Override
    public CommunityResponseDto findByTitle(String title) {
        Optional<Community> optionalCommunity = communityDao.findByTitle(title);

        if (optionalCommunity.isPresent()) {
            Community community = optionalCommunity.get();
            CommunityResponseDto dto = mapper.map(community, CommunityResponseDto.class);

            // Convert image to Base64 if present
            if (community.getCommunityImage() != null) {
                dto.setProfileImage(Base64.getEncoder().encodeToString(community.getCommunityImage()));
            }

            dto.setPostCount(community.getPostList() != null ? community.getPostList().size() : 0);
            dto.setMembersCount(community.getMemberList() != null ? community.getMemberList().size() : 0);


            return dto;
        }
        return null;
    }
  
/*================ DELETE COMMUNITY (SOFT DELETE) ================= */
	
	@Override
	public ApiResponse deleteCommunity(Long communityId) {
		
		Optional<Community> optionalCommunity = communityDao.findById(communityId);
		
		if (optionalCommunity.isPresent()) {
	       
			Community community = optionalCommunity.get();
	       
			community.setStatus(Status.INACTIVE); 
	     
	        communityDao.save(community);
	        
	        return new ApiResponse("Community deleted successfully...!!!" + communityId);
	    } else {
	        return new ApiResponse("User not found...!!!" + communityId);
	    }
		
	}

	

/*================ UPDATE COMMUNITY ================= */
	
	@Override
	public ApiResponse updateCommunity(Long communityId, UpdateCommunityDto updateCommunityDto) {
		
		 Optional<Community> optionalCommunity = communityDao.findById(communityId);
		 
		 if(optionalCommunity.isPresent())
		 {
			 Community community = optionalCommunity.get();
			 
			 if(updateCommunityDto.getTitle() != null)
			 {
				 community.setTitle(updateCommunityDto.getTitle());
			 }
			 if(updateCommunityDto.getDescription() != null)
			 {
				 community.setTitle(updateCommunityDto.getTitle());
			 }
			 if(updateCommunityDto.getCommunityImage() != null)
			 {
				 community.setCommunityImage(updateCommunityDto.getCommunityImage());
			 }
			 
			 communityDao.save(community);
			
			 return new ApiResponse("Community updated successfully...!!! ID: " + communityId);
		 }
		 else 
		 {
			 return new ApiResponse("Community not found with provided ID...!!! ID: " + communityId);
		 }
		
	}
	
	
/*============================ JOIN COMMUNITY ======================*/
	
	
	@Override
	public ApiResponse joinCommunity(JoinCommunityDto joinCommunityDto) {
	    Long userId = joinCommunityDto.getUserId();
	    Long communityId = joinCommunityDto.getCommunityId();

	    User user = userDao.findById(userId)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    Community community = communityDao.findById(communityId)
	            .orElseThrow(() -> new RuntimeException("Community not found"));

	    // Check if the user is already a member
	    if (user.getCommunityList().contains(community)) {
	        return new ApiResponse("User is already a member of this community.");
	    }

	    // Add the community to the user's list
	    user.getCommunityList().add(community);
	    
	    // Save the user (which will update the join table)
	    userDao.save(user);

	    return new ApiResponse("User successfully joined the community.");
	}


	@Override
	public List<CommunityResponseDto> getJoinedCommunities(Long userId) {
	    User user = userDao.findById(userId)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    List<Community> joinedCommunities = user.getCommunityList();

	    return joinedCommunities.stream()
	        .map(community -> {
	            CommunityResponseDto dto = new CommunityResponseDto();
	            dto.setId(community.getId());
	            dto.setTitle(community.getTitle());
	            dto.setDescription(community.getDescription());
	            dto.setCategory(community.getCategory());
	            dto.setOwnerId(community.getOwner().getId());

	            // Convert image to Base64 if available
	            if (community.getCommunityImage() != null) {
	                dto.setProfileImage(Base64.getEncoder().encodeToString(community.getCommunityImage()));
	            }

	            return dto;
	        })
	        .collect(Collectors.toList());
	}

	
  
	
}
