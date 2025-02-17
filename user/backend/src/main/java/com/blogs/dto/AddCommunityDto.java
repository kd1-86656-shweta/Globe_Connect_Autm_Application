package com.blogs.dto;

import com.blogs.enums.Category;
import com.blogs.enums.Status;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddCommunityDto {

    @NotEmpty(message = "Title cannot be empty")
    private String title;

    @NotEmpty(message = "Description cannot be empty")
    private String description;

    private Status status = Status.ACTIVE;
    
    private Category category;

    private Long ownerId;
}
