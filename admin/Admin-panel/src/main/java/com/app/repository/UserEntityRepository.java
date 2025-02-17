package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AdminEntity;

public interface UserEntityRepository extends JpaRepository<AdminEntity, Long> {
	Optional<AdminEntity> findByEmail(String em);
}
