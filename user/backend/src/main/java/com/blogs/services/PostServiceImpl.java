package com.blogs.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.blogs.dao.CommunityDao;
import com.blogs.dao.PostDao;
import com.blogs.dao.UserDao;
import com.blogs.dto.AddPostDto;
import com.blogs.dto.ApiResponse;
import com.blogs.dto.CommunityResponseDto;
import com.blogs.dto.PostResponseDto;
import com.blogs.dto.UpdatePostDto;
import com.blogs.enums.Status;
import com.blogs.pojo.Community;
import com.blogs.pojo.Post;
import com.blogs.pojo.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class PostServiceImpl implements PostService{

	@Autowired
	private ModelMapper mapper;

	@Autowired
	private PostDao postDao;
	
	@Autowired
	private CommunityDao communityDao;
	
	@Autowired
	private UserDao userDao;
	
/*======================= ADD POST =================================*/	
	
	@Override
	public ApiResponse addPost(Long userId, Long communityId, String title, String captions, MultipartFile image) {
	    Community community = communityDao.findById(communityId)
	            .orElseThrow(() -> new RuntimeException("Community not found"));

	    User user = userDao.findById(userId)
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    Post post = new Post();
	    post.setTitle(title);
	    post.setCaptions(captions);
	    post.setCommunity(community);
	    post.setPostUser(user);
	    
	    // Save Image URL if provided
	    if (image != null) {
	        String imageUrl = saveImage(image); // You need to implement this method to store and return the URL
	        post.setMediaUrl(imageUrl);
	    }

	    postDao.save(post);
	    return new ApiResponse("Post Added with post Id: " + post.getId());
	}

	// Dummy saveImage method, replace with actual logic
	private String saveImage(MultipartFile image) {
	    return "http://your-server.com/images/" + image.getOriginalFilename();
	}


/*====================== GET ALL POSTS =====================*/	

	
	@Override
	public List<PostResponseDto> getAllPosts() {
		
		 List<Post> postsList = postDao.findAll();
	     
	        List<PostResponseDto> postsResponseList = postsList.stream()
	            .map(post -> mapper.map(post, PostResponseDto.class))
	            .collect(Collectors.toList());
	        
	        return postsResponseList;
	}

/*======================= DELETE POST (SOFT DELETE) =================================*/	
	
	@Override
	public ApiResponse deletePost(Long postId) {
		
	    Optional<Post> optionalPost = postDao.findById(postId);
	    
	    if (optionalPost.isPresent()) {
	        Post post = optionalPost.get();
	        post.setStatus(Status.INACTIVE); 
	     
	        postDao.save(post);
	        
	        return new ApiResponse("Post deleted successfully...!!! ID: " + postId);
	    } else {
	        return new ApiResponse("Post not found...!!! ID: " + postId);
	    }
	}


	
/*======================= UPDATE POST =================================*/	
	
	@Override
	public ApiResponse updatePost(Long postId, UpdatePostDto updatePostDto) {
		
		Optional<Post> optionlPost = postDao.findById(postId);
		
		if(optionlPost.isPresent())
		{
			Post post = optionlPost.get();
			
			if(updatePostDto.getTitle() != null)
			{
				post.setTitle(updatePostDto.getTitle());
			}
			if(updatePostDto.getDescription() != null)
			{
				post.setCaptions(updatePostDto.getDescription());
			}
			
			postDao.save(post);
			
			return new ApiResponse("Post updated successfully...!!! ID: " + postId);
		}
		else
		{
			return new ApiResponse("Post not found with ID: " + postId);
		}
		
	}
	
	
	
}
