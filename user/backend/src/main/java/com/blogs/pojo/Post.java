package com.blogs.pojo;
import com.blogs.enums.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "posts")
@Getter
@Setter
@NoArgsConstructor
public class Post extends Base {

    @ManyToOne(fetch = FetchType.LAZY)  // Many posts can be created by one user
    @JoinColumn(name = "user_id", nullable = false)  // FK column linking to User
    private User postUser;

    @ManyToOne(fetch = FetchType.LAZY)  // Many posts can belong to one community
    @JoinColumn(name = "community_id", nullable = false)  // FK column linking to Community
    private Community community;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "captions", length = 500)
    private String captions;

    private String mediaUrl;
    
    // Status (ACTIVE, INACTIVE, etc.)
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status = Status.ACTIVE;

    @Column(name = "comments_count", nullable = false)
    private int commentsCount;

    @Column(name = "upvote_count", nullable = false)
    private int countUpvote;

    @Column(name = "downvote_count", nullable = false)
    private int countdownVote;

    // One post can have many comments
    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY)  // Assuming 'Comment' has a 'post' field
    private List<Comment> commentList = new ArrayList<>();
}
