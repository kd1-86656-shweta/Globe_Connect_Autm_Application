package com.blogs.dto;

import com.blogs.enums.Status;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AddPostDto {
    private Long userId;
    private Long communityId;

    @NotEmpty(message = "Title cannot be empty")
    private String title;

    @NotEmpty(message = "Description cannot be empty")
    private String captions;

    private Status status = Status.ACTIVE;
}
