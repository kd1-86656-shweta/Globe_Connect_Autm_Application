package com.blogs.pojo;

import com.blogs.enums.Reactions;

import jakarta.persistence.Column;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;
import jakarta.persistence.*;

@Entity
@Table(name = "votes")
@Getter
@Setter
@NoArgsConstructor  
@AllArgsConstructor 
@Builder
public class Vote extends Base {
    
    @Enumerated(EnumType.STRING)
    @Column(name = "reaction")
    private Reactions reaction;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id")
    private Post postId;
}
