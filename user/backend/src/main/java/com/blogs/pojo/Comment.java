package com.blogs.pojo;
import com.blogs.enums.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "comments")
@Getter
@Setter
@NoArgsConstructor
public class Comment extends Base {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)  // Foreign key linking to Post
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)  // Foreign key linking to User
    private User user;

    // A comment can have a parent comment (for replies), self-referencing relationship
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")  // Foreign key for parent comment (nullable for top-level comments)
    private Comment parent;

    @Column(name = "comment", columnDefinition = "TEXT", nullable = false)
    private String comment;
    
    @Enumerated(EnumType.STRING)
    Status status=Status.ACTIVE;

    // Additional fields for timestamps, upvotes, etc. can be added here if needed
}
