package com.example.schoolresourcemanagement.controller;

import com.example.schoolresourcemanagement.model.Resource;
import com.example.schoolresourcemanagement.service.ResourceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {
    @Autowired
    private ResourceService resourceService;

    @PostMapping
    public ResponseEntity<Resource> addResource(@RequestBody Resource resource) {
        Resource createdResource = resourceService.addResource(resource);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdResource);
    }

    @GetMapping
    public ResponseEntity<List<Resource>> getAllResources() {
        List<Resource> resources = resourceService.getAllResources();
        return ResponseEntity.ok(resources);
    }
}