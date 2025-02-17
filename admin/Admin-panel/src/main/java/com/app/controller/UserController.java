package com.app.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PostDto;
import com.app.dto.UserDto;
import com.app.service.UserService;

@RestController
public class UserController {
	

	    @Autowired
		private final UserService userService;

	    // Constructor injection of ApiService
	    @Autowired
	    public UserController(UserService userService) {
	        this.userService = userService;
	    }
	    
	    @GetMapping("/users")
	    public List<UserDto> fetchExternalData() {
	        System.out.println("I am at user get-all method");
	        return userService.fetchAllUser();  // Fetch data from external API via service
	    }

}
