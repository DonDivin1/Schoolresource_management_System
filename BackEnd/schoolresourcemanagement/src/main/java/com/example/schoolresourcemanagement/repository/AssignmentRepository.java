package com.example.schoolresourcemanagement.repository;

import com.example.schoolresourcemanagement.model.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {}