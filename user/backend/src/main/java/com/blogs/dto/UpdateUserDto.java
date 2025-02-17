package com.blogs.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdateUserDto {

    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private String userName;
    private byte[] profileImage;
}
