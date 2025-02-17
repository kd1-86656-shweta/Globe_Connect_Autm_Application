package com.blogs.dto;

import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PostResponseDto {

	Long userId;
	Long communityId;
	Long postId;
	private String title;
	private String captions;
	private int commentsCount;
	private int countUpvote;
	private int countdownVote;
	private LocalDateTime createdOn;
	private LocalDateTime updatedOn;

}
