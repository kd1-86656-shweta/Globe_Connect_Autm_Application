package com.blogs.pojo;
import com.blogs.enums.*;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Entity
@Table(name = "communities")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true)  // Includes the properties of the parent class "Base"
public class Community extends Base {

    @Column(name = "title", length = 100, nullable = false, unique = true)
    private String title;

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "rules", length = 500)
    private String rules;

    // ManyToOne relationship with User (owner)
    @ManyToOne(fetch = FetchType.LAZY)  // Assuming one owner per community
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    // Profile image (BLOB)
    @Lob
    @Column(name = "community_image", columnDefinition = "LONGBLOB")
    private byte[] communityImage;  // BLOB or binary type for images

    // Category (Assuming it's an enum type)
    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private Category category;

    // Status (Assuming it's an enum type like ACTIVE, INACTIVE)
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status = Status.ACTIVE; 

    // ManyToMany relationship with User (members)
    @ManyToMany(mappedBy = "communityList", fetch = FetchType.LAZY)  // Assuming 'User' has a 'communityList' field
    private List<User> memberList = new ArrayList<>();

    // OneToMany relationship with Post (one community can have many posts)
    @OneToMany(mappedBy = "community", fetch = FetchType.LAZY)  // Assuming 'Post' has a 'community' field
    private List<Post> postList = new ArrayList<>();
}
