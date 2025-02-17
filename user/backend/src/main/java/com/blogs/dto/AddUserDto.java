package com.blogs.dto;

import org.springframework.web.multipart.MultipartFile;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddUserDto {
    private String firstName;
    private String lastName;
    private String email;
    private String userName;
    private String password;
    private MultipartFile profileImage;  // New field
}
