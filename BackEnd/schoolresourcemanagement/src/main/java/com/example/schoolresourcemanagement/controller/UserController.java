package com.example.schoolresourcemanagement.controller;

import com.example.schoolresourcemanagement.model.Users;
import com.example.schoolresourcemanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser (@RequestBody Users user) {
        Users registeredUser  = userService.registerUser (user);
        return ResponseEntity.status(HttpStatus.CREATED).body(registeredUser );
    }

    @GetMapping("/{username}")
    public ResponseEntity<Users> getUserByUsername(@PathVariable String username) {
        Users user = userService.findUserByUsername(username);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }
}