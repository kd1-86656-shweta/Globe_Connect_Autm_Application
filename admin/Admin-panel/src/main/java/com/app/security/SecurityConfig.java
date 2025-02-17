package com.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.app.config.CorsConfig; // Assuming you created this class

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private CustomJwtAuthenticationFilter jwtFilter;

    @Autowired
    private CorsConfig corsConfig;  // Injecting the CorsConfig

    @SuppressWarnings("removal")
    @Bean
    @CrossOrigin(origins = "http://localhost:3001")
    public SecurityFilterChain authorizeRequests(HttpSecurity http) throws Exception {
        System.out.print("i am at 1st");
        http.csrf(customizer -> customizer.disable())
           // .cors().configurationSource(corsConfig.corsConfigurationSource()) // Apply CORS Configuration
            .authorizeHttpRequests(request -> 
                request.requestMatchers("/admin/signup", "/admin/signin", "/v*/api-doc*/**", "/swagger-ui/**")
                    .permitAll()  // Allow unauthenticated access to these endpoints
                    .anyRequest().authenticated()  // Any other request should be authenticated
            )
            .sessionManagement(session -> 
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)  // No sessions
            )
            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);  // Custom JWT filter

        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
