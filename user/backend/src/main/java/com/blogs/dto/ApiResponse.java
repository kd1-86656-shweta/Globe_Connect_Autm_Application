package com.blogs.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Base64;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class ApiResponse {
   
    private String message;
    private Long id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private String profileImage; // Store as Base64 string
    private String bio;
    private LocalDate dateOfBirth;
    private LocalDateTime createdAt;

    public ApiResponse(String message)
    {
    	this.message = message;
    }
    
    public ApiResponse(String message, Long id, String firstName, String lastName, String userName,
                       String email, byte[] profileImage, String bio, LocalDate dateOfBirth, LocalDateTime createdAt) {
        this.message = message;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.profileImage = profileImage != null ? Base64.getEncoder().encodeToString(profileImage) : null;
        this.bio = bio;
        this.dateOfBirth = dateOfBirth;
        this.createdAt = createdAt;
    }
}
