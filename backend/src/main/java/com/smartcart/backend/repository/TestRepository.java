package com.smartcart.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smartcart.backend.entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Long> {}