package com.example.schoolresourcemanagement.model;

import jakarta.persistence.*;

@Entity
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Users user; // Teacher or Student

    @ManyToOne
    private Resource resource;
    private String status; // Pending, Approved, Rejected
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Users getUser() {
        return user;
    }
    public void setUser(Users user) {
        this.user = user;
    }
    public Resource getResource() {
        return resource;
    }
    public void setResource(Resource resource) {
        this.resource = resource;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    // Getters and Setters
}
