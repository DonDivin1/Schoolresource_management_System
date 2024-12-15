package com.example.schoolresourcemanagement.repository;

import com.example.schoolresourcemanagement.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {}