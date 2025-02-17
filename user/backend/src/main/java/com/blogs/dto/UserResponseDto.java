package com.blogs.dto;

import com.blogs.enums.Category;
import com.blogs.enums.Status;

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
public class UserResponseDto {
	
	    private Long id;  
	    private String email;
	    private String first_name;
	    private String last_name;
	    private String user_name;  
}
