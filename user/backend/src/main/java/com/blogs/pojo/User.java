package com.blogs.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import com.blogs.enums.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.JoinColumn;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString(callSuper = true, exclude = {"communityList", "postList"}) // Exclude to prevent recursion
public class User extends Base {

    @Column(name = "first_name", length = 30)
    private String firstName;

    @Column(name = "last_name", length = 30)
    private String lastName;

    @Column(name = "user_name", unique = true, length = 30)
    private String userName;

//    @Column(name = "email", unique = true, length = 100)
    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "mobile", length = 12)
    private String mobile;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "password", length = 8)
    private String password;

    @Column(name = "bio")
    private String bio;

    @Column(columnDefinition = "LONGBLOB")
    private byte[] profileImage;


    @Enumerated(EnumType.STRING)
    @Column(name = "gender")
    private Gender gender;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_communities", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "community_id")
    )
    @JsonIgnore  // Prevents recursive JSON serialization
    private List<Community> communityList = new ArrayList<>();

    @OneToMany(mappedBy = "postUser", fetch = FetchType.LAZY)
    @JsonIgnore  // Prevents recursive JSON serialization
    private List<Post> postList = new ArrayList<>();
}