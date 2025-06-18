package com.smartcart.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class TestEntity {

    @Id
    private Long tid;

    public TestEntity() {}

    public TestEntity(Long id) {
        this.tid = id;
    }

    // Getters and setters
    public Long getId() { return tid; }
    public void setId(Long id) { this.tid = id; }
}
