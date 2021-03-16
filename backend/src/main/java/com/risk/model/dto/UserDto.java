package com.risk.model.dto;

import com.risk.model.Role;
import lombok.Data;

@Data
public class UserDto {

    private Long id;

    private String name;

    private String username;

    private Role role;
}
