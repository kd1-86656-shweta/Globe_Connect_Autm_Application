package com.blogs.dto;

import com.blogs.enums.Category;
import com.blogs.enums.Status;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CommunityResponseDto {

    private Long id;  // Added community ID
    private String title;
    private String description;
    private Status status;
    private Category category;
    private int postCount;  
    private int membersCount;  
    private Long ownerId;
    private String profileImage; // Will store Base64-encoded string

}
