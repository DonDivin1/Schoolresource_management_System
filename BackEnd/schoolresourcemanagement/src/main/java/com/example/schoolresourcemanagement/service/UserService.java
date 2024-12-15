package com.example.schoolresourcemanagement.service;

import com.example.schoolresourcemanagement.model.Users;
import com.example.schoolresourcemanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Users registerUser (Users user) {
        return userRepository.save(user);
    }

    public Users findUserByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }
}