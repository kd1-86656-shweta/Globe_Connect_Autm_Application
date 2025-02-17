package com.app.dto;

import java.time.LocalDate;

import org.hibernate.validator.constraints.Range;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminDto extends BaseDTO {
	@NotEmpty
	
	private String email;
	@NotEmpty
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;
	@NotEmpty
	private String userName;
	

}
