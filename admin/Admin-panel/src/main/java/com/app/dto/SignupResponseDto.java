package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//DTO :  resp DTO : to send API resp from rest server ---> rest clnt
@NoArgsConstructor
@Getter
@Setter
public class SignupResponseDto {
	private String status;
	private LocalDateTime timeStamp;
	private String message;
	public SignupResponseDto(String message) {
		this.status="success";
		this.message = message;
		this.timeStamp=LocalDateTime.now();
	}
	
}
