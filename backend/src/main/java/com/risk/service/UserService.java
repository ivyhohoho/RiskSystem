package com.risk.service;

import com.risk.model.User;
import com.risk.model.dto.UserDto;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    User updateUser(User user);

    void deleteUser(Long userId);

    User findByUsername(String username);

    List<UserDto> findAllUsers();

    Long numberOfUsers();
}
