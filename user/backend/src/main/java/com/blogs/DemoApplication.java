package com.blogs;
import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.blogs.dto.PostResponseDto;
import com.blogs.pojo.Post;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper(); // creating empty model mapper
		mapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)// prop names n data type must match
																				// between src n dest
				.setPropertyCondition(Conditions.isNotNull());// DO NOT transfer nulls from src ->dest
		

	   //  Custom mapping for Post to PostResponseDto
		mapper.addMappings(new PropertyMap<Post, PostResponseDto>() {
	        @Override
	        protected void configure() {
	            map().setPostId(source.getId());
	            map().setUserId(source.getPostUser().getId()); 
	            map().setCommunityId(source.getCommunity().getId()); 
	        }
	    });

		
		
		return mapper;
	}

}
