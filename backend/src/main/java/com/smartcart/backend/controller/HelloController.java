package com.smartcart.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.smartcart.backend.entity.TestEntity;
import com.smartcart.backend.repository.TestRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class HelloController {

    @Autowired
    private TestRepository testRepository;

    @GetMapping("/hello")
    public String hello() {
        try {
            // Write + Read test (safer than select 1 for JPA)
            TestEntity test = new TestEntity(1L);
            testRepository.save(test);
            testRepository.findById(1L);
            return "Hello from backend! ✅ JPA & DB are working.";
        } catch (Exception e) {
            return "Hello from backend! ❌ DB or JPA issue: " + e.getMessage();
        }
    }
}
