package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthRequest;
import com.app.dto.SignupResponseDto;
import com.app.dto.AdminDto;
import com.app.dto.AdminRespDto;
import com.app.security.JwtUtils;
import com.app.service.AdminService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
@RequestMapping("/admin")
public class AdminSignInSignUpController {
	// depcy for user's sign up
	@Autowired
	private AdminService userService;
	// depcy for user's sign in
	@Autowired
	private AuthenticationManager authenticationManager;
	// depcy Jwt Utils
	@Autowired
	private JwtUtils jwtUtils;

	
	@PostMapping("/signup")
	public ResponseEntity<?> signUpUser(@RequestBody @Valid AdminDto dto) {
		System.out.println("in user sign up");
		AdminDto resp = userService.signupUser(dto);
		System.out.println("i am here!!");
		return ResponseEntity.status(HttpStatus.CREATED).body(new SignupResponseDto("Registration successfull!!"));
	}

	
	
	
	
	
	
	 
	
	@PostMapping("/signin")
	@Operation(description = "User Sign In")
	public ResponseEntity<?> userSignIn(@RequestBody @Valid AuthRequest dto) {
		System.out.println("in user sign in " + dto);

		System.out.println("i am here!!!");
		Authentication successfulAuth = authenticationManager
				.authenticate
				(new UsernamePasswordAuthenticationToken
						(dto.getEmail(), dto.getPassword()));
		
		System.out.println(successfulAuth.isAuthenticated());
		/*
		 * In case of successful auth - send signed JWT in resp DTO to the clnt
		 */
		String jwt = jwtUtils.generateJwtToken(successfulAuth);
		return ResponseEntity.
				status(HttpStatus.CREATED)
				.body(new AdminRespDto("success","Successful Authentication", jwt));

	}

}
