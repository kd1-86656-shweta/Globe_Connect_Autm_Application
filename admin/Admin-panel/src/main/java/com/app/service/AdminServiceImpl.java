package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dto.AdminDto;
import com.app.entities.AdminEntity;
import com.app.repository.UserEntityRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private UserEntityRepository userEntityRepository;
	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public AdminDto signupUser(AdminDto dto) {
		//1. map DTO -> entity
		AdminEntity user=modelMapper.map(dto, AdminEntity.class);
		//2. encode password
		user.setPassword(encoder.encode(user.getPassword()));
		//3. save
		AdminEntity persistentUser = userEntityRepository.save(user);
		return modelMapper.map(persistentUser, AdminDto.class);
	}

}
