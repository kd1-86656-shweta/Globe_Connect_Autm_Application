package com.blogs.services;
import com.blogs.dto.*;
import com.blogs.enums.Status;
import com.blogs.pojo.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.blogs.dao.UserDao;
import com.blogs.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserDao userDao;
	
/*=================== ADD USER ====================*/
	
	@Override
	public ApiResponse addNewUser(AddUserDto userDto, MultipartFile profileImage) {
	    User user = mapper.map(userDto, User.class);

	    // Save image as byte array
	    if (profileImage != null && !profileImage.isEmpty()) {
	        try {
	            user.setProfileImage(profileImage.getBytes());
	        } catch (IOException e) {
	            return new ApiResponse("Error processing image: " + e.getMessage());
	        }
	    }

	    User savedUser = userDao.save(user);
	    return new ApiResponse("User added successfully with ID: " + savedUser.getId());
	}


/*=================== GET ALL USERS ====================*/
	
	@Override
	public List<User> getAllUsers() {
		
		List<User> usersList = userDao.findAll();
		
		for (User user : usersList) {
			System.out.println(user.toString());
		}
		
		return usersList;
	}

/*=================== FIND USER BY USER_NAME====================*/
	
	@Override
	public User findUserByUsername(String userName) {
		
		List<User> usersList = userDao.findAll();
		User user;
		for (User u : usersList) {
			System.out.println(u.getUserName());
			if(u.getUserName().equals(userName))
			{
				return u;
			}
		}
		
		return null;
	}

/*=================== DELETE USER BY ID ====================*/
	
	@Override
	public ApiResponse deleteUserById(Long userId) {
	    
		// Optional because it'll avoid null pointer exception in case user not found
	    Optional<User> optionalUser = userDao.findById(userId);
	    
	    if (optionalUser.isPresent()) {
	        User user = optionalUser.get();
	        user.setStatus(Status.INACTIVE); 
	     
	        userDao.save(user);
	        
	        return new ApiResponse("User deleted successfully...!!!" + userId);
	    } else {
	        return new ApiResponse("User not found...!!!" + userId);
	    }
	}

	/*=================== UPDATE USER ====================*/
	@Override
	public ApiResponse updateUser(Long userId, UpdateUserDto updateUserDto, MultipartFile profileImage) {
	    // Find user by ID
	    Optional<User> optionalUser = userDao.findById(userId);
	    
	    System.out.println(updateUserDto.toString());
	    
	    if (optionalUser.isPresent()) {
	        User user = optionalUser.get();
	        
	        if (updateUserDto.getEmail() != null) {
	            user.setEmail(updateUserDto.getEmail());
	        }
	        
	        if (updateUserDto.getFirstName() != null) {
	            user.setFirstName(updateUserDto.getFirstName());
	        }
	        
	        if (updateUserDto.getLastName() != null) {
	            user.setLastName(updateUserDto.getLastName());
	        }
	        
	        if (updateUserDto.getPassword() != null) {
	            user.setPassword(updateUserDto.getPassword());
	        }
	        
	        if (updateUserDto.getUserName() != null) {
	            user.setUserName(updateUserDto.getUserName());
	        }
	        
	        if (profileImage != null && !profileImage.isEmpty()) {
	            try {
	                user.setProfileImage(profileImage.getBytes());  // Handle profile image update
	            } catch (IOException e) {
	                return new ApiResponse("Error processing image: " + e.getMessage());
	            }
	        }
	        	
	        userDao.save(user);
	        
	        return new ApiResponse("User updated successfully...!!!" + userId);
	        
	    } else {
	        return new ApiResponse("User not found...!!!" + userId);
	    }
	}


	@Override
	public ApiResponse loginUser(LoginDto loginDto) {
	    List<User> usersList = userDao.findAll();

	    System.out.println("Attempting to log in with: " + loginDto.getEmail() + " | " + loginDto.getPassword());

	    for (User user : usersList) {
	        System.out.println("Checking user: " + user.getEmail() + " | " + user.getPassword());

	        if (user.getEmail().trim().equalsIgnoreCase(loginDto.getEmail().trim()) &&
	            user.getPassword().trim().equals(loginDto.getPassword().trim())) {

	            return new ApiResponse(
	                "Login Successful",
	                user.getId(),
	                user.getFirstName(),
	                user.getLastName(),
	                user.getUserName(),
	                user.getEmail(),
	                user.getProfileImage(),  // Profile image URL (or Base64 if needed)
	                user.getBio(),
	                user.getDob(),
	                user.getCreatedOn()
	            );
	        }
	    }

	    return new ApiResponse("Invalid Credentials");
	}

	

}
