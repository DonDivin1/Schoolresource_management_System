
package com.example.schoolresourcemanagement.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Resource resource;

    @ManyToOne
    private Users user;

    private LocalDate dueDate;

    // Getters and Setters
}