package com.example.schoolresourcemanagement.repository;

import com.example.schoolresourcemanagement.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {}