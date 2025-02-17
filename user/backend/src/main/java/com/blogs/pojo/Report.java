package com.blogs.pojo;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import jakarta.persistence.*;

@Entity
@Table(name = "reports")
@Getter
@Setter
@NoArgsConstructor  // Lombok will generate the no-args constructor
@AllArgsConstructor // Lombok will generate the all-args constructor
@Builder // Lombok will generate the builder pattern
public class Report extends Base {

    @ManyToOne(fetch = FetchType.LAZY)  // Many reports can be reported by one user
    @JoinColumn(name = "reporter_id")  // Foreign key column for the reporter (user)
    private User reporterId;

    @ManyToOne(fetch = FetchType.LAZY)  // Many reports can be linked to one community
    @JoinColumn(name = "community_id")  // Foreign key column for the community
    private Community communityId;

    @ManyToOne(fetch = FetchType.LAZY)  // Many reports can be linked to one post
    @JoinColumn(name = "post_id")  // Foreign key column for the post
    private Post postId;

    @Column(name = "title", nullable = false)  // Column for report title, cannot be null
    private String title;

    @Column(name = "description", nullable = false)  // Column for report description, cannot be null
    private String description;
}
