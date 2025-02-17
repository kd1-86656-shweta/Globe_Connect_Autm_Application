package com.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CommunityDto;
import com.app.service.ApiService;

import java.util.List;

@RestController
public class ApiController {

    private final ApiService apiService;

    // Constructor injection of ApiService
    @Autowired
    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/get-all")
    public List<CommunityDto> fetchExternalData() {
        System.out.println("I am at get-all method");
        return apiService.fetchAllCommunities();  // Fetch data from external API via service
    }
}
