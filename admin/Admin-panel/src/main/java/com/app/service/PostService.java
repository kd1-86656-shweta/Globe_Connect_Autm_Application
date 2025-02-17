package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;

import com.app.dto.CommunityDto;
import com.app.dto.PostDto;

@Service
public class PostService {

	private final RestTemplate restTemplate;

    // Constructor injection of RestTemplate
    @Autowired
    public PostService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // Method to fetch communities from an external API
    public List<PostDto> fetchAllPost() {
        String url = "http://localhost:8080/posts/get-all"; // Replace with your actual URL

        try {
            // Make the API call and capture the response
            ResponseEntity<List<PostDto>> response = restTemplate.exchange(
                url, 
                HttpMethod.GET, 
                null, 
                new ParameterizedTypeReference<List<PostDto>>() {}
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
