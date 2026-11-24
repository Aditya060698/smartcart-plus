package com.smartcart.backend.entity;

import com.smartcart.backend.utils.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class User {
    @Id @GeneratedValue
    private Long id;
    private String username;
    private String email;
    private String passwordHash;
    
    @Enumerated(EnumType.STRING)
    private Role role;
}
