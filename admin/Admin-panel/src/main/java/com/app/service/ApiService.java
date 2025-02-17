package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;  // Correct HttpMethod import
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.ResponseEntity;

import com.app.dto.CommunityDto;

import java.util.List;

@Service
public class ApiService {

    private final RestTemplate restTemplate;

    // Constructor injection of RestTemplate
    @Autowired
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Method to fetch communities from an external API
    public List<CommunityDto> fetchAllCommunities() {
        String url = "http://localhost:8080/community/get-all"; // Replace with your actual URL

        try {
            // Make the API call and capture the response
            ResponseEntity<List<CommunityDto>> response = restTemplate.exchange(
                url, 
                HttpMethod.GET, 
                null, 
                new ParameterizedTypeReference<List<CommunityDto>>() {}
            );

            // Return the list of CommunityDto from the response
            return response.getBody();
        } 
        catch (HttpClientErrorException | HttpServerErrorException e) {
            // Handle 4xx or 5xx errors (client or server errors)
            System.out.println("Error response: " + e.getStatusCode());
            e.printStackTrace();
        } catch (Exception e) {
            // Handle any other unexpected errors
            System.out.println("An error occurred: " + e.getMessage());
            e.printStackTrace();
        }
        
        // Return an empty list or null if an error occurs
        return null;  // or return new ArrayList<>() if you prefer an empty list
    }
}
