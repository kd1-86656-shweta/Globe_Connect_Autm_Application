package com.blogs.services;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.blogs.dto.*;
import com.blogs.pojo.User;

public interface UserService {

    ApiResponse addNewUser(AddUserDto user, MultipartFile profileImage);

    List<User> getAllUsers();
    
    User findUserByUsername(String userName);

    ApiResponse deleteUserById(Long userId);
    
    ApiResponse updateUser(Long userId, UpdateUserDto updateUserDto, MultipartFile profileImage); // Updated

    ApiResponse loginUser(LoginDto loginDto);
}
