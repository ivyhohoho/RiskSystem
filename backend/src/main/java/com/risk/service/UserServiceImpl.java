package com.risk.service;

import com.risk.model.User;
import com.risk.model.dto.UserDto;
import com.risk.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

	//It will be provided on WebSecurityConfig as @Bean
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public User saveUser(final User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    //save = create or update
    @Override
    public User updateUser(final User user){
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(final Long userId){
        userRepository.deleteById(userId);
    }

    @Override
    public User findByUsername(final String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public List<UserDto> findAllUsers(){
        ModelMapper modelMapper = new ModelMapper();
        return userRepository.findAll().stream()
            .map(user -> modelMapper.map(user, UserDto.class))
            .collect(Collectors.toList());
    }

    @Override
    public Long numberOfUsers(){
        return userRepository.count();
    }

}
